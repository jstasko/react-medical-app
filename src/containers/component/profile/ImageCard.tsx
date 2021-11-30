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
import Image, {IImageCard} from "../Image";
import {uploadImage} from "../../../services/FileMediaService";
import {getCurrentUser} from "../../../services/AuthenticationService";
import {styled} from "@material-ui/core";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
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

const ImageCard: React.FC<IImageCard> = (props: IImageCard) => {
  const [open, setOpen] = React.useState(false);
  const [currentFile, setCurrentFile] = React.useState<any>();
  const [progress, setProgress] = React.useState<number>(0);
  const [message, setMessage] = React.useState<string>("");
  const [error, setError] = React.useState<boolean>(false);
  const [preview, setPreview] = React.useState<any>();

  const selectFile = (event) => {
    setCurrentFile(event.target.files[0])
  }

  const showPreview = () => {
    if (preview) {
      setPreview(null)
    } else {
      setPreview(currentFile)
    }
  }

  const upload = () => {
    const user = getCurrentUser();
    setProgress(0);

    uploadImage(currentFile, user.email, true, (event) => {
      setProgress(Math.round((100 * event.loaded)/event.total))
    }).then((response) => {
      console.log(response)
    })
      .catch(() => {
        setProgress(0);
        setMessage("Could not upload the file")
        setCurrentFile(null)
        setError(true);
      })
  }
  return (
    <Card>
      <CardHeader title="Avatar" subheader="Change you avatar"/>
      <Grid container spacing={1} alignItems={"center"}>
        <Grid item xs={12} md={6}>
          <Box ml={3}>
            <Card>
              {preview ? (
                <Box sx={{pt: '100%', position: 'relative'}}>
                  <Image url={preview}/>
                </Box>
              ) : (
                <Box sx={{pt: '100%', position: 'relative'}}>
                  <Image image={props.image}/>
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
            <Card >
              {!preview ? (
                <Typography textAlign={"center"}>
                  No Image Selected
                </Typography>
              ):(
                <Box sx={{pt: '100%', position: 'relative'}}>
                </Box>
              )}
            </Card>
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
              onClick={showPreview}>
              Show preview
            </Button>
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
