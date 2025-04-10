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
  const [sideBar, setSideBar] = useState(false);

  const useSearchToggle = (toggle) => {
    if (toggle === false) {
      setSearchToggle(true);
      setSideBar(false);
    } else {
      setSearchToggle(false);
    }
  };

  return (
    <div>
      <Navbar
        searchToggle={searchToggle}
        useSearchToggle={useSearchToggle}
        authenticate={authenticate}
        setAuthenticate={setAuthenticate}
        setSideBar={setSideBar}
      />
      <Search searchToggle={searchToggle} useSearchToggle={useSearchToggle} />
      <Routes>
        <Route
          path="/"
          element={
            <ProductAll
              sideBar={sideBar}
              setSideBar={setSideBar}
              useSearchToggle={useSearchToggle}
              searchToggle={searchToggle}
              authenticate={authenticate}
              setAuthenticate={setAuthenticate}
            />
          }
        />
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
