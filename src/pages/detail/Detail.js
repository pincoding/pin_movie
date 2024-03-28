// import styled from "styled-components";
import { useEffect, useState } from "react";
import { details } from "../../api";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { imgURL } from "../../imgurl";
import { Loadings } from "../../components/Loading";

const Warp = styled.div`
  padding-top: 80px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const DetSec01 = styled.div`
  width: 60%;
  height: 40vh;
  img {
    height: 100%;
    object-fit: cover;
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
  p {
    line-height: 23px;
  }
`;
const PlayWrap = styled.div`
  padding: 8px 40px;
  height: fit-content;
  display: flex;
  justify-content: center;
  background-color: #1c1c1c;
  border-radius: 20px;
  &:hover {
    background-color: #00a7f6;
    cursor: pointer;
    user-select: none;
  }
`;

export const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const detailId = await details(id);
        setData(detailId);
        console.log(detailId);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);
  console.log(data?.backdrop_path);
  return (
    <>
      {Loading ? (
        <Loadings />
      ) : (
        <>
          {" "}
          <Warp>
            <DetSec01>
              <img
                src={`${imgURL.original}${data?.backdrop_path}`}
                alt={data?.title}
              />
            </DetSec01>
            <DetSec02>
              <ConWrap className="conWarp01">
                <h1>
                  <span>핀</span>무비
                </h1>
                <h2>제목 : {data?.title}</h2>
                <h2>평점 : {Math.round(data?.vote_average)}점</h2>
                <h2>상영시간 : {data?.runtime}분</h2>
                <p>{data?.overview}</p>
              </ConWrap>
              <PlayWrap>
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
