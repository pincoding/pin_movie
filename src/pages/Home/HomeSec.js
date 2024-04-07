import styled from "styled-components";
import { imgURL } from "../../imgurl";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";

const Section = styled.div`
  padding: 50px 0px 0px 30px;
  background-color: black;
  h1 {
    padding: 20px 0;
    color: #fff;
    font-size: 24px;
    font-weight: 700;
  }
  @media screen and (max-width: 1024px) {
    h1 {
      font-size: 30px;
      font-weight: 500;
    }
  }
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 28px;
      font-weight: 500;
    }
  }
  @media screen and (max-width: 480px) {
    padding: 30px 0px 0px 30px;
    h1 {
      font-size: 25px;
      font-weight: 500;
    }
  }
`;
const Con = styled.div`
  height: 400px;
  border-radius: 20px;
  background-color: black;

  img {
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }
  @media screen and (max-width: 1024px) {
    height: 360px;
    h1 {
      font-size: 30px;
      font-weight: 500;
    }
  }
  @media screen and (max-width: 768px) {
    height: 260px;
    h1 {
      font-size: 28px;
      font-weight: 500;
    }
  }
  @media screen and (max-width: 480px) {
    height: 250px;
    h1 {
      font-size: 25px;
      font-weight: 500;
    }
  }
`;

export const HomeSec = ({ secData, text }) => {
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
                    ></img>
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
