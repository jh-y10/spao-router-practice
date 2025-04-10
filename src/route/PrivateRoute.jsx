import React from "react";
import ProductAll from "../page/ProductAll";
import ProductDetail from "../page/ProductDetail";
import { Navigate } from "react-router";

const PrivateRoute = ({ authenticate }) => {
  return authenticate === true ? <ProductDetail /> : <Navigate to="/login" />;
};

export default PrivateRoute;
