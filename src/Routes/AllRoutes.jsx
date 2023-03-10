import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import Payment from "../pages/Payment";
import ProductDetails from "../pages/ProductDetails";
import ProductsMen from "../pages/ProductsMen";
import ProductsWomen from "../pages/ProductsWomen";
import RegisterPage from "../pages/RegisterPage";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/register" element={<RegisterPage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/productsMen" element={<ProductsMen />}></Route>
      <Route path="/productsWomen" element={<ProductsWomen />}></Route>
      <Route path="/ProductDetails/:id" element={<ProductDetails />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/payment" element={<Payment />}></Route>
    </Routes>
  );
}

export default AllRoutes;
