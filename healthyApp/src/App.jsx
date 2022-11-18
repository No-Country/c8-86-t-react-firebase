
import { Route, Routes } from 'react-router-dom'

import Login from './components/Login/Login'
import Home from './components/Home/Home'
import Cart from './components/Cart/Cart'
import Profile from './components/Profile/Profile'
import SignUp from './components/SignUp/SignUp'
import ProductDetail from './components/Products/ProductDetail'
import RecipeDetail from './components/Recipes/RecipeDetail'
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes'

function App() {

  return (
    <div className='App'>
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/product/:id' element={<ProductDetail />} />
          <Route path='/recipe/:id' element={<RecipeDetail />} />ç

          <Route element={<ProtectedRoutes />}>
            <Route path='/cart' element={<Cart />} />
            <Route path='/profile' element={<Profile />} />
          </Route>
        </Routes>
    </div>
  )
}

export default App
