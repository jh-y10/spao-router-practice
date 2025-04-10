import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";

const SideMenu = ({
  sideBar,
  setSideBar,
  searchToggle,
  useSearchToggle,
  authenticate,
  setAuthenticate,
}) => {
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
    setSideBar(false);
  };

  const logout = () => {
    setAuthenticate(false);
    navigate("/")
    setSideBar(false);
  };

  return (
    <div className={sideBar === true ? "side-bar s-active" : "side-bar"}>
      <button type="button" onClick={() => setSideBar(false)}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <ul>
        {menuList.map((menu) => (
          <li>
            <a href="#">{menu}</a>
          </li>
        ))}
      </ul>
      <div className="s-button-area">
        {authenticate === true ? (
          <button type="button" onClick={logout}>로그아웃</button>
        ) : (
          <button type="button" onClick={goToLogin}>
            로그인
          </button>
        )}
        <button type="button" onClick={() => useSearchToggle(searchToggle)}>
          검색
        </button>
        <button type="button">찜 목록</button>
        <button type="button">장바구니</button>
      </div>
    </div>
  );
};

export default SideMenu;
