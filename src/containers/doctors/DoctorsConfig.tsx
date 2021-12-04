import {ITableHead} from "../../entities/TableHead";
import {IButtonsArray} from "../../layouts/listing/ListHeader";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import {Icon} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

const getIcon = (name) => <Icon component={name} width={22} height={22}/>;

export const head: ITableHead[] = [
  {id: 'id', label: 'ID', alignRight: false},
  {id: 'meno', label: 'Meno', alignRight: false},
  {id: 'priezvisko', label: 'Priezvisko', alignRight: false},
  {id: 'rodCislo', label: 'Rodne Cislo', alignRight: false},
];

export const buttons: IButtonsArray[] = [
  {
    title: 'Add',
    pathTo: '/profile',
    icon: getIcon(AddIcon)
  }
]

export const moreIcons = (entity:object|undefined) => {
  if (entity) {
    const id = entity['id'];
    return ([
      {
        to: `/dashboard/doctors/${id}/edit`,
        icon: ModeEditIcon,
        label: 'Edit'
      },
    ])
  }

  return [];
}

export const rowsPerPageOptions: number[] = [10, 20, 50];
