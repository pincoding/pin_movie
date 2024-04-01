import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NotFound = styled.div`
  height: calc(100vh - 300px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  line-height: 30px;
  h2 {
    margin-top: 170px;
  }
  h1 {
    width: 200px;
    height: 40px;
    border-radius: 14px;

    background-color: #1d1d1d;
    font-size: 18px;
    font-weight: 500;
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h1:hover {
    background-color: #00a7f6;
  }
`;

export const Error404 = () => {
  return (
    <div>
      <NotFound>
        <Helmet>
          <title>Error 404</title>
        </Helmet>
        <h2>404</h2>
        <p>
          서비스 이용에 불편을 드려 죄송합니다. 해당 페이지를 찾을 수 없습니다.
          홈페이지로 이동해 다양한 콘텐츠를 만나보세요.
        </p>
        <Link to={"/"}>
          <h1>홈페이지 돌아가기</h1>
        </Link>
      </NotFound>
    </div>
  );
};
