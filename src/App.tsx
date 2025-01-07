import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Main from './assets/pages/Main/Main'
import Amount from './assets/pages/Amount/Amout'
import Receive from './assets/pages/Receive/Receive'

function App() {

  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Main/>} />
      <Route path='/amount' element={<Amount/>} />
      <Route path='/receive' element={<Receive/>} />
     </Routes>
    </BrowserRouter>
  )
}

export default App
