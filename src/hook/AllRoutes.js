import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home"
import Cart from "../components/Cart";

const AllRoutes = () => {
  return (
    <>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/cart" element={<Cart/>}/>
    </Routes>
    </>
  )
}

export default AllRoutes