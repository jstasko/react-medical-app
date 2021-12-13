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
import Doctors from "./containers/doctors/Doctors";
import Records from "./containers/records/Records";
import Specializations from "./containers/specializations/Specializations";
import Cards from "./containers/cards/Cards";
import Count from "./containers/players/Count";
import Aphotecaries from "./containers/aphotecary/Aphotecaries";
import DoctorsRanking from "./containers/doctors/DoctorsRanking";
import {getCurrentUser} from "./services/auth/AuthenticationService";
import DoctorEdit from "./containers/doctors/DoctorEdit";

export default function Router() {

  const user = getCurrentUser();

  const childrens = [
    { element: <Navigate to="/dashboard/app" replace /> },
    { path: 'app', element: <Dashboard /> },
    { path: 'profile', element: <Profile /> },
    { path: 'players', element: <Players />},
    { path: 'players/count', element: <Count />},
    { path: 'players/:id/operations', element: <PlayersOperations /> },
    { path: 'players/:id/sickness', element: <PlayersSickness /> },
    { path: 'players/:id/medications', element: <PlayersMedication /> },
    { path: 'players/:id/edit', element: <PlayerEdit /> },
    { path: 'players/:id/json', element: <PlayersJson /> },
    { path: 'doctors', element: <Doctors /> },
    { path: 'doctors/ranking', element: <DoctorsRanking /> },
    { path: 'doctors/:id/edit', element: <DoctorEdit /> },
    { path: 'records', element: <Records /> },
    { path: 'specializations', element: <Specializations /> },
    { path: 'cards', element: <Cards /> },
    { path: 'aphotecary', element: <Aphotecaries /> },
  ]

  return useRoutes([
    {path: '/dashboard',
      element: <DashboardMain />,
      children: user ? childrens : [
        { path: '*' , element: <Navigate to="/login" /> },
      ]
    },
    {path: '/', element: <Navigate to="/dashboard" />},
    {path: '/login', element: <Login />},
    {path: '/register', element: <Register />},
    { path: '*', element: <Page404 />}
  ]);
}
