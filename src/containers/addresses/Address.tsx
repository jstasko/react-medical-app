import React from "react";
import {Form, FormikProvider, useFormik} from "formik";
import {Box, Button, Card, CardHeader, Icon, Stack, TextField} from "@mui/material";
import {LoadingButton} from "@mui/lab";
import * as Yup from "yup";
import ModeEditIcon from '@mui/icons-material/ModeEdit';

interface IAddress {
  nMesta: string
  cDomu: number
  psc: string
  nOkresu: string
  nKraja: string
  nKrajiny: string
}

const Address: React.FC<IAddress> = (props: IAddress) => {
  const [disabled,setDisabled] = React.useState<boolean>(true);
  const LoginSchema = Yup.object().shape({});

  const formik = useFormik({
    initialValues: {
      n_mesta: props.nMesta,
      c_domu: props.cDomu,
      psc: props.psc,
      n_okresu: props.nOkresu,
      n_kraja: props.nKraja,
      n_krajiny: props.nKrajiny,
    },
    validationSchema: LoginSchema,
    onSubmit: () => {
    }
  });
  const {errors, touched, isSubmitting, handleSubmit, getFieldProps} = formik;

  const canUpdate = () => {
    setDisabled(false)
  }

  return (
    <Card>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <CardHeader title="Edit Address" subheader="Change players address"/>
        <Box mr={4} mt={4}>
          <Button
            onClick={canUpdate}
            variant="contained"
            startIcon={<Icon component={ModeEditIcon} width={22} height={22}/>}
          >
            Edit address
          </Button>
        </Box>
      </Stack>
      <Box sx={{p: 3, pb: 1}} dir="ltr">
        <FormikProvider value={formik}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <TextField
                disabled={disabled}
                fullWidth
                autoComplete="n_mesta"
                type="text"
                label="Nazov mesta"
                {...getFieldProps('n_mesta')}
                error={Boolean(touched.n_mesta && errors.n_mesta)}
                helperText={touched.n_mesta && errors.n_mesta}
              />
              <TextField
                disabled={disabled}
                fullWidth
                autoComplete="c_domu"
                type="text"
                label="Cislo domu"
                {...getFieldProps('c_domu')}
                error={Boolean(touched.c_domu && errors.c_domu)}
                helperText={touched.c_domu && errors.c_domu}
              />
              <TextField
                disabled={disabled}
                fullWidth
                autoComplete="text"
                type="type"
                label="PSC"
                {...getFieldProps('psc')}
                error={Boolean(touched.psc && errors.psc)}
                helperText={touched.psc && errors.psc}
              />
              <TextField
                disabled={disabled}
                fullWidth
                autoComplete="n_okresu"
                type="text"
                label="Nazov Okresu"
                {...getFieldProps('n_okresu')}
                error={Boolean(touched.n_okresu && errors.n_okresu)}
                helperText={touched.n_okresu && errors.n_okresu}
              />
              <TextField
                disabled={disabled}
                fullWidth
                autoComplete="text"
                type="text"
                label="Nazov Kraja"
                {...getFieldProps('n_kraja')}
                error={Boolean(touched.n_kraja && errors.n_kraja)}
                helperText={touched.n_kraja && errors.n_kraja}
              />

              <TextField
                disabled={disabled}
                fullWidth
                autoComplete="text"
                type="text"
                label="Nazov Krajiny"
                {...getFieldProps('n_krajiny')}
                error={Boolean(touched.n_krajiny && errors.n_krajiny)}
                helperText={touched.n_krajiny && errors.n_krajiny}
              />
            </Stack>

            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
            </Stack>

            <LoadingButton
              disabled={disabled}
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              loading={isSubmitting}
            >
              Save Addresses
            </LoadingButton>

            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{my: 2}}>
            </Stack>
          </Form>
        </FormikProvider>
      </Box>
    </Card>
  );
}

export default Address;
