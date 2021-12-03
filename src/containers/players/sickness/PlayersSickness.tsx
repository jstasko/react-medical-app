import React from "react";
import ListingBase from "../../../layouts/listing/ListingBase";
import { useParams } from "react-router-dom";
import {getSickness} from "../../../services/players/SicknessService";
import {buttons, head, rowsPerPageOptions} from "./PlayersSicknessConfig";

const PlayersSickness: React.FC = () => {
  const params = useParams();

  const sicknesses = (page, size) => {
    return getSickness(page, size, {
      rodCislo: params.id
    })
  }

  return (
    <ListingBase
      buttons={buttons}
      getData={sicknesses}
      head={head}
      moreIcons={() => {return []}}
      rowsPerPage={rowsPerPageOptions}
      title={`Player ${params.id} sickness`}
    />
  )
}

export default PlayersSickness
