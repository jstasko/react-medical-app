import LogoutIcon from '@mui/icons-material/Logout';
import PeopleIcon from '@mui/icons-material/People';
import LoginIcon from '@mui/icons-material/Login';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Icon } from '@mui/material';
import {logout} from "../../services/AuthenticationService";

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon component={name} width={22} height={22} />;

export const sidebarConfig = [
  {
    title: 'login',
    path: '/login',
    icon: getIcon(LoginIcon),
    action: null
  },
  {
    title: 'register',
    path: '/register',
    icon: getIcon(LockOpenIcon),
    action: null
  },
];

export const sidebarConfigLogIn = [
  {
    title: 'user',
    path: '/profile',
    icon: getIcon(PeopleIcon),
    action: null
  },
  {
    title: 'logout',
    path: '/login',
    icon: getIcon(LogoutIcon),
    action: logout
  },
];

