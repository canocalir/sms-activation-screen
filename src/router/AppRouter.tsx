import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../Views/Home/Home'
import Funny from '../Views/Funny/Funny'
import Romance from '../Views/Romance/Romance'
import Pin from '../Views/Pin/Pin'
import Thanks from '../Views/Thanks/Thanks'

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/funny' element={<Funny/>}/>
    <Route path='/romantic' element={<Romance/>}/>
    <Route path='/pinscreen' element={<Pin/>}/>
    <Route path='/thanks' element={<Thanks/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter