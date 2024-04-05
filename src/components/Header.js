import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { IoHomeOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import styled from "styled-components";
import { list02 } from "../api";
import { FiDelete } from "react-icons/fi";

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
    display: none;
  }
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  padding-left: 30px;
  font-size: 28px;
  font-weight: 900;
  @media screen and (max-width: 1024px) {
    padding-left: 0px;
  }
  @media screen and (max-width: 768px) {
    padding-left: 0px;
  }
  @media screen and (max-width: 480px) {
    padding-left: 20px;
    font-size: 20px;
  }
`;
const MenuWrap = styled.div`
  width: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  right: 60px;
  user-select: none;
  p {
    font-size: 24px;
    cursor: pointer;
  }
  @media screen and (max-width: 1024px) {
    right: 30px;
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
    right: 22px;
    p {
      /* font-size: 20px;
      margin-left: 14px; */
      display: none;
    }
  }
`;
const SubWrap = styled.div`
  background-color: black;
  position: absolute;
  top: 68px;
  right: 60px;
  display: ${(props) => props.$opdata};
  grid-template-columns: repeat(2, 1fr);
  row-gap: 20px;
  column-gap: 20px;
  padding: 30px 30px;
  border-bottom-left-radius: 20px;
  border-top-right-radius: 20px;
  @media screen and (max-width: 1024px) {
    h1 {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 12px;
    }
  }
  @media screen and (max-width: 480px) {
    display: none;
  }
`;
const SubMeun = styled.div`
  width: fit-content;
  display: flex;
  h1 {
    width: fit-content;
  }
`;

const Ptitle = styled.div`
  font-size: 28px;
  cursor: pointer;
`;
const MoHeader = styled.div`
  display: none;
  @media screen and (max-width: 480px) {
    display: block;
    width: 100%;

    padding: 20px 20px;
    position: fixed;
    z-index: 20;
    display: flex;
    justify-content: space-between;
    h1 {
      font-size: 24px;
      font-weight: 600;
    }
    svg {
      font-size: 24px;
      margin-right: 4px;
    }
  }
`;
const MoWarp = styled.div`
  display: none;
  @media screen and (max-width: 480px) {
    display: ${(props) => props.$mobtn};
    width: 100%;
    height: 100%;
    background-color: black;
    position: fixed;
    top: 0px;
    left: 0;
    z-index: 40;
    padding: 0px 20px 120px 20px;
  }
`;
const Fn = styled.div`
  display: none;
  @media screen and (max-width: 480px) {
    display: block;
  }
`;
const CloseBtnWarp = styled.div`
  display: none;
  @media screen and (max-width: 480px) {
    display: block;
    width: 100%;
    height: 50px;
    text-align: right;

    svg {
      font-size: 24px;
      /* margin: 24px; */
    }
  }
`;
const PcIcon = styled.div`
  display: none;
  @media screen and (max-width: 480px) {
    display: block;
    width: 100%;
    text-align: left;

    svg {
      font-size: 24px;
      margin-left: 20px;
      margin-top: 20px;
      position: relative;
      right: 10px;
    }
  }
`;
const IconWarp = styled.div`
  display: none;
  @media screen and (max-width: 480px) {
    height: 20px;
    display: block;
  }
`;
const TitleWarp = styled.div`
  display: none;

  @media screen and (max-width: 480px) {
    display: block;
    width: 100%;
    position: absolute;
    top: 120px;
    left: 20px;
    text-align: left;
    h1 {
      font-size: 24px;
      padding: 0px 20px 20px 10px;
    }
  }
`;

const TitleCon = styled.div`
  display: none;
  @media screen and (max-width: 480px) {
    width: 100%;
    /* height: 300px; */
    display: grid;
    grid-template-columns: repeat(2, 20fr);
    justify-content: center;
    align-items: center;
    align-content: center;
    p {
      font-size: 16px;
      padding: 14px;
    }
  }
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
  const moHandler = () => {
    setdisplayData("grid");
  };
  const moCloseHandler = () => {
    setdisplayData("none");
  };

  // console.log(listdata);
  return (
    <>
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

          <Ptitle onClick={MenubarHandler} $opdata={displayData}>
            <FiMenu />
          </Ptitle>
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
      {/* 모바일 메뉴 */}
      <MoHeader onClick={moHandler}>
        <h1>PinMovie</h1>
        <Fn>
          <FiMenu />
        </Fn>
      </MoHeader>
      <MoWarp $mobtn={displayData}>
        <CloseBtnWarp onClick={moCloseHandler} $mobtn={displayData}>
          <PcIcon>
            <IconWarp onClick={moCloseHandler} $mobtn={displayData}>
              <Link to={"/"}>
                <IoHomeOutline />
              </Link>
              <Link to={"/search"}>
                <FiSearch />
              </Link>
            </IconWarp>
          </PcIcon>
          <FiDelete />
        </CloseBtnWarp>

        <TitleWarp>
          <h1>장르</h1>
          <TitleCon>
            {listdata &&
              listdata.map((data) => (
                <SubMeun key={data.id}>
                  <Link
                    to={`/list/${data.id}`}
                    onClick={MenubarHandler}
                    $opdata={displayData}
                  >
                    <p>{data.name}</p>
                  </Link>
                </SubMeun>
              ))}
          </TitleCon>
        </TitleWarp>
      </MoWarp>
    </>
  );
};
