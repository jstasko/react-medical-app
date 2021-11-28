import {Link as RouterLink} from 'react-router-dom';
import {styled} from '@mui/material/styles';
import {Box, Button, Typography, Container, Stack} from '@mui/material';
import React from "react";

const RootStyle = styled('div')(({theme}) => ({
  display: 'flex',
  minHeight: '100%',
  alignItems: 'center',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10)
}));


export default function Page404() {
  return (
    <RootStyle title="404 Page Not Found">
      <Container>
        <Box sx={{maxWidth: 480, margin: 'auto', textAlign: 'center'}}>
          <Typography variant="h3" paragraph>
            Sorry, page not found!
          </Typography>
          <Typography sx={{color: 'text.secondary'}}>
            Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL?
            Be sure to check your spelling.
          </Typography>
          <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
          </Stack>
          <Button to="/" size="large" variant="contained" component={RouterLink}>
            Go to Home
          </Button>
        </Box>
      </Container>
    </RootStyle>
  );
}
