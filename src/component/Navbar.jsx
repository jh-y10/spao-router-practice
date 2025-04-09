import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";

const Navbar = ({ searchToggle, useSearchToggle }) => {
  const menuList = [
    "우먼",
    "맨",
    "키즈",
    "컬래버레이션",
    "라이브",
    "리뷰",
    "이벤트",
    "할인상품",
  ];

  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <nav>
      <div className="menu-area">
        <div className="side-menu-area">
          <button type="button">
            <FontAwesomeIcon icon={faBars} />
          </button>
          <h1>
            <img src="https://www.spao.com/morenvyimg/top_logo_pc.png" alt="" />
          </h1>
        </div>
        <ul>
          {menuList.map((menu) => (
            <li>
              <a href="#">{menu}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="button-area">
        <button type="button">
          <FontAwesomeIcon icon={faUser} onClick={goToLogin} />
        </button>
        <button type="button" onClick={() => useSearchToggle(searchToggle)}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
        <button type="button">
          <FontAwesomeIcon icon={faHeart} />
        </button>
        <button type="button">
          <FontAwesomeIcon icon={faBagShopping} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
