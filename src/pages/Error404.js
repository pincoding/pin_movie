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
  padding-top: 80px;
  h2 {
    font-size: 60px;
    font-weight: 700;
    margin: 60px 0;
  }
  h1 {
    width: 180px;
    height: 40px;
    border-radius: 14px;
    background-color: #1d1d1d;
    font-size: 16px;
    font-weight: 500;
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h1:hover {
    background-color: #00a7f6;
  }
  h4 {
    max-width: 440px;
    width: 100%;
    text-align: center;
  }

  @media screen and (max-width: 480px) {
    h1 {
      width: 160px;
      font-size: 14px;
    }
    h2 {
      font-size: 50px;
      font-weight: 500;
      margin: 60px 0;
    }
    h4 {
      max-width: 380px;
      width: 100%;
      text-align: center;
    }
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
        <h4>
          서비스 이용에 불편을 드려 죄송합니다. 해당 페이지를 찾을 수 없습니다.
          홈페이지로 이동해 다양한 콘텐츠를 만나보세요.
        </h4>
        <Link to={"/"}>
          <h1>홈페이지 돌아가기</h1>
        </Link>
      </NotFound>
    </div>
  );
};

// width
// height
// playing
// muted

// ---------------------------------------------------------------------

// 404 폰트 100픽셀
// 글자 오퍼시티 0.7서비스 이용에 불편을 드려 죄송합니다. 해당 페이지를 찾을 수 없습니다. 홈페이지로 이동해 다양한 콘텐츠를 만나보세요. =>
// 밑에 문장 두문장으로

// CRUD
// 네이트브 APP - 핸드폰 웹 앱 사용가능한
// 웹 -
