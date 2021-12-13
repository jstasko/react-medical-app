import React from "react";
import {Box, Card, CardHeader, Stack, TextField} from "@mui/material";
import {Form, FormikProvider, useFormik} from "formik";
import * as Yup from "yup";
import {getCurrentUser} from "../../../services/auth/AuthenticationService";

interface IPeronPersonalInfo {
  rodCislo: string
}

const PeronPersonalInfo: React.FC<IPeronPersonalInfo> = (props:IPeronPersonalInfo) => {
  const schema = Yup.object().shape({
    rodCislo: Yup.string()
      .test(
        "len",
        "The rodCislo must be equal 10 letters",
        (val: any) =>
          val &&
          val.toString().length == 10
      )
  });
  const formik = useFormik({
    initialValues: {
      rodCislo: props.rodCislo
    },
    validationSchema: schema,
    onSubmit: () => {}
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
              autoComplete="rodCislo"
              type="text"
              label="Rodne cislo"
              {...getFieldProps('rodCislo')}
              error={Boolean(touched.rodCislo && errors.rodCislo)}
              helperText={touched.rodCislo && errors.rodCislo}
            />
            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
            </Stack>
          </Form>
        </FormikProvider>
      </Box>
    </Card>
  );
}

export default PeronPersonalInfo;
