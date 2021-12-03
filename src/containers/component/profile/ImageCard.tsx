import React from "react";
import {
  Box,
  Button,
  Card,
  CardHeader,
  Grid, LinearProgress,
  Stack,
  Typography
} from "@mui/material";
import Image, {IImage} from "../Image";
import {styled} from "@material-ui/core";
import {updateAvatar} from "../../../services/auth/UserService";

const BorderLinearProgress = styled(LinearProgress)(() => ({
  root: {
    height: 15,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: "#EEEEEE",
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
  }
}));

interface ICard {
  profile?:{
    avatar: IImage;
  }
  setMessage: (message: string) => void;
  setError: (error: boolean) => void;
  setProfile: () => void;
}

const ImageCard: React.FC<ICard> = (props: ICard) => {
  const [currentFile, setCurrentFile] = React.useState<any>();
  const [progress, setProgress] = React.useState<number>(0);
  const selectFile = (event) => {
    setCurrentFile(event.target.files[0])
  }
  const upload = () => {
    setProgress(0);

    updateAvatar(currentFile, (event) => {
      setProgress(Math.round((100 * event.loaded)/event.total))
    }).then((response) => {
      if (response.data) {
        props.setError(false)
        props.setMessage("File was uploaded")
        props.setProfile();
        setTimeout(() => {
          window.location.reload();
        }, 1000)
      }
    })
      .catch(() => {
        setProgress(0);
        props.setMessage("Could not upload the file")
        setCurrentFile(null)
        props.setError(true);
      })
  }
  return (
    <Card>
      <CardHeader title="Avatar" subheader={props.profile && props.profile.avatar ? "Change avatar" : "Add avatar"}/>
      <Grid container spacing={1} alignItems={"center"}>
        <Grid item xs={12} md={6}>
          <Box p={1}>
            <Card>
              {props.profile && props.profile.avatar
                && (
                <Box sx={{pt: '100%', position: 'relative'}}>
                  <Image image={props.profile?.avatar}/>
                </Box>
              )}
            </Card>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box p={3}>
            <label htmlFor="btn-upload">
              <input
                id="btn-upload"
                name="btn-upload"
                style={{ display: 'none' }}
                type="file"
                onChange={selectFile} />
              <Button
                fullWidth
                className="btn-choose"
                variant="outlined"
                component="span" >
                Choose File
              </Button>
            </label>
            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 1 }}>
            </Stack>
            <Typography textAlign={"center"} className="file-name">
              {currentFile ? currentFile.name : null}
            </Typography>
            {currentFile && (
              <Box className="mb25" display="flex" alignItems="center">
                <Box width="100%" mr={1} ml={1}>
                  <BorderLinearProgress variant="determinate" value={progress} />
                </Box>
                <Box minWidth={35}>
                  <Typography variant="body2" color="textSecondary">{`${progress}%`}</Typography>
                </Box>
              </Box>)
            }
            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 1 }}>
            </Stack>
            <Button
              fullWidth
              className="btn-upload"
              color="primary"
              variant="contained"
              component="span"
              disabled={!currentFile}
              onClick={upload}>
              Upload
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Card>
  )
}

export default ImageCard;
