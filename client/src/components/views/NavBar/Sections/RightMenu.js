import React from "react";
import { useQuery } from "react-query";
import { Menu } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { auth, USER_SERVER } from "../../../Config";

function RightMenu(props) {
  const navigate = useNavigate();

  const { isLoading, data } = useQuery("userData", auth);

  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then((response) => {
      if (response.status === 200) {
        navigate("/login");
      } else {
        alert("로그아웃 하는데 실패 했습니다");
      }
    });
  };
  return (
    <>
      {isLoading ? (
        <div>loading..</div>
      ) : data.userData && !data.userData.isAuth ? (
        <Menu mode={props.mode}>
          <Menu.Item key="mail">
            <a href="/login">Signin</a>
          </Menu.Item>
          <Menu.Item key="app">
            <a href="/register">Signup</a>
          </Menu.Item>
        </Menu>
      ) : (
        <Menu mode={props.mode}>
          <Menu.Item key="logout">
            <a onClick={logoutHandler}>Logout</a>
          </Menu.Item>
        </Menu>
      )}
    </>
  );
}

export default RightMenu;
