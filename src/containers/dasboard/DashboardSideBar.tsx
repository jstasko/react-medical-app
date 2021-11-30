import React, {useEffect, useState} from 'react';
import {Link as RouterLink, matchPath, useLocation} from 'react-router-dom';
import { styled } from '@mui/material/styles';
import {Box, Link, Drawer, Typography, List, Avatar, ListItemText} from '@mui/material';
import Scrollbar from "../component/ScrollBar";
import Hidden from '../../layouts/Hidden';
import * as AuthService from "../../services/AuthenticationService";
import EventBus from "../../common/EventBus";
import {IUser} from "../../entities/User";
import Logo from "../component/Logo";
import NavItem from "../component/NavItem";
import {sidebarConfig, sidebarConfigLogIn} from "./SideConfig";
import {getUser} from "../../services/UserService";
import {getImage} from "../../services/FileMediaService";

const DRAWER_WIDTH = 350;

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    width: DRAWER_WIDTH
  }
}));

const AccountStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.grey[200]
}));

const DashboardSideBar: React.FC<{ isOpenSidebar, onCloseSidebar }> = ({ isOpenSidebar, onCloseSidebar }) => {
  const [currentUser, setCurrentUser] = useState<IUser | undefined>(undefined);
  const [preview, setPreview] = useState<string>("");
  const { pathname } = useLocation();
  const match = (path) => (path ? !!matchPath({ path, end: false }, pathname) : false);

  const logOut = () => {
    AuthService.logout();
    setCurrentUser(undefined);
  };

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      getBlob(user);
    }

    EventBus.on("logout", logOut);

    return () => {
      EventBus.remove("logout", logOut);
    };
  }, []);

  const getBlob = async (user) => {
    const data = await getUser(user.email);
    const image = await getImage(data.data.avatar.fileDownloadUri)
    setPreview(`data:${image.headers['content-type']};base64,${image.data}`)
  }

  const renderContent = (
    <Scrollbar
      sx={{
        height: '100%',
        '& .simplebar-content': { height: '100%', display: 'flex', flexDirection: 'column' }
      }}
    >
      <Box sx={{ px: 2.5, py: 3 }}>
        <Box component={RouterLink} to="/" sx={{ display: 'inline-flex' }}>
          <Logo />
        </Box>
      </Box>

      {
        currentUser ?
          <Box sx={{ mb: 5, mx: 2.5 }}>
            <Link underline="none" component={RouterLink} to="#">
              <AccountStyle>
                <Avatar src={preview} alt="photoURL" />
                <Box sx={{ ml: 2 }}>
                  <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
                    {currentUser.email}
                  </Typography>
                </Box>
              </AccountStyle>
            </Link>
          </Box> : <> </>}


      <List>
        <Box>
          <List disablePadding>
            {
              currentUser ?
                sidebarConfigLogIn.map((item) => (
                  <NavItem key={item.title} item={item} active={match} />
                ))
                :
                sidebarConfig.map((item) => (
                  <NavItem key={item.title} item={item} active={match} />
                ))}
          </List>
        </Box>
      </List>

      <Box sx={{ flexGrow: 1 }} />
    </Scrollbar>
  );

  return (
    <RootStyle>
      <Hidden width="lgUp">
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: { width: DRAWER_WIDTH }
          }}
        >
          {renderContent}
        </Drawer>
      </Hidden>

      <Hidden width="lgDown">
        <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
              bgcolor: 'background.default'
            }
          }}
        >
          {renderContent}
        </Drawer>
      </Hidden>
    </RootStyle>
  );
}

export default DashboardSideBar;
