import {ITableHead} from "../../entities/TableHead";
import {IButtonsArray} from "../../layouts/listing/ListHeader";

export const head: ITableHead[] = [
  { id: 'RANKING', label: 'Rank', alignRight: false },
  { id: 'NAZOVLEKARNE', label: 'Nazov', alignRight: false },
];

export const buttons: IButtonsArray[] = []

export const rowsPerPageOptions: number[] = [10, 20, 50];
