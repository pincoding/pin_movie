import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { IoHomeOutline } from "react-icons/io5";
import styled from "styled-components";

const SHeader = styled.div`
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background: rgb(2,0,36);
  background: linear-gradient(180deg, rgba(2,0,36,0.6699929971988796) 0%, rgba(0,0,0,0.46551120448179273) 35%, rgba(0,0,0,0) 100%);
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
    padding: 20px 0px;
  }
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  padding-left: 30px;
  font-size: 28px;
  font-weight: 900;
  @media screen and (max-width: 480px) {
    padding-left: 20px;
    font-size: 20px;
  }
`;
const MenuWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  right: 60px;
  p {
    font-size: 24px;
    margin-left: 30px;
  }
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
    right: 20px;
    p {
    font-size: 20px;
    margin-left: 14px;
  }
  }
`;

export const Header = () => {

  const headerRef = useRef();

  const srollHandler = () => {
    const pageY = window.scrollY;
    const current = headerRef.current;

    console.log(current);

    if(pageY >= 200){
      current.style.position = "fixed";
      current.style.backgroundColor = "rgba(0,0,0,0.7)";
      current.style.backdropFilter = "blur(3px)"
    }else{
      current.style.position = "absolute";
      current.style.backgroundColor = "transparent"; 
      current.style.backdropFilter = "blur(0px)";
    }


  }

  useEffect(()=>{
    window.addEventListener("scroll",srollHandler)
  })
  return (
    <SHeader ref={headerRef}>
      <Logo>
        <Link to={"/"}>
          <h1>PinMovie</h1>
        </Link>
      </Logo>
      <MenuWrap>
        <Link to={"/"}>
          <p><IoHomeOutline /></p>
        </Link>
        <Link to={"/search"}>
          <p><FiSearch /></p>
        </Link>
      </MenuWrap>
    </SHeader>
  );
};
