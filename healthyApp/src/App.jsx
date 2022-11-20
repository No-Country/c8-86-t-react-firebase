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

function App() {
    return (
        <div className='App'>
            <AuthProvider>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Register />} />
                    <Route path='/product/:id' element={<ProductDetail />} />
                    <Route path='/recipe/:id' element={<RecipeDetail />} />

                    <Route element={<ProtectedRoutes />}>
                        <Route path='/cart' element={<Cart />} />
                        <Route path='/profile' element={<Profile />} />
                    </Route>
                </Routes>
            </AuthProvider>
        </div>
    );
}

export default App;
