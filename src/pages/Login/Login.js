import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrap = styled.div`
  padding-top: 120px;
  display: flex;
  justify-content: center;
`;
export const Form = styled.form`
  width: 450px;
  height: 700px;
  /* background-color: #1d1d1d; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  a {
    width: 85%;
  }
  h1 {
    font-size: 40px;
    font-weight: 900;
    padding-bottom: 80px;
  }
  input {
    all: unset;
    width: 80%;
    height: 45px;
    padding-left: 20px;
    background-color: white;
    margin-top: 20px;
    border-radius: 20px;
    color: black;
  }
`;
const Button = styled.button`
  all: unset;
  width: 100%;
  height: 45px;
  text-align: center;
  /* background-color: #1c1c1c; */
  /* background-color: #007aff; */
  background-color: ${(props) => (props.$bgcolor ? "#007aff" : "#1c1c1c")};
  margin-top: 70px;
  border-radius: 20px;
`;
const Errors = styled.div`
  width: 80%;
  padding-left: 10px;
  margin-top: 5px;
  color: #f95a5a;
`;

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();
  console.log(isValid);
  const submitHandler = () => {
    console.log("서브밋 작동합니다.");
  };
  console.log(errors?.password?.message);
  return (
    <Wrap>
      <Form onSubmit={handleSubmit(submitHandler)}>
        <h1>PinMovie</h1>
        <input
          {...register("username", {
            required: "아이디를 입력해주세요.",
            minLength: {
              message: "아이디는 2자리이상 입력하세요",
              value: 2,
            },
          })}
          type="아이디"
          placeholder="아이디를 입력하세요."
        ></input>
        <Errors>{errors?.username?.message}</Errors>
        <input
          {...register("password", {
            required: "비밀번호를 입력해주세요.",
            minLength: {
              value: 8,
              message: "비밀번호는 8자리 이상",
            },
          })}
          type="패스워드"
          placeholder="패스워드를 입력하세요."
        ></input>
        {console.log(errors)}
        <Errors>{errors?.password?.message}</Errors>
        <Link to={isValid ? "/" : ""}>
          <Button $bgcolor={isValid}>로그인</Button>
        </Link>
      </Form>
    </Wrap>
  );
};
