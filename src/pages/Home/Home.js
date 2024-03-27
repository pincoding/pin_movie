import { useEffect, useState } from "react";
import { nowPlaying, popular, topRated, upcoming } from "../../api";
import { SyncLoader } from "react-spinners";
import styled from "styled-components";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import { MainHome } from "./MainHome";
import { HomeSec } from "./HomeSec";
import { HomeSec02 } from "./HomeSec02";
// import { useParams } from "react-router-dom";

const LdContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Home = () => {
  const [upData, setupData] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [randomIndexes, setRandomIndexes] = useState([]);
  const [popData, setPopData] = useState();
  const [topData, setTopData] = useState();
  const [nowData, setnowData] = useState();
  // const { id } = useParams();
  // const [ratIdDate, setratIdDate] = useState();

  useEffect(() => {
    (async () => {
      const { results: upResults } = await upcoming();
      const { results: popResults } = await popular();
      const { results: topResults } = await topRated();
      const { results: nowResults } = await nowPlaying();

      setupData(upResults);
      setPopData(popResults);
      setTopData(topResults);
      setnowData(nowResults);

      setLoading(false);
    })();
  }, []);
  console.log(upData[0]?.id);
  // console.log(popData);
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
          <HomeSec secData={topData} text={"핀무비 TOP순위"} />
          <HomeSec02 secData={popData} text={"인기순위"} />
          <HomeSec02 secData={nowData} text={"상영 영화"} />
          <HomeSec02 secData={upData} text={"계봉예정작"} />
          <h3>{upData?.title}</h3>
        </>
      )}
    </div>
  );
};
