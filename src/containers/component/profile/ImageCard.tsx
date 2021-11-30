import React from "react";
import {Box, Card, CardHeader, Grid} from "@mui/material";
import Image, {IImageCard} from "../Image";

const ImageCard: React.FC<IImageCard> = (props: IImageCard) => {
  return (
    <Card>
      <CardHeader title="Avatar" subheader="Change you avatar" />
      <Box p={3}>
        <Grid item xs={12} sm={12} md={6}>
          <Card>
            <Box sx={{ pt: '100%', position: 'relative' }}>
              <Image image={props.image} />
            </Box>
          </Card>
        </Grid>
      </Box>
    </Card>
  )
}

export default ImageCard;
