import React from "react";
import {buttons, head, rowsPerPageOptions} from "./SpecializationsConfig";
import ListingBase from "../../layouts/listing/ListingBase";
import {getSpecializations} from "../../services/SpecializationsService";

const Specializations: React.FC = () => {
  return (
    <ListingBase
      buttons={buttons}
      getData={getSpecializations}
      head={head}
      moreIcons={() => {}}
      rowsPerPage={rowsPerPageOptions}
      title={"Specializovane nemocnice"}
    />
  )
}

export default Specializations;
