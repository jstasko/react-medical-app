import {Icon} from "@mui/material";
import {ITableHead} from "../../entities/TableHead";
import {IButtonsArray} from "../../layouts/listing/ListHeader";

export const head: ITableHead[] = [
  { id: 'NAZOVSPECIALIZACIE', label: 'Specializacia', alignRight: false },
  { id: 'NAZOVINSTITUTU', label: 'Nemocnica', alignRight: false },
  { id: 'RANKING', label: 'Rank', alignRight: false },
];

export const buttons: IButtonsArray[] = []

export const rowsPerPageOptions: number[] = [10, 20, 50];
