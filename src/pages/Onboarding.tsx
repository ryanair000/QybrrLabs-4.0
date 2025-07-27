import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/lib/supabase';
import { useAuth } from '@/hooks/useAuth';
import Layout from '@/components/layout/Layout';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';

const Onboarding = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [fullName, setFullName] = useState(user?.user_metadata?.full_name ?? '');
  const [role, setRole] = useState('');
  const [services, setServices] = useState<string[]>([]);
  const [discover, setDiscover] = useState('');
  const [contact, setContact] = useState('');
  const [goals, setGoals] = useState('');
  const [loading, setLoading] = useState(false);

  const finish = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    setLoading(true);
    const { error } = await supabase.auth.updateUser({
      data: { full_name: fullName, onboarded: true, survey: { role, services, discover, contact, goals } },
    });
    setLoading(false);
    if (error) {
      toast.error(error.message);
    } else {
      toast.success('Welcome to QybrrLabs!');
      navigate('/');
    }
  };

  return (
    <Layout>
      <div className="max-w-lg mx-auto py-20 px-4 space-y-8">
        <h1 className="text-3xl font-semibold text-center">Welcome!</h1>
        <p className="text-center text-gray-600">Tell us a bit about yourself to get started.</p>
        <form onSubmit={finish} className="space-y-6">
          {/* Full Name */}
          <div>
            <Label htmlFor="fullName">Full Name</Label>
            <Input id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} />
          </div>

          {/* Role */}
          <div>
            <Label>Which best describes you?</Label>
            <RadioGroup value={role} onValueChange={setRole} className="mt-2">
              {['Entrepreneur','Small business owner','Developer','Student','Other'].map(opt => (
                <div key={opt} className="flex items-center space-x-2">
                  <RadioGroupItem value={opt} id={opt} />
                  <Label htmlFor={opt}>{opt}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Services */}
          <div>
            <Label>Select the services you’re interested in</Label>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {['Web Development','Mobile Apps','AI/ML','Cloud Consulting','UI/UX Design'].map(s => (
                <div key={s} className="flex items-center space-x-2">
                  <Checkbox id={s} checked={services.includes(s)} onCheckedChange={(checked) => {
                    setServices(prev => checked ? [...prev,s] : prev.filter(i=>i!==s));
                  }} />
                  <Label htmlFor={s}>{s}</Label>
                </div>
              ))}
            </div>
          </div>

          {/* Discover */}
          <div>
            <Label>How did you hear about QybrrLabs?</Label>
            <RadioGroup value={discover} onValueChange={setDiscover} className="mt-2">
              {['Google','Social Media','Referral','Event','Other'].map(src => (
                <div key={src} className="flex items-center space-x-2">
                  <RadioGroupItem value={src} id={src} />
                  <Label htmlFor={src}>{src}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Contact */}
          <div>
            <Label>Preferred contact method?</Label>
            <RadioGroup value={contact} onValueChange={setContact} className="mt-2">
              {['Email','Phone','WhatsApp','Telegram'].map(c => (
                <div key={c} className="flex items-center space-x-2">
                  <RadioGroupItem value={c} id={c} />
                  <Label htmlFor={c}>{c}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Goals */}
          <div>
            <Label htmlFor="goals">What do you hope to achieve with us?</Label>
            <textarea id="goals" className="w-full border rounded-md p-2 mt-2" rows={3} value={goals} onChange={(e)=>setGoals(e.target.value)} />
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Saving...' : 'Finish'}
          </Button>
        </form>
      </div>
    </Layout>
  );
};

export default Onboarding;
