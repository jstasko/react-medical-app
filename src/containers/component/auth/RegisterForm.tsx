import React from "react";
import {Form, FormikProvider, useFormik} from "formik";
import * as Yup from "yup";
import {IUser} from "../../../entities/User";
import {IconButton, InputAdornment, Stack, TextField} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {LoadingButton} from "@mui/lab";
import {useNavigate} from "react-router-dom";

interface RegisterFormValues extends IUser {
}

interface IRegisterForm {
  handleRegister: (formValue: { email: string; password: string }) => void;
  message: string;
  successful: boolean;
}

const RegisterForm: React.FC<IRegisterForm> = (props: IRegisterForm) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();

  const initialValues: RegisterFormValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("This is not a valid email.")
      .required("This field is required!"),
    password: Yup.string()
      .test(
        "len",
        "The password must be between 6 and 40 characters.",
        (val: any) =>
          val &&
          val.toString().length >= 6 &&
          val.toString().length <= 40
      )
      .required("This field is required!"),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values: { email: string; password: string }, formikHelpers) => {
      props.handleRegister(values);
      formikHelpers.setSubmitting(false);
    }
  });

  const {errors, touched, handleSubmit, isSubmitting, getFieldProps} = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>

          <>
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
              autoComplete="current-password"
              type={showPassword ? 'text' : 'password'}
              label="Password"
              {...getFieldProps('password')}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)}>
                      {showPassword ? <VisibilityIcon/> : <VisibilityOffIcon/>}
                    </IconButton>
                  </InputAdornment>
                )
              }}
              error={Boolean(touched.password && errors.password)}
              helperText={touched.password && errors.password}
            />

            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              loading={isSubmitting}
            >
              Register
            </LoadingButton>
          </>

          {props.message && (
            <div className="form-group">
              <div
                className={
                  props.successful ? "alert alert-success" : "alert alert-danger"
                }
                role="alert"
              >
                {props.message}
              </div>
            </div>
          )}
        </Stack>
      </Form>
    </FormikProvider>
  )
};

export default RegisterForm;
