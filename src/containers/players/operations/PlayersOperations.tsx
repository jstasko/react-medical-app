import React from "react";
import {buttons, head, rowsPerPageOptions} from "./PlayersOperationsConfig";
import ListingBase from "../../../layouts/listing/ListingBase";
import {getOperations} from "../../../services/players/OperationsService";
import {useParams} from "react-router-dom";

const PlayersOperations: React.FC = () => {
  const params = useParams();

  const operations = (page, size) => {
    return getOperations(page, size, {
      rodCislo: params.id
    })
  }

  return (
    <ListingBase
      buttons={buttons}
      getData={operations}
      head={head}
      moreIcons={() => {return [];}}
      rowsPerPage={rowsPerPageOptions}
      title={`Player ${params.id} operations`}
    />
  )
}

export default PlayersOperations
