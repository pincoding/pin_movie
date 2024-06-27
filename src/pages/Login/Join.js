import { Button, Errors, Form, Wrap } from "./Login";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const Join = () => {
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
    nav("/login");
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
        <input
          {...register("password", {
            required: "이메일을 입력해주세요.",
            minLength: {
              value: 12,
              message: "이메일은 12자리 이상",
            },
          })}
          type="password"
          placeholder="이메일을 입력해주세요."
        ></input>
        <Errors>{errors?.password?.message}</Errors>

        <Button $bgcolor={isValid} onClick={ClickHandler}>
          회원가입하기
        </Button>
      </Form>
    </Wrap>
  );
};
