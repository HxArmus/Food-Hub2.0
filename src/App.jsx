import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home/Home'
import Cart from './components/pages/Cart/Cart'
import Placeorder from './components/pages/Placeorder/Placeorder'
import Footer from './components/Footer/Footer'
import Login_popup from './components/login_popup/Login_popup'


const App = () => {
const [showlogin,setShowlogin] = React.useState(false);
  return (<>
{showlogin? <Login_popup setShowlogin={setShowlogin} /> : <></>}
    <div className='app'>

      <Navbar setShowlogin={setShowlogin} />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Cart' element={<Cart />} />
      <Route path='/Order' element={<Placeorder />} />
    </Routes>
    </div>
    <Footer />
    </>
  )
}

export default App
