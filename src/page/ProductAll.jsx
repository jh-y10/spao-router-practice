import React, { useEffect } from "react";
import ProductCard from "../component/ProductCard";

const ProductAll = () => {
  const getProducts = async () => {
    let url = "http://localhost:4000/products";
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return <ProductCard />;
};

export default ProductAll;
