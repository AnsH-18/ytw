import { useState } from 'react'
import './App.css'
import {Routes, BrowserRouter, Route} from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Protected from './Routes/Protected'
import Test from './pages/Test'
import Home from './pages/Home'
import VideoGrid from './components/VideoGrid'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route index element={<VideoGrid/>}></Route>
        </Route>
        <Route path='/register' element= {<Register/>}></Route>
        <Route path='/login' element= {<Login/>}></Route>
        <Route element= {<Protected/>}>
          <Route path='/test' element={<Test/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
