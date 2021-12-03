import React from "react";
import {Box, TableCell, TableHead, TableRow, TableSortLabel} from "@mui/material";
import {ITableHead} from "../../entities/TableHead";
import { visuallyHidden } from '@mui/utils';

interface ListingHeader {
  headLabel: ITableHead[]
  onRequestSort: (event, property) => void;
  orderBy: string;
  order: 'asc'| 'desc';
  images ?: boolean;
}

const MyListingHeader: React.FC<ListingHeader> = (props: ListingHeader) => {

  const createSortHandler = (property) => (event) => {
    props.onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell>
          Row
        </TableCell>
        {
          props.images && (
            <TableCell>
              {''}
            </TableCell>
          )
        }
        {props.headLabel.map((headCell: ITableHead) => (
          <TableCell
            key={headCell.id}
            align={headCell.alignRight ? 'right' : 'left'}
            sortDirection={props.orderBy === headCell.id ? props.order : false}
          >
            <TableSortLabel
              hideSortIcon
              active={props.orderBy === headCell.id}
              direction={props.orderBy === headCell.id ? props.order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {props.orderBy === headCell.id ? (
                <Box sx={{ ...visuallyHidden }}>
                  {props.order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

export default MyListingHeader;
