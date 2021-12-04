import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Icon} from "@mui/material";
import {ITableHead} from "../../../entities/TableHead";
import {IButtonsArray} from "../../../layouts/listing/ListHeader";

const getIcon = (name) => <Icon component={name} width={22} height={22} />;

export const head: ITableHead[] = [
  { id: 'MENO', label: 'Doktor meno', alignRight: false },
  { id: 'PRIEZVISKO', label: 'Doktor priezvisko', alignRight: false },
  { id: 'NAZOV', label: 'Operacia', alignRight: false },
];

export const buttons: IButtonsArray[] = [
  {
    title: 'Back',
    pathTo: '/dashboard/players',
    icon: getIcon(ArrowBackIcon)
  }
]

export const rowsPerPageOptions: number[] = [10, 20, 50];
