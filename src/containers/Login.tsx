import React, { useState } from "react";
import {login} from "../services/auth/AuthenticationService";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import LoginForm from "./component/auth/LoginForm";
import {Box, Container, Link, Stack, Typography} from "@mui/material";
import AuthLayout from "../layouts/AuthLayout";
import Hidden from "../layouts/Hidden";
import {ContentStyle, RootStyle, SectionStyle} from "../layouts/ComponentStyle";

const Login: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = (formValue: { email: string; password: string }) => {
    const { email, password } = formValue;

    setMessage("");
    login(email, password).then(
      () => {
        navigate("/dashboard")
      },
      (error) => {
        const resMessage = error && error.response  ? error.response.data : 'Prepacte mame problemy';
        setMessage(resMessage);
        setTimeout(() => { setMessage("") }, 2000)
      }
    );
  };

  return (
    <RootStyle>
      <Box>
          <title>Login to Admin</title>
      </Box>
      <AuthLayout>
        Don’t have an account? &nbsp;
        <Link underline="none" variant="subtitle2" component={RouterLink} to="/register">
          Get started
        </Link>
      </AuthLayout>
      <Hidden width="mdDown">
        <SectionStyle>
          <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
            Hi, Welcome Back
          </Typography>
          <img src="/static/illustrations/illustration_login.png" alt="login" />
        </SectionStyle>
      </Hidden>
      <Container maxWidth="sm">
        <ContentStyle>
          <Stack sx={{ mb: 5 }}>
            <Typography variant="h4" gutterBottom>
              Sign in to Admin
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>Enter your details below.</Typography>
          </Stack>
          <LoginForm login={handleLogin} message={message} />
        </ContentStyle>
      </Container>
    </RootStyle>
  );
};

export default Login;
