import React, {useEffect} from "react";
import {buttons, head, rowsPerPageOptions} from "./PlayersOperationsConfig";
import ListingBase from "../../../layouts/listing/ListingBase";
import {getOperations} from "../../../services/players/OperationsService";
import {useParams} from "react-router-dom";
import {Box, Card, Container, Stack, TextField} from "@mui/material";
import {propapiblities} from "../../../services/Propabilities";

const PlayersOperations: React.FC = () => {
  const [prop, setProp] = React.useState("");
  const [count, setCount] = React.useState("");
  const params = useParams();

  useEffect(() => {
    getProp()
  }, []);

  const getProp = async () => {
    const result = await propapiblities(params.id as string);
    setProp(result.data.data[0].PRAVDEPODOBNOSTZRANENIA)
    setCount(result.data.data[0].POCET_OPERACII)
  }

  const operations = (page, size) => {
    console.log(size);
    return getOperations(page, size, {
      rodCislo: params.id
    })
  }

  return (
    <>
      <ListingBase
        buttons={buttons}
        getData={operations}
        head={head}
        moreIcons={() => {
          return [];
        }}
        rowsPerPage={rowsPerPageOptions}
        title={`Player ${params.id} operations`}
      />
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{my: 2}}>
      </Stack>
      <Container>
      <Card>
        <Box sx={{p: 3, pb: 1}} dir="ltr">
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <TextField
              disabled={true}
              value={count}
              fullWidth
              type="text"
              label="Pocet"
            />
            <TextField
              disabled={true}
              fullWidth
              type="text"
              label="Pravdepodonost zranenia"
              value={prop}
            />
          </Stack>
        </Box>
      </Card>
      </Container>
    </>
  )
}

export default PlayersOperations
