import {ITableHead} from "../../entities/TableHead";
import {IButtonsArray} from "../../layouts/listing/ListHeader";

export const head: ITableHead[] = [
  { id: 'MENO', label: 'MENO', alignRight: false },
  { id: 'PRIEZVISKO', label: 'PRIEZVISKO', alignRight: false },
  { id: 'STAV', label: 'STAV', alignRight: false },
];

export const buttons: IButtonsArray[] = []

export const rowsPerPageOptions: number[] = [10, 20, 50];
