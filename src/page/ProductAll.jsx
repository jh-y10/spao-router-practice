import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import { useSearchParams } from "react-router";
import SideMenu from "../component/SideMenu";

const ProductAll = ({
  sideBar,
  setSideBar,
  searchToggle,
  useSearchToggle,
  authenticate,
  setAuthenticate,
}) => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    let searchQuery = query.get("q") || "";
    console.log("쿼리값은?", searchQuery);
    let url = `https://my-json-server.typicode.com/jh-y10/spao-router-practice/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div className="product-all">
      <SideMenu
        sideBar={sideBar}
        setSideBar={setSideBar}
        searchToggle={searchToggle}
        useSearchToggle={useSearchToggle}
        authenticate = {authenticate}
        setAuthenticate={setAuthenticate}
      />
      <Carousel className="carousel-container">
        <Carousel.Item>
          <img
            src="https://im.uniqlo.com/global-cms/spa/resfde071522fd1708fa429986ac7998c18fr.webp"
            alt=""
          />
          <Carousel.Caption>
            <h3>
              SNS 화제!
              <br />
              저지 배럴 레그 팬츠
            </h3>
            <p>
              젠더리스로도 입을 수 있는
              <br />
              탄탄한 소재에 트렌디한 벌룬 핏 팬츠
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://im.uniqlo.com/global-cms/spa/res0b2aee850cc792b08cf1235f3e1b3e6ffr.webp"
            alt=""
          />
          <Carousel.Caption>
            <h3>
              T-Shirts
              <br />
              티셔츠
            </h3>
            <p>모든 것을 담은 티셔츠</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://im.uniqlo.com/global-cms/spa/resda51abe7af46a3ac365392de786b513afr.webp"
            alt=""
          />
          <Carousel.Caption>
            <h3>
              2025SS KIDS
              <br />
              Sport Utility Wear
            </h3>
            <p>가벼운 움직임, 기분 좋은 일상</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Container className="card-container">
        <h2>위클리 베스트</h2>
        {productList.length !== 0 ? (
          <Row>
            {productList.map((item) => (
              <Col lg={3} md={6}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        ) : (
          <Row>
            <Col lg={12}>
              <strong className="no-search">검색 결과가 없습니다</strong>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default ProductAll;
