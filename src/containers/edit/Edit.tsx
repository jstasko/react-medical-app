import React, {useEffect} from "react";
import {IAddress} from "../../entities/IAddress";
import {Link as RouterLink, useParams} from "react-router-dom";
import {Box, Button, Container, Icon, Stack, Typography} from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import EntityInfo from "./EntityInfo";
import Address from "../addresses/Address";
import {AxiosResponse} from "axios";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface IEdit {
  getEntities: (id: string) => Promise<AxiosResponse>
  getAddresses: (id: string) => Promise<AxiosResponse>
  getBackUrl: string
}

const Edit: React.FC<IEdit> = (props: IEdit) => {
  const [message] = React.useState<string>("");
  const [error] = React.useState<boolean>(false)
  const [entity, setEntity] = React.useState<any|null>(null)
  const [address, setAddress] = React.useState<IAddress| null>(null);
  const params = useParams();

  useEffect(() => {
    if (!entity) {
      getEntityAndAdress();
    }
  }, []);

  const getEntityAndAdress = async () => {
    const result = await props.getEntities(params.id as string)
    const resultAddress = await props.getAddresses(params.id as string);
    setEntity(result.data.data[0]);
    setAddress(resultAddress.data.data[0])
    console.log(entity);
  }

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

      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">{`Player id - ${params.id}`}</Typography>
        </Box>
        <Box  sx={{ pb: 5 }}>
          <Button
            component={RouterLink}
            to={props.getBackUrl}
            variant="contained"
            startIcon={<Icon component={ArrowBackIcon} width={22} height={22}/>}
          >
            Back
          </Button>
        </Box>
      </Stack>
      {
        entity && (
          <EntityInfo
            meno={entity.MENO}
            priezvisko={entity.PRIEZVISKO}
            rodCislo={entity.RODCISLO}
            hmotnost={entity.HMOTNOST}
            rhFaktor={entity.RHFAKTOR}
            typskupiny={entity.TYPSKUPINY}
            vyska={entity.VYSKA}
          />
        )
      }
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
      </Stack>

      {
        entity && address && (
          <Address
            cDomu={parseInt(address.CISLO_DOMU)}
            nKraja={address.N_KRAJA}
            nKrajiny={address.N_KRAJINY}
            nMesta={address.N_MESTA}
            nOkresu={address.N_OKRESU}
            psc={address.PSC}
          />
        )
      }

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
      </Stack>
    </Container>
  )
}

export default Edit;
