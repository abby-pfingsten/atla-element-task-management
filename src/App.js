import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import Signup from './pages/Signup'
import ElementSelection from './pages/ElementSelection'

function App() {
  return (
    <div className='App'>
      <CssBaseline />
      {/* <Signup /> */}
      <ElementSelection />
      <BrowserRouter>
        <Routes>
          {/* <Route exact path='/signup' element={<Signup />} /> */}
          <Route
            exact
            path='/element-selection'
            element={<ElementSelection />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
