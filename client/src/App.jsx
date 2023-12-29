import { useSelector } from "react-redux"
import Cart from "./pages/Cart"
import Home from "./pages/Home"
import Login from "./pages/Login"
import ProductView from "./pages/ProductView"
import Productfilter from "./pages/Productfilter"
import Register from "./pages/Register"
import {BrowserRouter as Router,
  Routes,
  Route,
  Navigate} from "react-router-dom"


const App = () => {
  const user=useSelector((state)=>state.user.currentUser);
  return (
  <Router>
   <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route exact path="/products/:category" element={<Productfilter />} />
    <Route exact path="/product/:id" element={<ProductView />} />
    <Route exact path="/cart" element={<Cart />} />
    <Route path="/login" element={ user ? <Navigate to="/" /> : <Login />} />
    <Route path="/register" element={ user ? <Navigate to="/" /> : <Register />} />
  </Routes>   
</Router>
    
  )
  
}

export default App



