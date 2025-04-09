import { useState, useEffect } from "react";
import { Routes, Route } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import ProductDetail from "./page/ProductDetail";
import Navbar from "./component/Navbar";
import Search from "./component/Search";
import PrivateRoute from "./route/PrivateRoute";

function App() {
  const [searchToggle, setSearchToggle] = useState(false);
  const [authenticate, setAuthenticate] = useState(false);

  const useSearchToggle = (toggle) => {
    if (toggle === false) {
      setSearchToggle(true);
    } else {
      setSearchToggle(false);
    }
  };

  useEffect(() => {
    console.log("auth", authenticate);
  }, [authenticate]);

  return (
    <div>
      <Navbar searchToggle={searchToggle} useSearchToggle={useSearchToggle} />
      <Search searchToggle={searchToggle} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route
          path="/product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
