import { createTheme, ThemeProvider } from '@mui/material/styles'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Stack from '@mui/material/Stack'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'

import water from '../icons/glacier.png'
import air from '../icons/air.png'
import fire from '../icons/volcanic.png'
import earth from '../icons/mountain-range.png'

const defaultTheme = createTheme()

export default function ElementSelection() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <CssBaseline>
          <Typography
            display='flex'
            justifyContent='center'
            alignContent='center'
            top={0}
            left={0}
            width={'1'}
            height={'1'}
            component='h1'
            variant='h5'
            flexWrap='wrap'
            position='fixed'
          >
            Choose your element...
          </Typography>
          <Stack
            justifyContent='center'
            alignItems='center'
            mt={30}
            direction={{ xs: 'row', sm: 'row' }}
            spacing={{ xs: 4, sm: 6, md: 40 }}
          >
            <Avatar
              alt='Water Ice Icon'
              src={water}
              sx={{ width: 60, height: 60 }}
            ></Avatar>
            <Avatar
              alt='Green Mountain Earth Icon'
              src={earth}
              sx={{ width: 60, height: 60 }}
            ></Avatar>
            <Avatar
              alt='Volcanic Fire Icon'
              src={fire}
              sx={{ width: 60, height: 60 }}
            ></Avatar>
            <Avatar
              alt='Windy Cloud Icon'
              src={air}
              sx={{ width: 60, height: 60 }}
            ></Avatar>
          </Stack>
          <Grid
            container
            justifyContent='flex-end'
            position='relative'
            z-index='10000'
          >
            <Grid item>
              <Link href='/signin' variant='body2'>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </CssBaseline>
      </Container>
    </ThemeProvider>
  )
}
