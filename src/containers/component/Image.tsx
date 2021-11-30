import React, {useEffect} from "react";
import {styled} from "@mui/material";
import {getImage} from "../../services/FileMediaService";

const ProductImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute'
});

export interface IImage {
  fileName: string
  fileDownloadUri: string
  fileType: string
  size: number
}

export interface IImageCard {
  image?: IImage
  url?: string
}

const Image: React.FC<IImageCard> = (props: IImageCard) => {
  const [preview, setPreview] = React.useState<any>();

  useEffect(() => {
    if (!props.url) {
      getBlob()
    } else {
      setPreview(props.url)
    }
  }, [props.url])

  const getBlob = () => {
    if (props.image) {
      getImage(props.image.fileDownloadUri)
        .then(response => {
          if (response) {
            setPreview(`data:${response.headers['content-type']};base64,${response.data}`);
          }
        })
    }
  }

  return (
    <ProductImgStyle alt={'avatar'} src={preview}/>
  )

}

export default Image
