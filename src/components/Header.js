import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { IoHomeOutline } from "react-icons/io5";
import { BiMoviePlay } from "react-icons/bi";
import styled from "styled-components";
import { list02 } from "../api";

const SHeader = styled.div`
  width: 100%;
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 0.6699929971988796) 0%,
    rgba(0, 0, 0, 0.46551120448179273) 35%,
    rgba(0, 0, 0, 0) 100%
  );
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
  user-select: none;
  p {
    font-size: 24px;
    margin-left: 30px;
    cursor: pointer;
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
const SubWrap = styled.div`
  height: 250px;
  background-color: black;
  position: absolute;
  top: 68px;
  right: 60px;
  display: ${(props) => props.$opdata};
  grid-template-columns: repeat(4, 1fr);
  row-gap: 20px;
  column-gap: 20px;
  padding: 30px 30px;
  border-bottom-left-radius: 20px;
  border-top-right-radius: 20px;
`;
const SubMeun = styled.div`
  width: fit-content;
  display: flex;
  h1 {
    width: fit-content;
  }
`;
const IconBox = styled.div``;
const Ptitle = styled.div`
  font-size: 24px;
  margin-left: 30px;
  cursor: pointer;
`;

export const Header = () => {
  const headerRef = useRef();
  const [listdata, setlistdata] = useState();
  const [displayData, setdisplayData] = useState("none");

  const srollHandler = () => {
    const pageY = window.scrollY;
    const current = headerRef.current;

    // console.log(current);

    if (pageY >= 200) {
      current.style.position = "fixed";
      current.style.backgroundColor = "rgba(0,0,0,0.7)";
      current.style.backdropFilter = "blur(3px)";
    } else {
      current.style.position = "absolute";
      current.style.backgroundColor = "transparent";
      current.style.backdropFilter = "blur(0px)";
    }
  };

  useEffect(() => {
    (async () => {
      const { genres } = await list02();
      setlistdata(genres);
    })();
    window.addEventListener("scroll", srollHandler);
  }, []);

  let booleans = "none";
  const MenubarHandler = () => {
    if (booleans === displayData) {
      setdisplayData("grid");
    } else {
      setdisplayData("none");
    }
  };

  // console.log(listdata);
  return (
    <SHeader ref={headerRef}>
      <Logo>
        <Link to={"/"}>
          <h1>PinMovie</h1>
        </Link>
      </Logo>
      <MenuWrap>
        <Link to={"/"}>
          <p>
            <IoHomeOutline />
          </p>
        </Link>
        <Link to={"/search"}>
          <p>
            <FiSearch />
          </p>
        </Link>

        <IconBox>
          <Ptitle onClick={MenubarHandler} $opdata={displayData}>
            <BiMoviePlay />
          </Ptitle>
        </IconBox>
      </MenuWrap>
      <SubWrap $opdata={displayData}>
        {listdata &&
          listdata.map((data) => (
            <SubMeun key={data.id}>
              <Link
                to={`/list/${data.id}`}
                onClick={MenubarHandler}
                $opdata={displayData}
              >
                <h1>{data.name}</h1>
              </Link>
            </SubMeun>
          ))}
      </SubWrap>
    </SHeader>
  );
};
