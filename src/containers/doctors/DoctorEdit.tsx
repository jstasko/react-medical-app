import React, {useEffect} from "react";
import {Box, Container, Stack, Typography} from "@mui/material";
import ImageCard from "../component/profile/ImageCard";
import {useParams} from "react-router-dom";
import ChandeDoctorInfo from "../component/doctorEdit/ChangeDoctorInfo";
import PersonPerosnalInfo from "../component/doctorEdit/PersonPerosnalInfo";
import {DOCTOR_API_URL, getDoctor, updateDoctor} from "../../services/doctors/DoctorsService";

const DoctorsEdit: React.FC = () => {
  const [error, setError] = React.useState(false);
  const [doctor, setDoctor] = React.useState<any>(null);
  const [message, setMessage] = React.useState("");
  const params = useParams();

  useEffect(() => {
    if (!doctor) {
      getDoctorInfo();
    }
  }, []);


  const infoChange = async (newMeno: string, newPriezvisko: string) => {
    const response = await updateDoctor(params.id, {meno: newMeno, priezvisko: newPriezvisko})
    setDoctor(response.data);
    setMessage("Settings were saved")
    setTimeout(() => {
      setMessage("")

    }, 1500)
  }

  const getDoctorInfo = async () => {
    const response = await getDoctor(params.id);
    setDoctor(response.data);
  }
  console.log(doctor)
  return (
    <Container maxWidth="xl">
      {message && (
        <div className="form-group">
          <div
            className={
              !error ? "alert alert-success" : "alert alert-danger"
            }
            role="alert"
          >
            {message}
          </div>
        </div>
      )}

      <Box sx={{pb: 5}}>
        <Typography variant="h4">Edit of doctor {params.id}</Typography>
      </Box>
      {
        doctor ? (
          <>
            <ChandeDoctorInfo changeInfo={infoChange} priezvisko={doctor.priezvisko} meno={doctor.meno}/>
            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{my: 2}}>
            </Stack>
            <PersonPerosnalInfo rodCislo={doctor.rodCislo}/>
            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{my: 2}}>
            </Stack>

            {
              doctor && (
                <ImageCard profile={doctor} setError={setError} setMessage={setMessage} setProfile={getDoctorInfo}
                           baseUrl={DOCTOR_API_URL}/>
              )
            }
          </>
        ) : "Loading..."
      }
    </Container>
  )
}

export default DoctorsEdit;
