import {Navigate, useRoutes } from 'react-router-dom';
import Login from './containers/Login';
import Register from "./containers/Register";
import Profile from "./containers/Profile";
import Page404 from "./containers/Page404";
import DashboardMain from "./containers/dasboard/DashboardMain";
import Dashboard from "./containers/dasboard/Dashboard";

export default function Router() {
  return useRoutes([
    {path: '/dashboard',
      element: <DashboardMain />,
      children: [
        { element: <Navigate to="/dashboard/app" replace /> },
        { path: 'app', element: <Dashboard /> },
        { path: 'profile', element: <Profile /> },
      ]
    },
    {path: '/', element: <Navigate to="/dashboard" />},
    {path: '/login', element: <Login />},
    {path: '/register', element: <Register />},
    { path: '*', element: <Page404 />}
  ]);
}
