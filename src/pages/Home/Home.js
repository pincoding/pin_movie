import { useEffect, useState } from "react";
import { popular, upcoming } from "../../api";
import { SyncLoader } from "react-spinners";
import styled from "styled-components";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import { MainHome } from "./MainHome";
import { imgURL } from "../../imgurl";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const LdContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Section = styled.div`
  padding-left: 30px;
  padding-top: 100px;
  background-color: black;
  h1 {
    padding: 40px 0;
    color: #fff;
    font-size: 34px;
    font-weight: 900;
  }
`;
const Con = styled.div`
  width: 230px;
  height: 400px;
  border-radius: 20px;
  background-color: lightblue;
  img {
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }
`;

export const Home = () => {
  const [upData, setupData] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [randomIndexes, setRandomIndexes] = useState([]);
  const [popData, setPopData] = useState();

  useEffect(() => {
    (async () => {
      const { results: upResults } = await upcoming();
      const { results: popResults } = await popular();
      setupData(upResults);
      setPopData(popResults);
      setLoading(false);
    })();
  }, []);
  console.log(popData);
  useEffect(() => {
    if (upData.length > 0) {
      const indexes = Array.from({ length: upData.length }, () =>
        Math.floor(Math.random() * upData.length)
      );
      setRandomIndexes(indexes);
    }
  }, [upData]);

  return (
    <div>
      {Loading ? (
        <LdContainer>
          <SyncLoader size={"10px"} color={"#00A7F6"} />
        </LdContainer>
      ) : (
        <>
          <MainHome mainData={upData} mainRandom={randomIndexes}></MainHome>
          <Section>
            <h1>인기영화</h1>
            <Swiper spaceBetween={10} slidesPerView={7.3}>
              {popData.map((popDatas) => (
                <SwiperSlide>
                  <Con>
                    <img
                      src={`${imgURL.imgSize500}${popDatas?.poster_path}`}
                      alt="인기영화"
                    ></img>
                  </Con>
                </SwiperSlide>
              ))}
            </Swiper>
          </Section>
          <Section>
            <h1>인기영화</h1>
            <Swiper spaceBetween={10} slidesPerView={7.3}>
              {popData.map((popDatas) => (
                <SwiperSlide>
                  <Con>
                    <img
                      src={`${imgURL.imgSize500}${popDatas?.poster_path}`}
                      alt="인기영화"
                    ></img>
                  </Con>
                </SwiperSlide>
              ))}
            </Swiper>
          </Section>
        </>
      )}
    </div>
  );
};
