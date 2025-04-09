import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router";

const Login = ({ setAuthenticate }) => {
  const navigate = useNavigate();

  const loginUser = (event) => {
    event.preventDefault();
    setAuthenticate(true);
    navigate("/");
  };

  return (
    <div className="login-area">
      <h1>로그인</h1>
      <form action="" method="GET" onSubmit={(event) => loginUser(event)}>
        <input type="text" placeholder="아이디를 입력하세요" maxLength="12px" />
        <input
          type="password"
          placeholder="비밀번호를 입력하세요"
          maxLength="20px"
        />
        <Button variant="danger" type="submit">
          로그인
        </Button>
      </form>
    </div>
  );
};

export default Login;
