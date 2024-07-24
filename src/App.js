import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'

import Signup from './pages/Signup'

function App() {
  return (
    <div className='App'>
      <CssBaseline />
      <Signup />
      <BrowserRouter>
        <Routes>
          <Route element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
