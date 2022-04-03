import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./features/counter/Counter";
import Products from "./features/products/Products";

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <Products />
    </div>
  );
}

export default App;
