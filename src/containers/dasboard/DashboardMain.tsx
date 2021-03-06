import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import DashboardSideBar from "./DashboardSideBar";
import {Outlet, useNavigate} from 'react-router-dom';
import {getCurrentUser} from "../../services/auth/AuthenticationService";

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const RootStyle = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden'
});

const MainStyle = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('lg')]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  }
}));

// ----------------------------------------------------------------------

const DashboardMain: React.FC = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  if (getCurrentUser() === null) {
    navigate('/login')
  }

  return (
    <RootStyle>
      <DashboardSideBar isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} />
      <MainStyle>
        <Outlet/>
      </MainStyle>
    </RootStyle>
  );
}

export default DashboardMain;
