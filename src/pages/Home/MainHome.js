import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
import "swiper/css";

const Section = styled.div`
  width: 100%;
`;

const Container = styled.div`
  position: relative;
  height: 70vh;
  background: url(https://image.tmdb.org/t/p/original/${(props) => props.$Bg})
    no-repeat center/cover;
`;
const ConWrap = styled.div`
  height: 100%;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 0.3) 40%,
    rgba(0, 0, 0, 1) 100%
  );
`;
const Con = styled.div`
  width: 280px;
  position: absolute;
  top: 55%;
  transform: translateY(-50%);
  left: 60px;
  color: white;

  h4 {
    width: 85%;
    height: 40px;
    background-color: antiquewhite;
    font-size: 16px;
    font-weight: 700;
    background-color: #00a7f6;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    cursor: pointer;
  }
  @media screen and (max-width: 1024px) {
    h4 {
      width: 80%;
      font-size: 16px;
      font-weight: 700;
    }
  }
  @media screen and (max-width: 768px) {
    h4 {
      width: 75%;
      font-size: 14px;
      font-weight: 700;
    }
  }
  @media screen and (max-width: 480px) {
    width: 270px;
    top: 75%;
    left: 7%;
    h4 {
      width: 70%;
      font-size: 13px;
      font-weight: 700;
    }
  }
`;
const Box = styled.div`
  margin-bottom: 30px;
  h1 {
    font-weight: 900;
    font-size: 28px;
    margin-bottom: 16px;
  }
  h3 {
    font-size: 18px;
  }
  @media screen and (max-width: 1024px) {
    h1 {
      font-weight: 900;
      font-size: 26px;
      margin-bottom: 16px;
    }
    h3 {
      font-size: 16px;
    }
  }
  @media screen and (max-width: 768px) {
    h1 {
      font-weight: 900;
      font-size: 24px;
    }
    h3 {
      font-size: 15px;
    }
  }
  @media screen and (max-width: 480px) {
    h1 {
      font-weight: 900;
      font-size: 20px;
    }
    h3 {
      font-size: 14px;
    }
  }
`;

export const MainHome = ({ mainData, mainRandom }) => {
  const params = {
    slidesPerView: 1,
    spaceBetween: 0,
    breakpoints: {
      1024: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
  };
  return (
    <>
      <Section>
        {mainData.length > 0 && (
          <Swiper {...params}>
            {mainData.map((data, index) => (
              <SwiperSlide key={data.id}>
                <Container $Bg={mainData[mainRandom[index]]?.backdrop_path}>
                  <ConWrap>
                    <Con>
                      <Box>
                        <h1>{mainData[mainRandom[index]]?.title}</h1>
                        <h3>액션,판타지</h3>
                      </Box>
                      <h4>자세히보기</h4>
                    </Con>
                  </ConWrap>
                </Container>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </Section>
    </>
  );
};
