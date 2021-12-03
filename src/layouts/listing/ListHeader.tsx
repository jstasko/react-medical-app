import React from "react";
import {Link as RouterLink} from "react-router-dom";
import {Button, Icon, Stack, Typography} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

export interface IMoreIcons {
  label: string;
  icon: any;
  to: string;
}

export interface IButtonsArray {
  title: string
  pathTo: string;
  icon: JSX.Element;
}

interface IListHeader {
  buttonsArray: IButtonsArray[];
  title: string;
}

const ListHeader: React.FC<IListHeader> = (props: IListHeader) => {

  const renderButtons = props.buttonsArray.map((value, index: number) => (
    <Button
      key={index}
      variant="contained"
      component={RouterLink}
      to={value.pathTo}
      startIcon={value.icon}
    >
      {value.title}
    </Button>
  ))

  return(
    <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
      <Typography variant="h4" gutterBottom>
        {props.title}
      </Typography>
      {renderButtons}
    </Stack>
  );
}

export default ListHeader
