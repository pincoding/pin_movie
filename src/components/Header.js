import { Link } from "react-router-dom";
import styled from "styled-components";

const SHeader = styled.div`
  width: 100%;
  height: 80px;
  backdrop-filter: blur(2px);
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  z-index: 10;
  display: flex;
  align-items: center;
  color: white;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  padding-left: 30px;
  font-size: 28px;
  font-weight: 900;
`;
const MenuWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  right: 60px;
  p {
    font-size: 18px;
    margin-left: 30px;
  }
`;

export const Header = () => {
  return (
    <SHeader>
      <Logo>
        <Link to={"/"}>
          {" "}
          <h1>PinMovie</h1>
        </Link>
      </Logo>
      <MenuWrap>
        <p>홈</p>
        <p>검색창</p>
      </MenuWrap>
    </SHeader>
  );
};
