import {Navigate, useRoutes } from 'react-router-dom';
import Login from './containers/Login';
import Register from "./containers/Register";
import Profile from "./containers/Profile";
import Page404 from "./containers/Page404";
import DashboardMain from "./containers/dasboard/DashboardMain";
import Dashboard from "./containers/dasboard/Dashboard";
import Players from "./containers/players/Players";
import PlayersOperations from "./containers/players/operations/PlayersOperations";
import PlayersSickness from "./containers/players/sickness/PlayersSickness";
import PlayersMedication from "./containers/players/medication/PlayersMedication";
import PlayerEdit from "./containers/players/PlayerEdit";
import PlayersJson from "./containers/players/PlayersJson";

export default function Router() {
  return useRoutes([
    {path: '/dashboard',
      element: <DashboardMain />,
      children: [
        { element: <Navigate to="/dashboard/app" replace /> },
        { path: 'app', element: <Dashboard /> },
        { path: 'profile', element: <Profile /> },
        { path: 'players', element: <Players />},
        { path: 'players/:id/operations', element: <PlayersOperations /> },
        { path: 'players/:id/sickness', element: <PlayersSickness /> },
        { path: 'players/:id/medications', element: <PlayersMedication /> },
        { path: 'players/:id/edit', element: <PlayerEdit /> },
        { path: 'players/:id/json', element: <PlayersJson /> },
      ]
    },
    {path: '/', element: <Navigate to="/dashboard" />},
    {path: '/login', element: <Login />},
    {path: '/register', element: <Register />},
    { path: '*', element: <Page404 />}
  ]);
}
