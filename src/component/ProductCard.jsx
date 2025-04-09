import React from "react";
import { useNavigate } from "react-router";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();

  const showDetail = () => {
    navigate(`/product/${item.id}`);
  };

  return (
    <div className="product-card" onClick={showDetail}>
      <img src={item?.img} alt="" width="270px" />
      <p>{item?.choice ? "Conscious Choice" : ""}</p>
      <h3>{item?.title}</h3>
      <strong>{item?.price.toLocaleString()}</strong>
      <p>{item?.new ? "신제품" : ""}</p>
    </div>
  );
};

export default ProductCard;
