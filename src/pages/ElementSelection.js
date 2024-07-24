import { createTheme, ThemeProvider } from '@mui/material/styles'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Stack from '@mui/material/Stack'
import Avatar from '@mui/material/Avatar'
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
          <Stack direction='row' spacing={2}>
            <Avatar alt='asfd' src={water}></Avatar>
            <Avatar alt='asfd' src={earth}></Avatar>
            <Avatar alt='asfd' src={fire}></Avatar>
            <Avatar alt='asfd' src={air}></Avatar>
          </Stack>
        </CssBaseline>
      </Container>
    </ThemeProvider>
  )
}
