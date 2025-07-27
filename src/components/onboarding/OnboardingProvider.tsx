import { ReactNode, useEffect, useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import OnboardingWizard from './OnboardingWizard';

const OnboardingProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(!!user && !user.user_metadata?.onboarded);
  }, [user]);

  return (
    <>
      {children}
      {user && <OnboardingWizard open={show} onClose={() => setShow(false)} />}
    </>
  );
};

export default OnboardingProvider;
