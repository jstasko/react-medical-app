import React from "react";
import * as Yup from "yup";
import {Form, FormikProvider, useFormik} from "formik";
import {Box, Card, CardHeader, Stack, TextField} from "@mui/material";
import {LoadingButton} from "@mui/lab";

interface IPlayersInfo {
  meno: string
  priezvisko: string
  rodCislo?: string;
}

const PlayersInfo: React.FC<IPlayersInfo> = (props: IPlayersInfo) => {
  const LoginSchema = Yup.object().shape({});

  const formik = useFormik({
    initialValues: {
      rodCislo: props.rodCislo ?? '',
      meno: props.meno,
      priezvisko: props.priezvisko,
    },
    validationSchema: LoginSchema,
    onSubmit: () => {}
  });
  const {errors, touched, isSubmitting, handleSubmit, getFieldProps} = formik;

  return (
    <Card>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <CardHeader title="Players info" subheader="Change players information"/>
      </Stack>
      <Box sx={{p: 3, pb: 1}} dir="ltr">
        <FormikProvider value={formik}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <TextField
                disabled={true}
                fullWidth
                autoComplete="rodCislo"
                type="text"
                label="Rodne Cislo"
                {...getFieldProps('rodCislo')}
                error={Boolean(touched.rodCislo && errors.rodCislo)}
                helperText={touched.rodCislo && errors.rodCislo}
              />
              <TextField
                disabled={true}
                fullWidth
                autoComplete="meno"
                type="text"
                label="Meno"
                {...getFieldProps('meno')}
                error={Boolean(touched.meno && errors.meno)}
                helperText={touched.meno && errors.meno}
              />
              <TextField
                disabled={true}
                fullWidth
                autoComplete="priezvisko"
                type="type"
                label="Priezvisko"
                {...getFieldProps('priezvisko')}
                error={Boolean(touched.priezvisko && errors.priezvisko)}
                helperText={touched.priezvisko && errors.priezvisko}
              />
            </Stack>

            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
            </Stack>

            <LoadingButton
              disabled={true}
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              loading={isSubmitting}
            >
              Save info
            </LoadingButton>

            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{my: 2}}>
            </Stack>
          </Form>
        </FormikProvider>
      </Box>
    </Card>
  );
}

export default PlayersInfo
