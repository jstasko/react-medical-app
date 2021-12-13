import React from "react";
import {buttons, head, rowsPerPageOptions} from "./DoctorsRankingConfig";
import ListingBase from "../../layouts/listing/ListingBase";
import {doctorsRanking} from "../../services/doctors/DoctorsService";

const Doctors: React.FC = () => {


  return (
    <ListingBase
      buttons={buttons}
      getData={doctorsRanking}
      head={head}
      moreIcons={() => {return [];}}
      rowsPerPage={rowsPerPageOptions}
      title={"Doctors Ranking"}
      images={false}
    />
  )
}

export default Doctors;
