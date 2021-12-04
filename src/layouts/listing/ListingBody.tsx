import React from "react";
import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow
} from "@mui/material";
import MyListingHeader from "./ListingHeader";
import {ITableHead} from "../../entities/TableHead";
import ListingMoreMenu from "./ListingMoreMenu";
import ListingAvatar from "./ListingAvatar";
import moment from "moment";
import SelectForm from "../../containers/players/SelectForm";

interface IListingBody {
  headLabel: ITableHead[];
  rowsPerPage: number;
  page: number;
  entities: any[]
  totalRows: number;
  rowsPerPageOptions: number[]
  setPage: (page: number) => void;
  setSize: (size: number) => void;
  getData: (page: number, size: number) => void;
  iconMore: (id: object|undefined) => any;
  images ?: boolean
  options?: string[]
  currentSelected ?: string
  setCurrentSelected ?: (current: string) => void
}

const MyListingBody: React.FC<IListingBody> = (props: IListingBody) => {
  const [orderBy, setOrderBy] = React.useState<string>('name');
  const [order, setOrder] = React.useState<'asc' | 'desc'>('asc');


  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    props.getData(newPage, props.rowsPerPage);
  };

  const handleChangeRowsPerPage = (event) => {
    props.getData(0, parseInt(event.target.value));
  }

  const getDate = (value: string) => {
    const d = moment(value, 'YYYY-MM-DD');
    return d.date() + '/' + d.month() + '/' + d.year()
  }

  const emptyRows = props.page > 0 ? Math.max(0, (1 + props.page) * props.rowsPerPage - props.totalRows) : 0;
  return (
    <Card>
      <TableContainer sx={{}}>
        <Table>
          <MyListingHeader
            headLabel={props.headLabel}
            onRequestSort={handleRequestSort}
            orderBy={orderBy}
            order={order}
            images={props.images}
          />
          {
            props.options &&
            props.options.length !== 0 &&
            (<SelectForm options={props.options} current={props.currentSelected} setCurrent={props.setCurrentSelected}/>)
          }
          <TableBody>
            {props.entities
              .map((row, index) => {
                return (
                  <TableRow
                    hover
                    key={row.id + '-' + index}
                    tabIndex={-1}
                  >
                    <TableCell align="left">{index}</TableCell>
                    {
                      props.images && (
                        <ListingAvatar url={row.image} />
                      )
                    }
                    {props.headLabel.map((label: ITableHead) => {
                      return (
                        <TableCell key={label.id} align="left">
                          {label.isDate ? getDate(row[label.id]) : row[label.id]}
                        </TableCell>
                      )
                    })}
                    {
                      props.iconMore && props.iconMore.length > 0 && (
                        <TableCell align="right">
                          <ListingMoreMenu items={props.iconMore} entity={row} />
                        </TableCell>
                      )
                    }
                  </TableRow>
                );
              })}
            {emptyRows > 0 && (
              <TableRow style={{height: 53 * emptyRows}}>
                <TableCell colSpan={6}/>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={props.rowsPerPageOptions}
        component="div"
        count={props.totalRows}
        rowsPerPage={props.rowsPerPage}
        page={props.page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Card>
  )
}
export default MyListingBody;
