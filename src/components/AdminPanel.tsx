import { useAuth } from '../contexts/AuthContext';
import AdminLogin from './AdminLogin';
import AdminDashboard from './AdminDashboard';

const AdminPanel = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <AdminLogin />;
  }

  return <AdminDashboard />;
};

export default AdminPanel;