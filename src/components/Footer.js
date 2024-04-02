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
  flex-direction: column;
  line-height: 30px;
  cursor: pointer;
  h1 {
    color: white;
    font-size: 28px;
  }
  a {
    color : #666666;
    text-decoration: dotted;
  }
  p {
    color: #666666;
  }
  a:hover{
    color: white;
  }
  p:hover{
    color: white;
  }
  
  @media screen and (max-width: 1024px) {
    padding: 20px 100px 0 30px;
    h1 {
      font-size: 28px;
    }
    p {
      color: #666666;
    }
  }
  @media screen and (max-width: 768px) {
    padding: 20px 0px 0 30px;
    h1 {
      font-size: 28px;
    }
    p {
      color: #666666;
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
      color: #666666;
    }
    a {
      font-size: 12px;
    }
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
    </SFooter>
  );
};
