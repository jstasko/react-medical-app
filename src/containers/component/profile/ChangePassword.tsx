import React from "react";
import {Box, Card, CardHeader, IconButton, InputAdornment, Stack, TextField} from "@mui/material";
import {Form, FormikProvider, useFormik} from "formik";
import {LoadingButton} from "@mui/lab";
import * as Yup from "yup";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

interface IChangePassword {
  changePassword: (newPassword: string) => void;
}

const ChangePassword: React.FC<IChangePassword> = (props:IChangePassword) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const PasswordSchema = Yup.object().shape({
    password: Yup.string()
      .test(
        "len",
        "The password must be between 6 and 40 characters.",
        (val: any) =>
          val &&
          val.toString().length >= 6 &&
          val.toString().length <= 40
      ),
  });

  const formik = useFormik({
    initialValues: {
      password: '',
    },
    validationSchema: PasswordSchema,
    onSubmit: (values: { password: string}, formikHelpers) => {
      props.changePassword(values.password);
      formikHelpers.setSubmitting(false);
    }
  });

  const { errors, touched, isSubmitting, handleSubmit, getFieldProps } = formik;

  return (
    <Card>
      <CardHeader title="Password" subheader="Change you password" />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <FormikProvider value={formik}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <TextField
                fullWidth
                autoComplete="password"
                type={showPassword ? 'text' : 'password'}
                label="Password"
                {...getFieldProps('password')}
                error={Boolean(touched.password && errors.password)}
                helperText={touched.password && errors.password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? <VisibilityIcon/> : <VisibilityOffIcon/>}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
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
              Change Password
            </LoadingButton>

            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
            </Stack>
          </Form>
        </FormikProvider>
      </Box>
    </Card>
  );
}

export default ChangePassword;
