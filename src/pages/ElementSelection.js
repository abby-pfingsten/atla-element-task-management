import { createTheme, ThemeProvider } from '@mui/material/styles'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'

const defaultTheme = createTheme()

export default function ElementSelection() {
  return (
    <ThemeProvider theme={defaultTheme}>
          <CssBaseline>
              <Container>
                  
              </Container>
      </CssBaseline>
    </ThemeProvider>
  )
}
