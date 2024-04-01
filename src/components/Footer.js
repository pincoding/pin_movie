import { Link } from "react-router-dom";
import styled from "styled-components";

const SFooter = styled.div`
  width: 100vw;
  height: 200px;
  background-color: black;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #1c1c1c;
  margin-top: 100px;
  /* top: 2220px; */
`;
const Con = styled.div`
  display: flex;
  padding-left: 80px;
  @media screen and (max-width: 1024px) {
    padding-left: 80px;
  }
  @media screen and (max-width: 768px) {
    padding-left: 13px;
  }
  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    padding-left: 0px;
  }
`;
const TextBox = styled.div`
  display: flex;
  padding: 20px 100px 0 30px;
  color: white;
  flex-direction: column;
  line-height: 30px;
  h1 {
    font-size: 28px;
  }
  a {
    text-decoration: dotted;
  }
  @media screen and (max-width: 1024px) {
    padding: 20px 100px 0 30px;
    h1 {
      font-size: 28px;
    }
  }
  @media screen and (max-width: 768px) {
    padding: 20px 0px 0 30px;
    h1 {
      font-size: 28px;
    }
  }
  @media screen and (max-width: 480px) {
    line-height: 23px;
    padding: 20px 0px 0 30px;
    h1 {
      font-size: 18px;
    }
    p {
      font-size: 12px;
    }
    a {
      font-size: 12px;
    }
  }
`;
const ConIn = styled.div`
  width: 200px;
  display: flex;
  margin-right: 90px;
  padding-top: 20px;
  justify-content: space-between;
  @media screen and (max-width: 480px) {
    margin-right: 30px;
  }
`;
const ImgBox = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Footer = () => {
  return (
    <SFooter>
      <Con>
        <TextBox>
          <Link to={"/"}>
            <h1>PinMovie</h1>
          </Link>
        </TextBox>
        <TextBox>
          <p>Name : Pincoding</p>
          <a href="https://github.com/pincoding">
            pincoding GitHub : https://github.com/pincoding
          </a>
          <p>Email : dydtjswkdrns@naver.com</p>
        </TextBox>
      </Con>

      <ConIn>
        <ImgBox>
          <img
            src="https://blog.kakaocdn.net/dn/HDY7T/btrY2our4Rw/Fw6bz0QroBUp1YxglkkwEK/img.webp"
            alt="구글"
          ></img>
        </ImgBox>
        <ImgBox>
          <img
            src="https://i.namu.wiki/i/p_1IEyQ8rYenO9YgAFp_LHIAW46kn6DXT0VKmZ_jKNijvYth9DieYZuJX_E_H_4GkCER_sVKhMqSyQYoW94JKA.svg"
            alt="네이버"
          ></img>
        </ImgBox>
        <ImgBox>
          <img
            src="https://cdn.pixabay.com/photo/2018/11/13/22/01/instagram-3814080_1280.png"
            alt="인스타"
          ></img>
        </ImgBox>
        <ImgBox>
          <img
            src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
            alt="페이스북"
          ></img>
        </ImgBox>
      </ConIn>
    </SFooter>
  );
};
