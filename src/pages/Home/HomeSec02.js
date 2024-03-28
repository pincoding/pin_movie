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

  /* top: -50px; */
`;
const Vote = styled.div``;

export const HomeSec02 = ({ secData, text }) => {
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
