import React from "react";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";

import store from "./common/store";
import Index from "./product/Index";
import Add from "./product/Add";
import Edit from "./product/Edit";


// console.log(store);
const App = () => (
  <Provider store={store}>
    <div id="appContainer">
      <Routes>
        <Route path="products" element={<Index />} />
        <Route path="products/add" element={<Add />} />
        <Route path="products/:id/edit" element={<Edit />} />
      </Routes>
    </div>
  </Provider>
);
export default App;
