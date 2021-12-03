import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Icon} from "@mui/material";
import {ITableHead} from "../../../entities/TableHead";
import {IButtonsArray, IMoreIcons} from "../../../layouts/listing/ListHeader";

const getIcon = (name) => <Icon component={name} width={22} height={22} />;

export const head: ITableHead[] = [
  { id: 'LIEK', label: 'Liek', alignRight: false },
  { id: 'VYROBCA', label: 'Vyrobca', alignRight: false },
];

export const buttons: IButtonsArray[] = [
  {
    title: 'Back',
    pathTo: '/dashboard/players',
    icon: getIcon(ArrowBackIcon)
  }
]

export const moreIcons: IMoreIcons[] = []

export const rowsPerPageOptions: number[] = [10, 20, 50];
