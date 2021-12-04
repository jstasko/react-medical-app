import React from "react";
import {Button, Menu, MenuItem, Typography} from "@mui/material";

interface ISelectForm {
  current?: string
  setCurrent?: (n: string) => void
  options: string[]
}

const SelectForm: React.FC<ISelectForm> = (props: ISelectForm) => {
  const [open, setOpen] = React.useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleMenuItemClick = (event: any,name: any) => {
    if (props.setCurrent) {
      props.setCurrent(name)
    }
  };

  return (
    <>
      <Button
        color="inherit"
        disableRipple
        onClick={handleOpen}
      >
        Kraje:&nbsp;
        <Typography component="span" variant="subtitle2" sx={{ color: 'text.secondary' }}>
          {props.current ?? 'None'}
        </Typography>
      </Button>
      <Menu
        keepMounted
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        {props.options.map((option, index) => (
          <MenuItem
            key={index}
            onClick={(event) => handleMenuItemClick(event, option)}
            sx={{ typography: 'body2' }}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

export default SelectForm;
