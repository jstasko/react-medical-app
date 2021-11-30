import React, { useState } from "react";
import {Link as RouterLink, useNavigate} from "react-router-dom";
import {IUser} from "../entities/User";
import {register} from "../services/AuthenticationService";
import RegisterForm from "./component/auth/RegisterForm";
import {Box, Container, Link, Typography} from "@mui/material";
import {ContentStyle, RootStyle, SectionStyle} from "../layouts/ComponentStyle";
import AuthLayout from "../layouts/AuthLayout";
import Hidden from "../layouts/Hidden";

const Register: React.FC = () => {
  const [successful, setSuccessful] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const navigate = useNavigate();

  const handleRegister = (formValue: IUser) => {
    const { email, password } = formValue;

    register(email, password).then(
      () => {
        setMessage('Success');
        setSuccessful(true);
        setTimeout(() => {
          navigate("/login");
        }, 1500)
      },
      (error) => {
        console.log(error.response.data.message);
        setMessage(error.response.data.message || "Prepacte mame problemy");
        setTimeout(() => { setMessage("") }, 2000)
        setSuccessful(false);
      }
    );
  };

  return (
    <RootStyle>
      <Box>
        <title>Sign Up To Admin</title>
      </Box>

      <AuthLayout>
        Already have an account? &nbsp;
        <Link underline="none" variant="subtitle2" component={RouterLink} to="/login">
          Login
        </Link>
      </AuthLayout>

      <Hidden width="mdDown">
        <SectionStyle>
          <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
            Manage the job more effectively with Admin
          </Typography>
          <img alt="register" src="/static/illustrations/illustration_register.png" />
        </SectionStyle>
      </Hidden>

      <Container>
        <ContentStyle>
          <Box sx={{ mb: 5 }}>
            <Typography variant="h4" gutterBottom>
              Get started absolutely free.
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              Free forever. No credit card needed.
            </Typography>
          </Box>

          <RegisterForm handleRegister={handleRegister} message={message} successful={successful} />

          <Typography variant="body2" align="center" sx={{ color: 'text.secondary', mt: 3 }}>
            By registering, I agree to Minimal&nbsp;
            <Link underline="always" sx={{ color: 'text.primary' }}>
              Terms of Service
            </Link>
            &nbsp;and&nbsp;
            <Link underline="always" sx={{ color: 'text.primary' }}>
              Privacy Policy
            </Link>
            .
          </Typography>

          <Hidden width="smUp">
            <Typography variant="subtitle2" sx={{ mt: 3, textAlign: 'center' }}>
              Already have an account?&nbsp;
              <Link to="/login" component={RouterLink}>
                Login
              </Link>
            </Typography>
          </Hidden>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
};

export default Register;
