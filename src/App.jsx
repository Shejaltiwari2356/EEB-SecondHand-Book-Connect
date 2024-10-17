import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Home";
import CheckOut from "./components/CheckOut";
import SellBooks from "./components/FormSellBooks";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/sell" element={<SellBooks />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
