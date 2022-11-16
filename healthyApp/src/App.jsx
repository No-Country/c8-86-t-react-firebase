
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes'
import Cart from './components/Cart/Cart'
import Profile from './components/Profile/Profile'
import SignUp from './components/SignUp/SignUp'
import Products from './components/Products/Products'
import Recipes from './components/Recipes/Recipes'



function App() {

  return (
    <div className="App">
      <Routes >
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/' element={<Home />}/>
        <Route path='/products/:id' element={<Products/>}></Route>
        <Route path='/recipe/:id' element={<Recipes/>}></Route>

        <Route element={<ProtectedRoutes />}>
          <Route path='/cart' element={<Cart />} />
          <Route path='/profile' element={<Profile />} />
        </Route>

      </Routes>
    </div>
  )
}

export default App
