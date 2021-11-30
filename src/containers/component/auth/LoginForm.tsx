import React  from "react";
import {Form, FormikHelpers, FormikProvider, FormikValues, useFormik} from "formik";
import * as Yup from "yup";
import {IconButton, InputAdornment, Stack, TextField} from "@mui/material";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {LoadingButton} from "@mui/lab";

interface ILoginForm {
  login: (formValue: { email: string; password: string }) => void;
  message: string
}

const LoginForm: React.FC<ILoginForm> = (props: ILoginForm) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required')
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: (values: { email: string; password: string }, formikHelpers) => {
      props.login(values);
      formikHelpers.setSubmitting(false);
    }
  });
  const { errors, touched, isSubmitting, handleSubmit, getFieldProps } = formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            fullWidth
            autoComplete="email"
            type="email"
            label="Email address"
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

          <TextField
            fullWidth
            autoComplete="password"
            type={showPassword ? 'text' : 'password'}
            label="Password"
            {...getFieldProps('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword} edge="end">
                    {showPassword ? <VisibilityIcon/> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              )
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />
        </Stack>

        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        </Stack>

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
        >
          Login
        </LoadingButton>

        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        </Stack>

        {props.message && (
          <div className="form-group">
            <div className="alert alert-danger" role="alert">
              {props.message}
            </div>
          </div>
        )}
      </Form>
    </FormikProvider>
  )
};

export default LoginForm;
