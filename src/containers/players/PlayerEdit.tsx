import React, {useEffect} from "react";
import {getPlayer} from "../../services/players/PlayersService";
import {getPlayerAddress} from "../../services/AddressService";
import Edit from "./edit/Edit";

const PlayerEdit: React.FC = () => {
  return (
    <Edit getEntities={getPlayer} getAddresses={getPlayerAddress} getBackUrl={"/dashboard/players"} />
  )
}

export default PlayerEdit;
