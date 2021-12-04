import React, {useEffect} from "react";
import {Link as RouterLink} from "react-router-dom";
import JSONPretty from "react-json-pretty";
import {useParams} from "react-router-dom";
import {getJSONPlayer} from "../../services/FileMediaService";
import {Box, Button, Card, CardHeader, Container, Icon, Stack} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const PlayersJson: React.FC = () => {
  const [data, setData] = React.useState<string>("");
  const params = useParams();

  useEffect(() => {
    if (!data) {
      getData();
    }
  }, []);

  const getData = async () => {
    const json = await getJSONPlayer(params.id);
    setData(json.data);
  }

  return (
    <Container maxWidth="xl">
      <Card>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <CardHeader title="Player JSON" subheader={`id - ${params.id}`}/>
          <Box mr={4} mt={4}>
            <Button
              component={RouterLink}
              to={"/dashboard/players/"}
              variant="contained"
              startIcon={<Icon component={ArrowBackIcon} width={22} height={22}/>}
            >
              Back
            </Button>
          </Box>
        </Stack>
        <Box p={4}>
          {data ? <JSONPretty id="json-pretty" data={data}/> : "Loading.."}
        </Box>
      </Card>
    </Container>
  );
}

export default PlayersJson;
