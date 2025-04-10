import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  let { id } = useParams();

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/jh-y10/spao-router-practice/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container className="detail-area">
      <Row>
        <Col lg={6} md={12}>
          <img src={product?.img} alt="" />
        </Col>
        <Col lg={6} md={12} className="detail-info">
          <h2>{product?.title}</h2>
          <strong>{product?.price.toLocaleString()}</strong>
          <div className="sub-info">
            <span className={product?.choice ? "" : "sr-only"}>{product?.choice ? "Conscious Choice" : ""}</span>
            <span className={product?.new ? "" : "sr-only"}>{product?.new ? "신제품" : ""}</span>
          </div>
          <div className="detail-button-area">
            <button type="button">
              <FontAwesomeIcon icon={faHeart} />
            </button>
            <button type="button">장바구니</button>
            <button type="button">바로구매</button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
