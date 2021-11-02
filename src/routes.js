import { Navigate, Route } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import MainLayout from './components/MainLayout';
import Account from './pages/Account';
import CustomerList from './pages/CustomerList';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Settings from './pages/Settings';
import PageList from './pages/PageList'
import PageDetail from './pages/PageList/PageDetail';
import PageCreateForm from './pages/PageList/PageCreateForm';
import ClientPage from './components/client/ClientPage';


const routes = ({ isLogin }) => {
  return [
    {
      path: 'app',
      element: <DashboardLayout />,
      children: [
        { path: 'account', element: <Account /> },
        { path: 'customers', element: <CustomerList /> },
        { path: 'dashboard', element: <Dashboard /> },
        { path: 'products', element: <ProductList /> },
        { path: 'settings', element: <Settings /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '/', element: <Navigate to="/defipresale" /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    {
      path: '/admin',
      element: isLogin ? <DashboardLayout /> : <Navigate to="/login" />,
      children: [
        { path: 'page', element: <PageList /> },
        { path: 'page/:id', element: <PageDetail /> },
        { path: 'create/page', element: <PageCreateForm /> }
      ]
    }, {
      path: '/defipresale',
      element: <ClientPage />
    }
  ];
}

export default routes;
