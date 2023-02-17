import {BrowserRouter, Routes, Route} from 'react-router-dom'

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/'/>
    <Route path='/enterphone'/>
    <Route path='/pinscreen'/>
    <Route path='/thank-you'/>
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter