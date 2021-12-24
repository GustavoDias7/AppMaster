import React from "react";
import { GlobalStorage } from "../context/GlobalContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Product";
import NotFound from "../pages/NotFound";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <GlobalStorage>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="produto" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </GlobalStorage>
    </BrowserRouter>
  );
};

export default MainRouter;
