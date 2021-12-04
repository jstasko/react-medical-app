import LogoutIcon from '@mui/icons-material/Logout';
import PeopleIcon from '@mui/icons-material/People';
import LoginIcon from '@mui/icons-material/Login';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import GroupsIcon from '@mui/icons-material/Groups';
import { Icon } from '@mui/material';
import {logout} from "../../services/auth/AuthenticationService";
import MasksIcon from '@mui/icons-material/Masks';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

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
    title: 'Profil',
    path: '/dashboard/profile',
    icon: getIcon(PeopleIcon),
    action: null
  },
  {
    title: 'Doktory',
    path: '/dashboard/doctors',
    icon: getIcon(MasksIcon),
    action: null
  },
  {
    title: 'Hraci',
    path: '/dashboard/players',
    icon: getIcon(GroupsIcon),
    action: null
  },
  {
    title: 'Zdravotne prehliadky',
    path: '/dashboard/records',
    icon: getIcon(ReceiptLongIcon),
    action: null
  },
  {
    title: 'Specializovane nemocnice',
    path: '/dashboard/specializations',
    icon: getIcon(LocalHospitalIcon),
    action: null
  },
  {
    title: 'Zdravotne karty',
    path: '/dashboard/cards',
    icon: getIcon(RecentActorsIcon),
    action: null
  },
  {
    title: 'Najlepsie lekarne',
    path: '/dashboard/aphotecary',
    icon: getIcon(AddShoppingCartIcon),
    action: null
  },
  {
    title: 'logout',
    path: '/login',
    icon: getIcon(LogoutIcon),
    action: logout
  },
];

