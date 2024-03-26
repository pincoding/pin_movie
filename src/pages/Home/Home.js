import { useEffect, useState } from "react";
import { upcoming } from "../../api";
import styled from "styled-components";
import { SyncLoader } from "react-spinners";

import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 30px;
  color: white;

  h4 {
    width: 100%;
    height: 50px;
    background-color: antiquewhite;
    font-size: 18px;
    background-color: #00a7f6;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
  }
`;
const Box = styled.div`
  margin-bottom: 30px;
  h1 {
    font-size: 38px;
    margin-bottom: 16px;
  }
  h3 {
    font-size: 18px;
  }
`;

export const Home = () => {
  const [upData, upDataset] = useState();
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { results } = await upcoming();
      console.log(results);
      upDataset(results);
      setLoading(false);
    })();
  }, []);

  return (
    <div>
      {Loading ? (
        <LdContainer>
          <SyncLoader size={"16px"} color={"#00A7F6"} />
        </LdContainer>
      ) : (
        <>
          {upData && (
            <>
              <Swiper
                spaceBetween={0}
                slidesPerView={1}
                modules={[Navigation, Pagination, A11y]}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
              >
                {upData.map((data) => (
                  <SwiperSlide key={data?.id}>
                    <Container $Bg={data?.backdrop_path}>
                      <ConWrap>
                        <Con>
                          <Box>
                            <h1>{data?.title}</h1>
                            <h3>액션,판타지</h3>
                          </Box>
                          <h4>자세히보기</h4>
                        </Con>
                      </ConWrap>
                    </Container>
                  </SwiperSlide>
                ))}
              </Swiper>
            </>
          )}
        </>
      )}
    </div>
  );
};
