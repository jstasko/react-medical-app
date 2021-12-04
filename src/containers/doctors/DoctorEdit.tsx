import React from "react";
import Edit from "../edit/Edit";
import {getDoctorAddresses} from "../../services/AddressService";
import {getDoctor} from "../../services/doctors/DoctorsService";

const DoctorsEdit: React.FC = () => {
  return (
    <Edit getEntities={getDoctor} getAddresses={getDoctorAddresses} getBackUrl={"/dashboard/doctors"} />
  )
}

export default DoctorsEdit;
