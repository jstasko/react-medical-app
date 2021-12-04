import React, {useEffect} from "react";
import {getImage} from "../../services/FileMediaService";
import {Avatar, Stack, TableCell} from "@mui/material";

interface IListingAvatar {
  url: string
}

const ListingAvatar: React.FC<IListingAvatar> = (props: IListingAvatar) => {
  const [image, setImage] = React.useState<string>()

  useEffect(() => {
    if (!image) {
      getUrl();
    }
  }, []);

  const getUrl = async () => {
    const res = await getImage(props.url)
    setImage(`data:${res.headers['content-type']};base64,${res.data}`)
  }

  return (
      <TableCell component="th" scope="row" padding="none">
        <Stack direction="row" alignItems="center" spacing={2}>
          <Avatar alt={'avatar'} src={image}/>
        </Stack>
      </TableCell>
      )
}

export default ListingAvatar;
