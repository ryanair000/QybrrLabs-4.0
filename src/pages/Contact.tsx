import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import SEO from '@/components/SEO';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const { user } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.from('contact_messages').insert({
      name,
      email,
      message,
      user_id: user?.id ?? null,
    });
    setLoading(false);

    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success('Message sent! We will get back to you shortly.');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <>
      <SEO title="Contact | QybrrLabs" description="Get in touch with the QybrrLabs team." pathname="/contact" />
    <Layout>
      <section className="py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-6 text-gray-900">Contact Us</h1>
          <p className="text-center text-gray-600 mb-10">
            Have a question or want to work with us? Fill out the form and our team will reach out.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-md">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <Button type="submit" disabled={loading}>
              {loading ? (
                <>
                  <Spinner className="mr-2" size={16} />
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </Button>
          </form>
        </div>
      </section>
    </Layout>
    </>
  );
};

export default Contact;
