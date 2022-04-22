import React, { useState } from "react";
import axios from "axios";
import Auth from "../../../hoc/Auth";
import { USER_SERVER } from "../../Config";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { register, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };
  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };
  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value);
  };

  const onSubmitHandler = async (event) => {
    if (password !== confirmPassword) {
      setValue("confirmPassword", "");
      return alert("비밀번호와 비밀번호 확인은 같아야 합니다");
    }
    const body = {
      email,
      name,
      password,
    };
    const response = await axios
      .post(`${USER_SERVER}/register`, body)
      .then((response) => response.data);

    if (response.success) {
      navigate("/");
    } else {
      return alert("error");
    }
    setValue("email", "");
    setValue("name", "");
    setValue("password", "");
    setValue("confirmPassword", "");
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
        <label>Name</label>
        <input
          {...register("name")}
          type="text"
          value={name}
          onChange={onNameHandler}
        />
        <label>Password</label>
        <input
          {...register("password")}
          type="password"
          value={password}
          onChange={onPasswordHandler}
        />

        <label>Confirm Password</label>
        <input
          {...register("confirmPassword")}
          type="password"
          value={confirmPassword}
          onChange={onConfirmPasswordHandler}
        />
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Auth(RegisterPage, false);
