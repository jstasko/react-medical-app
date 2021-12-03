import React from "react";
import {getPlayers} from "../../services/players/PlayersService";
import {buttons, head, moreIcons, rowsPerPageOptions} from "./PlayersConfig";
import ListingBase from "../../layouts/listing/ListingBase";

const Players: React.FC = () => {
  return (
    <ListingBase
      buttons={buttons}
      getData={getPlayers}
      head={head}
      moreIcons={moreIcons}
      rowsPerPage={rowsPerPageOptions}
      title={"Players"}
    />
  )
}

export default Players;
