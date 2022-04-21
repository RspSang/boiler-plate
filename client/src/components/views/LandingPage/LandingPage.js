import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Auth from "../../../hoc/Auth";

function LandingPage() {
  const navigate = useNavigate();

  const onClickHandler = async () => {
    const response = await axios
      .get(`api/users/logout`)
      .then((response) => response.data);
    console.log(response);

    if (response.success) {
      navigate("/login");
    } else {
      alert("로그아웃 하는데 실패 했습니다");
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <h2>시작 페이지</h2>
      <button onClick={onClickHandler}>로그아웃</button>
    </div>
  );
}

export default Auth(LandingPage, null);
