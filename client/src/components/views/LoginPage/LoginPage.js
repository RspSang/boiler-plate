import axios from "axios";
import React, { useState } from "react";
import Auth from "../../../hoc/Auth";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register, handleSubmit, setValue } = useForm();

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };
  const onSubmitHandler = async (event) => {
    const body = {
      email,
      password,
    };
    const response = await axios
      .post("/api/users/login", body)
      .then((response) => response.data);

    if (response.loginSuccess) {
      navigate("/");
    } else {
      return alert(`${response.message}`);
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
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <label>Email</label>
        <input
          {...register("email")}
          type="email"
          value={email}
          onChange={onEmailHandler}
        />
        <label>Password</label>
        <input
          {...register("password")}
          type="password"
          value={password}
          onChange={onPasswordHandler}
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Auth(LoginPage, false);
