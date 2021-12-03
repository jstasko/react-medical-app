import React from "react";
import {buttons, head, moreIcons, rowsPerPageOptions} from "./DoctorsConfig";
import ListingBase from "../../layouts/listing/ListingBase";
import {getDoctors} from "../../services/doctors/DoctorsService";

const Doctors: React.FC = () => {


  return (
    <ListingBase
      buttons={buttons}
      getData={getDoctors}
      head={head}
      moreIcons={moreIcons}
      rowsPerPage={rowsPerPageOptions}
      title={"Players"}
      images={true}
    />
  )
}

export default Doctors;
