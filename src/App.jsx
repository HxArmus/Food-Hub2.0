import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home/Home'
import Cart from './components/pages/Cart/Cart'
import Placeorder from './components/pages/Placeorder/Placeorder'
import Footer from './components/Footer/Footer'


const App = () => {
  return (<>
    <div className='app'>
      <Navbar />
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
