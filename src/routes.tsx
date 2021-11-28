import {useRoutes } from 'react-router-dom';
import Login from './containers/Login';
import Register from "./containers/Register";
import Profile from "./containers/Profile";
import Page404 from "./containers/Page404";
import DashboardMain from "./containers/dasboard/DashboardMain";

export default function Router() {
  return useRoutes([
    {path: '/dashboard', element: <DashboardMain />},
    {path: '/', element: <DashboardMain />},
    {path: '/login', element: <Login />},
    {path: '/register', element: <Register />},
    {path: '/profile', element: <Profile />},
    { path: '*', element: <Page404 />}
  ]);
}
