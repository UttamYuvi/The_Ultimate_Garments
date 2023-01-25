import React from "react"
import { BrowserRouter as Routers,Routes,Route } from "react-router-dom";

import Dashboard from "./Components/Administrator/Dashboard";
import AdminLogin from "./Components/Administrator/AdminLogin";
import Home from "./Components/UserServices/Home";
import BannerImages from "./Components/Administrator/BannerImages";
import MyCart from "./Components/UserServices/MyCart";
import ProductList from "./Components/UserServices/ProductList";
import Shipping from "./Components/UserServices/Shipping";
import ProductDetails from "./Components/UserServices/ProductDetails";
import MyAccount from "./Components/UserServices/MyAccount";
import PaymentGateway from "./Components/UserServices/PaymentGateway";
import AboutUs from "./Components/UserServices/AboutUs";
import Payment from "./Components/UserServices/Payment";
function App() {
  return (
    <div className="App">
      <Routers>
        <Routes>
          
          <Route element={<Dashboard/>}  path="/dashboard/*" />
          <Route element={<AdminLogin/>}  path="/adminlogin" />
          <Route element={<Home/>}  path="/home" />
          <Route element={<BannerImages/>}  path="/bannerimages" />
          <Route element={<MyCart/>}  path="/mycart" />
          <Route element={<ProductList/>}  path="/productlist/:id/:icon" />
          <Route element={<ProductDetails/>} path="/productdetails" />
          <Route element={<Shipping/>}  path="/shipping" />
          <Route element={<MyAccount/>}  path="/myaccount" />
          <Route element={<Payment/>}  path="/payment" />
          <Route element={<AboutUs/>}  path="/aboutus" />
          <Route element={<PaymentGateway/>}  path="/paymentgateway" />


        </Routes>
      </Routers>
    </div>
  );
}

export default App;
