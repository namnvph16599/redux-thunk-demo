import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./features/counter/Counter";
import Products from "./features/products/pages/index";
import Add from "./features/products/pages/add";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="products" element={<Products />} />
        <Route path="products/add" element={<Add />} />
      </Routes>
    </div>
  );
}

export default App;
