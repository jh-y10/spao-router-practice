import { useState, useEffect } from "react";
import { Routes, Route } from "react-router";
import "./App.css";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import ProductDetail from "./page/ProductDetail";
import Navbar from "./component/Navbar";
import Search from "./component/Search";

function App() {
  const [searchToggle, setSearchToggle] = useState(false);
  const [productList, setProductList] = useState([]);

  const useSearchToggle = (toggle) => {
    if (toggle === false) {
      setSearchToggle(true);
      console.log("true");
    } else {
      setSearchToggle(false);
      console.log("false");
    }
  };

  return (
    <div>
      <Navbar searchToggle={searchToggle} useSearchToggle={useSearchToggle} />
      <Search searchToggle={searchToggle} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
