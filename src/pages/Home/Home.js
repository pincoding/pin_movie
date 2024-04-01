import { useEffect, useState } from "react";
import { nowPlaying, popular, topRated, upcoming } from "../../api";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import { MainHome } from "./MainHome";
import { HomeSec } from "./HomeSec";
import { HomeSec02 } from "./HomeSec02";
import { Loadings } from "../../components/Loading";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Home = () => {
  const [upData, setupData] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [randomIndexes, setRandomIndexes] = useState([]);
  const [popData, setPopData] = useState();
  const [topData, setTopData] = useState();
  const [nowData, setnowData] = useState();

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

  useEffect(() => {
    if (upData.length > 0) {
      const indexes = Array.from({ length: upData.length }, () =>
        Math.floor(Math.random() * upData.length)
      );
      setRandomIndexes(indexes);
    }
  }, [upData]);

  return (
    <Container>
      {Loading ? (
        <Loadings />
      ) : (
        <>
          {upData && (
            <>
              <MainHome mainData={upData} mainRandom={randomIndexes}></MainHome>
              <HomeSec secData={topData} text={"핀무비 TOP순위"} />
              <HomeSec02 secData={popData} text={"인기순위"} />
              <HomeSec02 secData={nowData} text={"상영 영화"} />
              <HomeSec02 secData={upData} text={"계봉예정작"} />
              <h3>{upData?.title}</h3>
            </>
          )}
        </>
      )}
    </Container>
  );
};
