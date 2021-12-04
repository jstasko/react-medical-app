import React from "react";
import {buttons, head, rowsPerPageOptions} from "./RecordsConfig";
import ListingBase from "../../layouts/listing/ListingBase";
import {getMedicalRecords} from "../../services/RecordsService";

const Records: React.FC = () => {
  return (
    <ListingBase
      buttons={buttons}
      getData={getMedicalRecords}
      head={head}
      moreIcons={() => {}}
      rowsPerPage={rowsPerPageOptions}
      title={"Zdravotne Zaznamy"}
    />
  )
}

export default Records;
