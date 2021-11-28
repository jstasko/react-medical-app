import React from "react";
import {ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {alpha, styled, useTheme} from "@mui/material/styles";
import {NavLink as RouterLink} from "react-router-dom";

interface NavItemProps {
  item: any, active: any
}

const ListItemIconStyle = styled(ListItemIcon)({
  width: 22,
  height: 22,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

const ListItemStyle = styled((props) => <ListItemButton disableGutters {...props} />)(
  ({ theme }) => ({
    ...theme.typography.body2,
    height: 48,
    position: 'relative',
    textTransform: 'capitalize',
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(2.5),
    color: theme.palette.text.secondary,
    '&:before': {
      top: 0,
      right: 0,
      width: 3,
      bottom: 0,
      content: "''",
      display: 'none',
      position: 'absolute',
      borderTopLeftRadius: 4,
      borderBottomLeftRadius: 4,
      backgroundColor: theme.palette.primary.main
    }
  })
);

const NavItem: React.FC<NavItemProps> = (props: NavItemProps) => {
  const theme = useTheme();
  const isActiveRoot = props.active(props.item.path);
  const { title, path, icon, info, action } = props.item;

  const activeRootStyle = {
    color: 'primary.main',
    fontWeight: 'fontWeightMedium',
    bgcolor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
    '&:before': { display: 'block' }
  };
  return (
    <RouterLink to={path} onClick={action}>
      <ListItemStyle
        sx={{
          ...(isActiveRoot && activeRootStyle)
        }}
      >
        <ListItemIconStyle>{icon && icon}</ListItemIconStyle>
        <ListItemText disableTypography primary={title} />
        {info && info}
      </ListItemStyle>
    </RouterLink>
  );
}

export default NavItem
