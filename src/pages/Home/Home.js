import { useEffect, useState } from "react";
import { upcoming } from "../../api";
import styled from "styled-components";
import { SyncLoader } from "react-spinners";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Section = styled.div`
  .swiper-button-prev {
    color: #00a7f6;
  }
  .swiper-button-next {
    color: #00a7f6;
  }
`;

const Container = styled.div`
  position: relative;
  height: 70vh;
  background: url(https://image.tmdb.org/t/p/original/${(props) => props.$Bg})
    no-repeat center/cover;
`;
const LdContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
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
    width: 100%;
    height: 40px;
    background-color: antiquewhite;
    font-size: 16px;
    background-color: #00a7f6;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    cursor: pointer;
  }
`;
const Box = styled.div`
  margin-bottom: 30px;
  h1 {
    font-size: 34px;
    margin-bottom: 16px;
  }
  h3 {
    font-size: 18px;
  }
`;

export const Home = () => {
  const [upData, setupData] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [randomIndexes, setRandomIndexes] = useState([]);

  useEffect(() => {
    (async () => {
      const { results } = await upcoming();
      // console.log(results);
      setupData(results);

      setLoading(false);
    })();
  }, []);
  useEffect(() => {
    if (upData.length > 0) {
      const indexes = Array.from({ length: upData.length }, () =>
        Math.floor(Math.random() * upData.length)
      );
      setRandomIndexes(indexes);
    }
  }, [upData]);

  // const array = upData && upData[Math.floor(Math.random() * upData.length)];

  // console.log(array);
  // const newArray = () => {
  //   return Math.floor(Math.random() * array);
  // };
  // console.log(newArray());

  // const randomImg = () =>
  //   upData && upData[Math.floor(Math.random() * upData.length)].backdrop_path;

  // console.log(randomImg());
  // const randomImg = Math.floor(Math.random() * upData.length);
  // console.log(upData[randomImg]);
  // console.log(
  //   upData && upData[Math.floor(Math.random() * upData.length)].backdrop_path
  // );

  return (
    <div>
      {Loading ? (
        <LdContainer>
          <SyncLoader size={"10px"} color={"#00A7F6"} />
        </LdContainer>
      ) : (
        <Section>
          {upData.length > 0 && (
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              modules={[Navigation]}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
            >
              {upData.map((data, index) => (
                <SwiperSlide key={data.id}>
                  <Container $Bg={upData[randomIndexes[index]]?.backdrop_path}>
                    <ConWrap>
                      <Con>
                        <Box>
                          <h1>{upData[randomIndexes[index]]?.title}</h1>
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
      )}
    </div>
  );
};
