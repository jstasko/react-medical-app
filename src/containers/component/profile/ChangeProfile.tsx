import React from "react";
import {Box, Card, CardHeader, Stack, TextField} from "@mui/material";
import {Form, FormikProvider, useFormik} from "formik";
import * as Yup from "yup";
import {getCurrentUser} from "../../../services/auth/AuthenticationService";

interface IChangeProfile {

}

const ChangeProfile: React.FC<IChangeProfile> = (props:IChangeProfile) => {
  const currentUser = getCurrentUser();
  const EmailSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: currentUser.email ?? '',
    },
    validationSchema: EmailSchema,
    onSubmit: (values: { email: string }, formikHelpers) => {
      formikHelpers.setSubmitting(false);
    }
  });

  const { errors, touched, handleSubmit, getFieldProps } = formik;

  return (
    <Card>
      <CardHeader title="Email" />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <FormikProvider value={formik}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <TextField
              disabled
              fullWidth
              autoComplete="email"
              type="email"
              label="Email address"
              {...getFieldProps('email')}
              error={Boolean(touched.email && errors.email)}
              helperText={touched.email && errors.email}
            />
            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
            </Stack>
          </Form>
        </FormikProvider>
      </Box>
    </Card>
  );
}

export default ChangeProfile;
