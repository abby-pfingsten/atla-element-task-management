import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'

function App() {
  return (
    <div className='App'>
      hi
      <Signup/>
      <BrowserRouter>
        <Routes>
          <Route element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
