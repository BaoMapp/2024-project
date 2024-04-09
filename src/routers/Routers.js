import { Route, Routes, Navigate } from 'react-router-dom'

import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Cart from '../pages/Cart'
import ProductDetails from '../pages/ProductDetails'
import Checkout from '../pages/Checkout'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Oder from '../pages/Oder'
import Likeproduct from '../pages/Likeproduct'

const Routers = () => {
  return (
  <Routes>
    <Route path='/' element ={<Navigate to='home'/>}/>
    <Route path='home' element={<Home/>}/>
    <Route path='shop' element={<Shop/>}/>
    <Route path='cart' element={<Cart/>}/>
    <Route path='shop/:id' element={<ProductDetails/>}/>
    <Route path='checkout' element={<Checkout/>}/>
    <Route path='login' element={<Login/>}/>
    <Route path='signup' element={<Signup/>}/>
    <Route path='oder' element={<Oder/>}/>
    <Route path='likeproduct' element={<Likeproduct/>}/>
  </Routes>
)}

export default Routers
