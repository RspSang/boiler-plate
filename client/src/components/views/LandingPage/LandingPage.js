import React from "react";
import Auth from "../../../hoc/Auth";

function LandingPage() {
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
    </div>
  );
}

export default Auth(LandingPage, null);
