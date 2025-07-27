import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { toast } from 'sonner';

const EmailVerificationBanner = () => {
  const { user } = useAuth();
  const [dismissed, setDismissed] = useState(() => {
    return localStorage.getItem('email-banner-dismissed') === '1';
  });
  const [sending, setSending] = useState(false);

  if (!user || user.email_confirmed_at || dismissed) return null;

  const resend = async () => {
    setSending(true);
    const { error } = await supabase.auth.resend({ type: 'signup', email: user.email! });
    setSending(false);
    if (error) {
      toast.error(error.message);
    } else {
      toast.success('Verification email sent');
    }
  };

  const dismiss = () => {
    setDismissed(true);
    localStorage.setItem('email-banner-dismissed', '1');
  };

  return (
    <div className="bg-yellow-100 border-b border-yellow-300 text-yellow-900 px-4 py-3 flex items-center justify-between text-sm">
      <span>Verify your email to unlock all features.</span>
      <div className="flex items-center gap-3">
        <Button size="sm" variant="outline" onClick={resend} disabled={sending}>
          {sending ? 'Sending...' : 'Resend link'}
        </Button>
        <button onClick={dismiss} className="text-yellow-900 hover:text-yellow-700">
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default EmailVerificationBanner;
