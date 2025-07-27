import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useAuth } from '@/hooks/useAuth';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import Layout from '@/components/layout/Layout';

const Profile = () => {
  const { user, session } = useAuth();
  const [fullName, setFullName] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [loading, setLoading] = useState(false);

  // Load metadata on mount or user change
  useEffect(() => {
    if (!user) return;
    setFullName(user.user_metadata?.full_name ?? '');
    setAvatarUrl(user.user_metadata?.avatar_url ?? '');
  }, [user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!session) return;

    setLoading(true);
    const { error } = await supabase.auth.updateUser({
      data: {
        full_name: fullName,
        avatar_url: avatarUrl,
      },
    });
    setLoading(false);

    if (error) {
      toast.error(error.message);
    } else {
      toast.success('Profile updated');
    }
  };

  if (!user) return null; // ProtectedRoute ensures auth, but fallback

  return (
    <Layout>
    <div className="max-w-lg mx-auto py-16 px-4">
      <h1 className="text-2xl font-semibold mb-6">My Profile</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" value={user.email ?? ''} disabled />
        </div>
        <div>
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="avatarUrl">Avatar URL</Label>
          <Input
            id="avatarUrl"
            value={avatarUrl}
            onChange={(e) => setAvatarUrl(e.target.value)}
          />
        </div>
        <Button type="submit" disabled={loading} className="w-full">
          {loading ? 'Saving...' : 'Save Changes'}
        </Button>
      </form>
    </div>
    </Layout>
  );
};

export default Profile;
