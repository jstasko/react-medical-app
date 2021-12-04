import {Icon} from "@mui/material";
import {ITableHead} from "../../entities/TableHead";
import {IButtonsArray} from "../../layouts/listing/ListHeader";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const getIcon = (name) => <Icon component={name} width={22} height={22} />;

export const head: ITableHead[] = [
  { id: 'NAZOV', label: 'Nazov', alignRight: false },
  { id: 'POCETHRACOV', label: 'Pocet hracov', alignRight: false },
];

export const buttons: IButtonsArray[] = [
  {
    title: 'Back',
    pathTo: '/dashboard/players',
    icon: getIcon(ArrowBackIcon)
  }
]

export const rowsPerPageOptions: number[] = [10, 20, 50];
