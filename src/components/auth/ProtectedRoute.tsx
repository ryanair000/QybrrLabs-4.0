import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

interface ProtectedRouteProps {
  children: ReactElement;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user, loading } = useAuth();

  if (loading) return null; // could show loader
  if (!user) return <Navigate to="/login" replace />;


  return children;
};

export default ProtectedRoute;
