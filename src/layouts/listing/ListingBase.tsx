import React, {useEffect} from "react";
import {buttons, head, moreIcons, rowsPerPageOptions} from "../../containers/players/PlayersConfig";
import {IPlayer} from "../../entities/Player";
import {getPlayers} from "../../services/players/PlayersService";
import {Container} from "@mui/material";
import ListHeader, {IButtonsArray, IMoreIcons} from "./ListHeader";
import ListingBody from "./ListingBody";
import {AxiosResponse} from "axios";
import {ITableHead} from "../../entities/TableHead";

interface IListingBase {
  getData: (page, size) => Promise<AxiosResponse>
  rowsPerPage: number[];
  head: ITableHead[];
  moreIcons: (id: object|undefined) => any;
  buttons: IButtonsArray[];
  title: string;
  images?: boolean
}

const ListingBase: React.FC<IListingBase> = (props: IListingBase) => {
  const [page, setPage] = React.useState<number>(0);
  const [size, setSize] = React.useState<number>(rowsPerPageOptions[0]);
  const [totalItems, setTotalItems] = React.useState<number>(0);
  const [totalPages, setTotalPages] = React.useState<number>(0);
  const [datas, setData] = React.useState<IPlayer[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  useEffect(() => {
    if (datas.length === 0) {
      getData(0, rowsPerPageOptions[0]);
    }
  }, []);

  const getData = async (page, size) => {
    setLoading(true);
    const response = await props.getData(page, size);
    setData(response.data.data);
    setTotalItems(response.data.totalItems)
    setTotalPages(response.data.totalPages)
    setPage(page);
    setSize(size);
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }

  return (
    <Container>
      <ListHeader buttonsArray={props.buttons} title={props.title}/>
      {loading ? 'Loading' :
        (
          <ListingBody
            totalRows={totalItems}
            headLabel={props.head}
            rowsPerPage={size}
            page={page}
            entities={datas}
            rowsPerPageOptions={rowsPerPageOptions}
            setPage={setPage}
            setSize={setSize}
            getData={getData}
            iconMore={props.moreIcons}
            images={props.images}
          />
        )
      }
    </Container>
  )
}

export default ListingBase;
