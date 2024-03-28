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
`;

export const HomeSec = ({ secData, text }) => {
  return (
    <>
      {secData && (
        <Section>
          <h1>{text}</h1>
          <Swiper spaceBetween={17} slidesPerView={6.2}>
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
