import React, {useRef} from "react";
import {Icon, IconButton, ListItemIcon, ListItemText, Menu, MenuItem} from "@mui/material";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import {Link as RouterLink, useParams} from "react-router-dom";
import BookIcon from '@mui/icons-material/Book';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {IMoreIcons} from "./ListHeader";

interface ListingMoreMenu {
  items: (id: object|undefined) => any
  entity: any
}

const MyListingMoreMenu: React.FC<ListingMoreMenu> = (props: ListingMoreMenu) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const ref = useRef(null);
  return (
    <>
      <IconButton ref={ref} onClick={() => setIsOpen(true)}>
        <Icon component={MoreVertIcon} width={20} height={20} />
      </IconButton>

      <Menu
        open={isOpen}
        anchorEl={ref.current}
        onClose={() => setIsOpen(false)}
        PaperProps={{
          sx: { width: 200, maxWidth: '100%' }
        }}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        {
          props.items(props.entity).map((item, index) => {
            return (
              <MenuItem key={index} component={RouterLink} to={item.to} sx={{ color: 'text.secondary' }}>
                <ListItemIcon>
                  <Icon component={item.icon} width={24} height={24} />
                </ListItemIcon>
                <ListItemText primary={item.label} primaryTypographyProps={{ variant: 'body2' }} />
              </MenuItem>
            )
          })
        }
      </Menu>
    </>
  );
}

export default MyListingMoreMenu;
