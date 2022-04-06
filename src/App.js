import React from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import WebsiteLayout from "./pages/layouts/WebsiteLayout";
import HomePage from "./pages/HomePage";
import AdminLayout from "./pages/layouts/AdminLayout";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
