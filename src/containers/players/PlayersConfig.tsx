import {ITableHead} from "../../entities/TableHead";
import {IButtonsArray} from "../../layouts/listing/ListHeader";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import SickIcon from '@mui/icons-material/Sick';
import MedicationIcon from "@mui/icons-material/Medication";
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import PeopleIcon from "@mui/icons-material/People";
import {Icon} from "@mui/material";

const getIcon = (name) => <Icon component={name} width={22} height={22} />;

export const head: ITableHead[] = [
  {id: 'id', label: 'ID', alignRight: false},
  {id: 'meno', label: 'Meno', alignRight: false},
  {id: 'priezvisko', label: 'Priezvisko', alignRight: false},
  {id: 'rodCislo', label: 'Rodne Cislo', alignRight: false},
];

export const buttons: IButtonsArray[] = [
  {
    pathTo: "/dashboard/players/count",
    title: "Pocet v okresoch",
    icon: getIcon(PeopleIcon),
  }
]

export const moreIcons = (entity:object|undefined) => {
  if (entity) {
    const rodCislo = entity['rodCislo'];
    const id = entity['id'];
    return ([
      {
        to: `/dashboard/players/${rodCislo}/sickness`,
        icon: SickIcon,
        label: 'Sickness'
      },
      {
        to: `/dashboard/players/${rodCislo}/operations`,
        icon: LocalHospitalIcon,
        label: 'Operations'
      },
      {
        to: `/dashboard/players/${rodCislo}/medications`,
        icon: MedicationIcon,
        label: 'Medications'
      },
      {
        to: `/dashboard/players/${id}/edit`,
        icon: ModeEditIcon,
        label: 'Edit'
      },
      {
        to: `/dashboard/players/${id}/json`,
        icon: FormatAlignCenterIcon,
        label: 'JSON'
      }
    ])
  }

  return [];
}

export const rowsPerPageOptions: number[] = [10, 20, 50];
