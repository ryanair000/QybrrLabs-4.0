import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';

interface WizardProps {
  open: boolean;
  onClose: () => void;
}

const steps = ['About you', 'Role', 'Services', 'Discover', 'Goals'];

const OnboardingWizard = ({ open, onClose }: WizardProps) => {
  const { user, setUser } = useAuth() as any; // extend to expose setUser.
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);

  // form states
  const [fullName, setFullName] = useState(user?.user_metadata?.full_name ?? '');
  const [role, setRole] = useState('');
  const [services, setServices] = useState<string[]>([]);
  const [discover, setDiscover] = useState('');
  const [goals, setGoals] = useState('');

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const finish = async () => {
    if (!user) return;
    setLoading(true);
    const { error, data } = await supabase.auth.updateUser({
      data: {
        full_name: fullName,
        onboarded: true,
        survey: { role, services, discover, goals },
      },
    });
    setLoading(false);
    if (error) {
      toast.error(error.message);
    } else {
      toast.success('Onboarding complete!');
      // update local user
      setUser(data.user);
      onClose();
    }
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div className="space-y-4">
            <Label htmlFor="name">Full name</Label>
            <Input id="name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
          </div>
        );
      case 1:
        return (
          <div>
            <Label>Which best describes you?</Label>
            <RadioGroup value={role} onValueChange={setRole} className="mt-4 space-y-2">
              {['Entrepreneur', 'Small business owner', 'Developer', 'Student', 'Other'].map((opt) => (
                <div key={opt} className="flex items-center space-x-2">
                  <RadioGroupItem value={opt} id={opt} />
                  <Label htmlFor={opt}>{opt}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );
      case 2:
        return (
          <div>
            <Label>Select the services you’re interested in</Label>
            <div className="grid grid-cols-2 gap-3 mt-4">
              {['Web Development', 'Mobile Apps', 'AI/ML', 'Cloud Consulting', 'UI/UX Design'].map((s) => (
                <div key={s} className="flex items-center space-x-2">
                  <Checkbox
                    id={s}
                    checked={services.includes(s)}
                    onCheckedChange={(checked) =>
                      setServices((prev) =>
                        checked ? [...prev, s] : prev.filter((i) => i !== s)
                      )
                    }
                  />
                  <Label htmlFor={s}>{s}</Label>
                </div>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <Label>How did you hear about QybrrLabs?</Label>
            <RadioGroup value={discover} onValueChange={setDiscover} className="mt-4 space-y-2">
              {['Google', 'Social Media', 'Referral', 'Event', 'Other'].map((src) => (
                <div key={src} className="flex items-center space-x-2">
                  <RadioGroupItem value={src} id={src} />
                  <Label htmlFor={src}>{src}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );
      case 4:
        return (
          <div className="space-y-4">
            <Label htmlFor="goals">What do you hope to achieve with us?</Label>
            <textarea
              id="goals"
              className="w-full border rounded-md p-2"
              rows={3}
              value={goals}
              onChange={(e) => setGoals(e.target.value)}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Dialog open={open}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>{steps[step]}</DialogTitle>
        </DialogHeader>

        {/* progress bar */}
        <div className="w-full h-2 bg-gray-200 rounded mb-6 overflow-hidden">
          <div
            className="bg-purple-600 h-full transition-all duration-300"
            style={{ width: `${((step + 1) / steps.length) * 100}%` }}
          />
        </div>

        {renderStep()}

        <DialogFooter className="mt-6 flex justify-between">
          <Button variant="ghost" disabled={step === 0} onClick={back}>
            Back
          </Button>
          {step === steps.length - 1 ? (
            <Button onClick={finish} disabled={loading}>
              {loading ? 'Saving...' : 'Finish'}
            </Button>
          ) : (
            <Button onClick={next}>Next</Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default OnboardingWizard;
