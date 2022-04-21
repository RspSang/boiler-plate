import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Auth(SpecificComponent, option, adminRoute = null) {
  //null    =>  아무나 출입이 가능한 페이지
  //true    =>  로그인한 유저만 출입이 가능한 페이지
  //false   =>  로그인한 유저는 출입 불가능한 페이지
  function AuthenticationCheck() {
    const navegiate = useNavigate();

    useEffect(() => {
      (async function () {
        const result = await axios
          .get("/api/users/auth")
          .then((response) => response.data);

        //로그인 하지 않은 상태
        if (!result.isAuth) {
          if (option) {
            navegiate("/login");
          }
        } else {
          //로그인 한 상태
          if (adminRoute && !result.isAdmin) {
            navegiate("/");
          } else {
            if (option === false) navegiate("/");
          }
        }
      })();
    }, []);
    return <SpecificComponent />;
  }
  return AuthenticationCheck;
}

export default Auth;
