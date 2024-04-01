// import styled from "styled-components";
import { useEffect, useState } from "react";
import { details, videos } from "../../api";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { imgURL } from "../../imgurl";
import { Loadings } from "../../components/Loading";
import { Helmet } from "react-helmet-async";

const Warp = styled.div`
  padding-top: 80px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const DetSec01 = styled.div`
  width: 60%;
  height: 55vh;
  position: relative;
  img {
    height: 100%;
    object-fit: cover;
  }
  @media screen and (max-width: 1024px) {
    width: 70%;
  }
  @media screen and (max-width: 768px) {
    width: 85%;
  }
  @media screen and (max-width: 480px) {
    width: 90%;
  }
`;
const DetSec02 = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  .conWarp01 {
    width: 80%;
  }
  @media screen and (max-width: 1024px) {
    width: 70%;
  }
  @media screen and (max-width: 768px) {
    width: 85%;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
    width: 90%;
  }
`;
const ConWrap = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    padding: 5px 15px;
    border-radius: 5px;
    width: fit-content;
    border: 2px solid #307291;
    color: white;
    span {
      color: #00a7f6;
      letter-spacing: 5px;
      font-weight: 700;
    }
  }
  h2 {
    line-height: 30px;
  }
  h3 {
    line-height: 23px;
  }
  @media screen and (max-width: 480px) {
    h1 {
      font-size: 16px;
      padding: 3px 10px;
    }
    h2 {
      font-size: 15px;
    }
    h3 {
      width: 90vw;
      display: block;
      font-size: 15px;
    }
  }
`;

const PlayWrap = styled.div`
  padding: 8px 40px;
  height: fit-content;
  display: flex;
  justify-content: center;
  background-color: #1c1c1c;
  border-radius: 20px;
  position: relative;
  &:hover {
    background-color: #00a7f6;
    cursor: pointer;
    user-select: none;
  }
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
    padding: 12px 40px;
    margin-top: 30px;
  }
`;

const IframeWrap = styled.div`
  width: ${(props) => props.$bgSize};
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.5s;
`;

export const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [viData, setviData] = useState();
  const [widhtData, setwidhtData] = useState("0%");

  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const detailId = await details(id);
        const { results } = await videos(id);
        setviData(results);
        // console.log(vidId);

        setData(detailId);
        // console.log(detailId);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);
  // console.log(viData[0]?.key);
  // console.log(data?.backdrop_path);

  const videosHandler = () => {
    setwidhtData("100%");
  };

  return (
    <>
      {Loading ? (
        <Loadings />
      ) : (
        <>
          <Helmet>
            <title>자세히보기</title>
          </Helmet>
          <Warp>
            <DetSec01>
              <img
                src={`${imgURL.original}${data?.backdrop_path}`}
                alt={data?.title}
              />
              <IframeWrap $bgSize={widhtData}>
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${viData[0]?.key}`}
                  title="[쿵푸팬더4] 레전드 팬더 두둥 등장"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </IframeWrap>
            </DetSec01>
            <DetSec02>
              <ConWrap className="conWarp01">
                <h1>
                  <span>핀</span>무비
                </h1>
                <h2>제목 : {data?.title}</h2>
                <h2>평점 : {Math.round(data?.vote_average)}점</h2>
                <h2>상영시간 : {data?.runtime}분</h2>
                <h3>{data?.overview}</h3>
              </ConWrap>
              <PlayWrap onClick={videosHandler}>
                {console.log(widhtData)}
                <h1>재생</h1>
              </PlayWrap>
            </DetSec02>
          </Warp>
        </>
      )}
    </>
  );
};

// 장르 ,평점
// 터미널 > cd 경로 바꿈 > git clone (복제해서 가지고온다) -> 깃허브 https 주소 복사 cd 경로 붙여넣기
// cd 파일명 -> code.
// ->코드 실행후 터미널 npm i
