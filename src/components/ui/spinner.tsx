import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SpinnerProps {
  className?: string;
  size?: number;
}

const Spinner = ({ className, size = 20 }: SpinnerProps) => (
  <Loader2
    className={cn('animate-spin', className)}
    size={size}
    strokeWidth={2.4}
  />
);

export default Spinner;
