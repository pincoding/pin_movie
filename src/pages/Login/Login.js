import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const Wrap = styled.div`
  padding-top: 120px;
  display: flex;
  justify-content: center;
`;
export const Form = styled.form`
  width: 450px;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

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
export const Button = styled.button`
  all: unset;
  width: 85%;
  height: 45px;
  text-align: center;
  background-color: ${(props) => (props.$bgcolor ? "#007aff" : "#1c1c1c")};
  margin-top: 70px;
  border-radius: 20px;
`;
export const Errors = styled.div`
  width: 80%;
  padding-left: 10px;
  margin-top: 5px;
  color: #f95a5a;
`;
export const Join = styled.div`
  width: 85%;
  display: flex;

  padding-top: 10px;
  p {
    padding-left: 20px;
  }
`;
const NavJoin = styled.div`
  padding-left: 20px;
`;
////////////////////////////////////////////////////////////////////////
export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();
  const nav = useNavigate();

  const submitHandler = () => {
    if (isValid === true) {
      nav("/", {
        replace: true,
      });
    }
  };
  const ClickHandler = () => {
    nav("/join");
  };
  return (
    <Wrap>
      <Helmet>
        <title>로그인</title>
      </Helmet>
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
          type="password"
          placeholder="패스워드를 입력하세요."
        ></input>
        <Errors>{errors?.password?.message}</Errors>
        <Join>
          <p>회원가입이 되어있으신가요 ?</p>
          <NavJoin onClick={ClickHandler}>회원가입</NavJoin>
        </Join>
        <Button $bgcolor={isValid}>로그인</Button>
      </Form>
    </Wrap>
  );
};
