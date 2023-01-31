import Homepage from "./pages/homepage";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import SingleProduct from "./pages/singleproduct";
import Products from "./pages/products";
import Product from "./pages/product";
import Dashboard from "./pages/dashboard";
import Checkout from "./pages/checkout";
import Pagenotfound from "./pages/pagenotfound";
import MyOrders from "./pages/myOrders";
import Dashproducts from "./pages/dashproducts";
import Dashorders from "./pages/dashorders";
import Dashusers from "./pages/dashusers";
import Sucesspage from "./pages/sucesspage";
import ProfilePage from "./pages/profilepage";
import { useSelector } from "react-redux";
import AddproductModel from "./pages/addProduct";
import Aboutus from "./pages/aboutus";
import Orders from "./pages/orders";


function App() {

  const user = useSelector((state) => state.user.user)

  return (
    <div className="application">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/singleproduct/:id" element={<SingleProduct />} />
        <Route path="/products/:category" element={<Products />} />
        <Route path="/product/:gender" element={<Product />} />
        <Route path="/login" element={user ? <Navigate to={"/"} /> : <Login />} />
        <Route path="/register" element={user ? <Login /> : <Register />} />
        <Route path="/checkout" element={user ? <Checkout /> : <Login />} />
        <Route path="/myorders/:id" element={user ? <MyOrders /> : <Navigate to={"/"} />} />
        <Route path="/orders/:id" element={user ? <Orders /> : <Navigate to={"/"} />} />
        {user &&
          <>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashproducts" element={<Dashproducts />} />
            <Route path="/dashorders" element={<Dashorders />} />
            <Route path="/dashusers" element={<Dashusers />} />
            <Route path="/addproduct" element={<AddproductModel />} />
          </>
        }
        <Route path="/sucess" element={<Sucesspage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>

    </div>
  );
}

export default App;
