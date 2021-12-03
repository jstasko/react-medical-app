import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import Address from "../addresses/Address";
import {Box, Button, Container, Icon, Stack, Typography} from "@mui/material";
import PlayersInfo from "./PlayersInfo";
import {Link as RouterLink} from "react-router-dom"
import {IAddress} from "../../entities/IAddress";
import {getPlayer} from "../../services/players/PlayersService";
import {IPlayer} from "../../entities/Player";
import {getPlayerAddress} from "../../services/AddressService";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

const PlayerEdit: React.FC = () => {
  const [message, setMessage] = React.useState<string>("");
  const [error, setError] = React.useState<boolean>(false)
  const [player, setPlayer] = React.useState<IPlayer|null>(null)
  const [address, setAddress] = React.useState<IAddress| null>(null);
  const params = useParams();

  useEffect(() => {
    if (!player) {
      getPlayerAndAddressById();
    }
  }, []);

  const getPlayerAndAddressById = async () => {
    const result = await getPlayer(params.id);
    const resultAddress = await getPlayerAddress(params.id);
    setPlayer(result.data);
    setAddress(resultAddress.data.data[0])
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
            to={"/dashboard/players"}
            variant="contained"
            startIcon={<Icon component={ModeEditIcon} width={22} height={22}/>}
          >
            Back
        </Button>
        </Box>
      </Stack>
      {
        player && (
          <PlayersInfo meno={player.meno} priezvisko={player.priezvisko} rodCislo={player.rodCislo} />
        )
      }
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
      </Stack>

      {
        player && address && (
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

export default PlayerEdit;
