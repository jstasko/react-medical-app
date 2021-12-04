import React from "react";
import {buttons, head, rowsPerPageOptions} from "./PlayersMedicationConfig";
import ListingBase from "../../../layouts/listing/ListingBase";
import {useParams} from "react-router-dom";
import {getMedications} from "../../../services/players/MedicationService";

const PlayersMedication: React.FC = () => {
  const params = useParams();

  const medications = (page, size) => {
    return getMedications(page, size, {
      rodCislo: params.id
    })
  }

  return (
    <ListingBase
      buttons={buttons}
      getData={medications}
      head={head}
      moreIcons={() => {return []}}
      rowsPerPage={rowsPerPageOptions}
      title={`Player ${params.id} medications`}
    />
  )
}

export default PlayersMedication
