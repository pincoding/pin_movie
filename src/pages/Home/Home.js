import { useEffect, useState } from "react";
import { nowPlaying, popular, topRated, upcoming } from "../../api";

import { MainHome } from "./MainHome";
import { HomeSec } from "./HomeSec";
import { HomeSec02 } from "./HomeSec02";
import { Loadings } from "../../components/Loading";
import styled from "styled-components";
import { Helmet } from "react-helmet-async";

const Container = styled.div``;

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
              <Helmet>
                <title>Home</title>
              </Helmet>
              <MainHome mainData={upData} mainRandom={randomIndexes}></MainHome>
              <HomeSec secData={topData} text={"핀무비 TOP순위"} />
              <HomeSec02 secData={popData} text={"인기순위"} />
              <HomeSec02 secData={nowData} text={"상영 영화"} />
              <HomeSec02 secData={upData} text={"개봉예정작"} />
              <h3>{upData?.title}</h3>
            </>
          )}
        </>
      )}
    </Container>
  );
};
