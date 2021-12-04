import React from "react";
import {buttons, head, rowsPerPageOptions} from "./CardsConfig";
import ListingBase from "../../layouts/listing/ListingBase";
import {getCards} from "../../services/Cards";

const Cards: React.FC = () => {
  return (
    <ListingBase
      buttons={buttons}
      getData={getCards}
      head={head}
      moreIcons={() => {}}
      rowsPerPage={rowsPerPageOptions}
      title={"Specializovane nemocnice"}
    />
  )
}

export default Cards;
