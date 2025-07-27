import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

const AdminRoute = ({ children }: { children: ReactElement }) => {
  const { user, loading } = useAuth();

  if (loading) return null;
  if (!user) return <Navigate to="/login" replace />;
  if (!user.user_metadata?.is_admin) return <Navigate to="/" replace />;

  return children;
};

export default AdminRoute;
