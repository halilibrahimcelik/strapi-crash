import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CategoryDetails from "../components/categoryDetails/CategoryDetails";
import Navbar from "../components/navbar/Navbar";
import Category from "../pages/category/Category";
import Home from "../pages/home/Home";
import ReviewDetails from "../pages/reviewDetails/ReviewDetails";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<ReviewDetails />} />
        <Route path="category" element={<Category />}>
          <Route path=":categoryId" element={<CategoryDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
