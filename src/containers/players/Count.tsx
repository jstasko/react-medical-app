import React, {useEffect} from "react";
import {getCount} from "../../services/players/PlayersService";
import {buttons, head, rowsPerPageOptions} from "./CountConfig";
import ListingBase from "../../layouts/listing/ListingBase";
import {getRegions} from "../../services/RegionsService";

const Count: React.FC = () => {
  const [options, setOptions] = React.useState([]);
  const [current, setCurrent] = React.useState("")

  useEffect(() => {
    getKraje()
  }, []);

  const getKraje = async () => {
    const result = await getRegions()
    const regions = result.data.data.map(i => i.n_kraja)
    setOptions(regions)
  }

  const countRegions = (page, size) => {
    return getCount(current, page, size)
  }

  return (
    <ListingBase
      buttons={buttons}
      getData={countRegions}
      head={head}
      moreIcons={() => {return [];}}
      rowsPerPage={rowsPerPageOptions}
      title={"Pocet hracov krajoch"}
      options={options}
      current={current}
      setCurrent={setCurrent}
    />
  )
}

export default Count;
