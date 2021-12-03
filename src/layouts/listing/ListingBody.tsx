import React from "react";
import {
  Avatar,
  Card,
  Stack,
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
import {getImage} from "../../services/FileMediaService";

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

  const getUrl = (url) => {
    getImage(url)
      .then((response) => {
        return `data:${response.headers['content-type']};base64,${response.data}`
      })
      .catch((error) => {
        return ''
      })

    return ''
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
          />
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
                        <TableCell component="th" scope="row" padding="none">
                          <Stack direction="row" alignItems="center" spacing={2}>
                            <Avatar alt={'avatar'} src={getUrl(row.download)} />
                          </Stack>
                        </TableCell>
                      )
                    }
                    {props.headLabel.map((label: ITableHead) => {
                      return (
                        <TableCell key={label.id} align="left">{row[label.id]}</TableCell>
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
