import React from "react";
import * as Yup from "yup";
import {Form, FormikProvider, useFormik} from "formik";
import {Box, Card, CardHeader, Stack, TextField} from "@mui/material";
import {LoadingButton} from "@mui/lab";

interface IPlayersInfo {
  meno: string
  priezvisko: string
  rodCislo?: string;
  typskupiny?: string;
  rhFaktor?: string;
  vyska?: string;
  hmotnost?: string;
}

const EntityInfo: React.FC<IPlayersInfo> = (props: IPlayersInfo) => {
  const LoginSchema = Yup.object().shape({});

  const formik = useFormik({
    initialValues: {
      rodCislo: props.rodCislo ?? '',
      meno: props.meno,
      priezvisko: props.priezvisko,
      typskupiny: props.typskupiny,
      rhFaktor: props.rhFaktor,
      vyska: props.vyska,
      hmotnost: props.hmotnost,
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
                disabled={false}
                fullWidth
                autoComplete="rodCislo"
                type="text"
                label="Rodne Cislo"
                {...getFieldProps('rodCislo')}
                error={Boolean(touched.rodCislo && errors.rodCislo)}
                helperText={touched.rodCislo && errors.rodCislo}
              />
              <TextField
                disabled={false}
                fullWidth
                autoComplete="meno"
                type="text"
                label="Meno"
                {...getFieldProps('meno')}
                error={Boolean(touched.meno && errors.meno)}
                helperText={touched.meno && errors.meno}
              />
              <TextField
                disabled={false}
                fullWidth
                autoComplete="priezvisko"
                type="text"
                label="Priezvisko"
                {...getFieldProps('priezvisko')}
                error={Boolean(touched.priezvisko && errors.priezvisko)}
                helperText={touched.priezvisko && errors.priezvisko}
              />
              <TextField
                disabled={false}
                fullWidth
                autoComplete="typskupiny"
                type="text"
                label="Typ skupiny"
                {...getFieldProps('typskupiny')}
                error={Boolean(touched.typskupiny && errors.typskupiny)}
                helperText={touched.typskupiny && errors.typskupiny}
              />
              <TextField
                disabled={false}
                fullWidth
                autoComplete="rhFaktor"
                type="text"
                label="RhFaktor"
                {...getFieldProps('rhFaktor')}
                error={Boolean(touched.rhFaktor && errors.rhFaktor)}
                helperText={touched.rhFaktor && errors.rhFaktor}
              />
              <TextField
                disabled={false}
                fullWidth
                autoComplete="vyska"
                type="text"
                label="Vyska - CM"
                {...getFieldProps('vyska')}
                error={Boolean(touched.vyska && errors.vyska)}
                helperText={touched.vyska && errors.vyska}
              />
              <TextField
                disabled={false}
                fullWidth
                autoComplete="hmotnost"
                type="text"
                label="Hmotnost - KG"
                {...getFieldProps('hmotnost')}
                error={Boolean(touched.hmotnost && errors.hmotnost)}
                helperText={touched.hmotnost && errors.hmotnost}
              />
            </Stack>
            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{my: 2}}>
            </Stack>
          </Form>
        </FormikProvider>
      </Box>
    </Card>
  );
}

export default EntityInfo
