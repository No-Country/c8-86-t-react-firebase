import { HashRouter, Routes, Route } from 'react-router-dom'

import ProtectedPages from './components/ProtectPages'
import Home from './pages/Home'
import Login from './pages/Login'
import ProductsItem from './pages/ProductsItem'
import Profile from './pages/Profile'
import RecipeDetails from './pages/RecipeDetails'
import ShoppingCart from './pages/ShoppingCart'
import SingUp from './pages/SingUp'

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/products/:id' element={<ProductsItem/>}></Route>
        <Route path='/recipe/:id' element={<RecipeDetails/>}></Route>
        <Route path={'/login'} element={<Login/>}></Route>
        <Route path={'/singup'} element={<SingUp/>}></Route>

        <Route element={<ProtectedPages/>}>
          <Route path='/profile' element={<Profile/>}></Route>
          <Route path='/cart' element={<ShoppingCart/>}></Route>
        </Route>

      </Routes>
    </HashRouter>
  )
}

export default App
