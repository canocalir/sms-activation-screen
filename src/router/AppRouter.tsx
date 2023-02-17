import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../Views/Home/Home'

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/enterphone'/>
    <Route path='/pinscreen'/>
    <Route path='/thank-you'/>
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter