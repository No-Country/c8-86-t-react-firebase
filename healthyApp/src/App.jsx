import { Route, Routes } from "react-router-dom";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import Profile from "./components/Profile/Profile";
import Register from "./components/SignUp/SignUp";
import ProductDetail from "./components/Products/ProductDetail";
import RecipeDetail from "./components/Recipes/RecipeDetail";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";
import { AuthProvider } from "./context/AuthContext";

import Loading from './components/Loading/Loading'
import { useDispatch, useSelector } from 'react-redux'

import './App.css'
import EditProfile from "./components/Profile/EditProfile/EditProfile";

function App() {
    const isLoading = useSelector(state => state.loading)
    const dispatch = useDispatch()

    return (
        <div className='App'>
            <AuthProvider>
            { isLoading && <Loading/> }
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Register />} />
                    <Route path='/login/edit' element={<EditProfile/>}/>
                    <Route path='/product/:id' element={<ProductDetail />} />
                    <Route path='/recipe/:id' element={<RecipeDetail />} />
                    <Route element={<ProtectedRoutes />}>
                        <Route path='/cart' element={<Cart />} />
                    </Route>
                </Routes>
            </AuthProvider>
        </div>
    );
}

export default App;
