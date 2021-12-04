import React from "react";
import {buttons, head, rowsPerPageOptions} from "./AphotecariesConfig";
import ListingBase from "../../layouts/listing/ListingBase";
import {getAphotecaries} from "../../services/AphotecaryService";

const Records: React.FC = () => {
  return (
    <ListingBase
      buttons={buttons}
      getData={getAphotecaries}
      head={head}
      moreIcons={() => {}}
      rowsPerPage={rowsPerPageOptions}
      title={"Najlepsie lekarne"}
    />
  )
}

export default Records;
