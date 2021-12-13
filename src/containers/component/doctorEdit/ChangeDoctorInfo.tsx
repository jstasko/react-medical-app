import React from "react";
import {Box, Card, CardHeader, IconButton, InputAdornment, Stack, TextField} from "@mui/material";
import {Form, FormikProvider, useFormik} from "formik";
import {LoadingButton} from "@mui/lab";
import * as Yup from "yup";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

interface IChangeDoctorInfo {
  changeInfo: (newMeno: string, newPriezvisko: string) => void;
  meno: string,
  priezvisko: string
}

const ChangeDoctorInfo: React.FC<IChangeDoctorInfo> = (props:IChangeDoctorInfo) => {
  const InfoSchema = Yup.object().shape({
    meno: Yup.string()
      .test(
        "len",
        "The meno must have at least 1 letters",
        (val: any) =>
          val &&
          val.toString().length >= 1
      ),
    priezvisko: Yup.string()
      .test(
        "len",
        "The priezvisko must have at least 1 letters",
        (val: any) =>
          val &&
          val.toString().length >= 1
      ),
  });

  const formik = useFormik({
    initialValues: {
      meno: props.meno ?? '',
      priezvisko: props.priezvisko ?? ''
    },
    validationSchema: InfoSchema,
    onSubmit: (values: { meno: string, priezvisko: string}, formikHelpers) => {
      props.changeInfo(values.meno, values.priezvisko);
      formikHelpers.setSubmitting(false);
    }
  });

  const { errors, touched, isSubmitting, handleSubmit, getFieldProps } = formik;

  return (
    <Card>
      <CardHeader title="Doctors Personal Info" subheader="Change full name" />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <FormikProvider value={formik}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <TextField
                fullWidth
                autoComplete="meno"
                type="text"
                label="Meno"
                {...getFieldProps('meno')}
                error={Boolean(touched.meno && errors.meno)}
                helperText={touched.meno && errors.meno}
              />
              <TextField
                fullWidth
                autoComplete="priezvisko"
                type="text"
                label="Priezvisko"
                {...getFieldProps('priezvisko')}
                error={Boolean(touched.priezvisko && errors.priezvisko)}
                helperText={touched.priezvisko && errors.priezvisko}
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
              Change Info
            </LoadingButton>

            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
            </Stack>
          </Form>
        </FormikProvider>
      </Box>
    </Card>
  );
}

export default ChangeDoctorInfo;
