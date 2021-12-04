import {ITableHead} from "../../entities/TableHead";
import {IButtonsArray} from "../../layouts/listing/ListHeader";

export const head: ITableHead[] = [
  { id: 'ID', label: 'Id', alignRight: false },
  { id: 'MENO', label: 'Meno', alignRight: false },
  { id: 'PRIEZVISKO', label: 'Priezvisko', alignRight: false },
  { id: 'DATUM_ZALOZENIA', label: 'Zalozenie', alignRight: false, isDate: true },
];

export const buttons: IButtonsArray[] = []

export const rowsPerPageOptions: number[] = [10, 20, 50];
