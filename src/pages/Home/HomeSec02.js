import styled from "styled-components";
import { imgURL } from "../../imgurl";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";

const Section = styled.div`
  padding: 50px 0px 0px 30px;
  background-color: black;
  h1 {
    padding: 40px 0;
    color: #fff;
    font-size: 30px;
    font-weight: 500;
  }
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
    padding: 16px 0px 0px 20px;
    h1 {
      padding: 16px 0;
      color: #fff;
      font-size: 20px;
      font-weight: 500;
    }
  }
`;
const Con = styled.div`
  height: 220px;
  border-radius: 20px;
  background-color: black;
  position: relative;
  overflow: hidden;
  img {
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
    height: 160px;
  }
`;
const Box = styled.div`
  width: 100%;
  height: 55px;
  background-color: #1c1c1c;
  position: absolute;
  bottom: 0;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
    font-size: 12px;
    height: 34px;
  }
`;
const Vote = styled.div``;

export const HomeSec02 = ({ secData, text }) => {
  const params = {
    slidesPerView: 6.2,
    spaceBetween: 17,
    breakpoints: {
      1024: {
        slidesPerView: 6.2,
        spaceBetween: 17,
      },
      640: {
        spaceBetween: 17,
        slidesPerView: 4.2,
      },
      320: {
        spaceBetween: 10,
        slidesPerView: 2.2,
      },
    },
  };
  return (
    <>
      {secData && (
        <Section>
          <h1>{text}</h1>
          <Swiper {...params}>
            {secData.map((data) => (
              <SwiperSlide key={data.id}>
                <Link to={`/detail/${data.id}`}>
                  <Con>
                    <img
                      src={`${imgURL.imgSize500}${data?.poster_path}`}
                      alt={`text`}
                    />
                    <Box>
                      <Vote>자세히보기</Vote>
                      {/* <Vote>평점 {Math.round(data?.vote_average)}점</Vote> */}
                    </Box>
                  </Con>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </Section>
      )}
    </>
  );
};
