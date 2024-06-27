import { useEffect, useState } from "react";
import { discover, list02 } from "../../api";
import { Link, useParams } from "react-router-dom";
import { imgURL } from "../../imgurl";
import styled from "styled-components";
import { Helmet } from "react-helmet-async";
const Wrap = styled.div`
  padding: 240px 100px 0px 100px;
  p {
    color: #1f77ff;
  }
  h1 {
    font-size: 30px;
    margin-top: 150px;
    color: white;
    font-weight: 900;
  }
  @media screen and (max-width: 1024px) {
    padding: 100px 50px 0px 50px;
    h1 {
      font-size: 26px;
      margin-top: 100px;
      color: white;
    }
  }
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 20px;
      margin-top: 50px;
    }
    p {
      font-size: 14px;
    }
    padding: 100px 50px 0px 50px;
  }
  @media screen and (max-width: 480px) {
    padding: 100px 0px 0px 0px;
    h1 {
      font-size: 20px;
      margin-top: 50px;
      margin-left: 20px;
      padding-bottom: 20px;
    }
    p {
      margin-top: 8px;
      margin-left: 15px;
      font-size: 12px;
    }
  }
`;
const Section = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 20px;
  column-gap: 20px;
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
    margin-top: 14px;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 10px;
    column-gap: 10px;
  }
  @media screen and (max-width: 480px) {
    width: 90%;
    margin: 0 auto;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 10px;
    column-gap: 10px;
  }
`;
const BgImg = styled.div`
  height: 400px;

  img {
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }
  @media screen and (max-width: 1024px) {
    height: 270px;
  }
  @media screen and (max-width: 768px) {
    height: 220px;
  }
  @media screen and (max-width: 480px) {
    height: 160px;
    img {
      border-radius: 10px;
    }
  }
`;

export const List = () => {
  const { id } = useParams();
  const [disdata, setDisdata] = useState();
  const [gendata, setGendata] = useState();
  const numId = Number(id);

  useEffect(() => {
    (async () => {
      try {
        const { results } = await discover(id);

        const { genres } = await list02();
        setGendata(genres);
        setDisdata(results);
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);
  console.log(gendata);
  // const dataTitle =
  //   gendata &&
  //   gendata.filter((data) => console.log(data.id === numId ? data.name : ""));
  const dataTitle =
    gendata && gendata.filter((data) => (data.id === numId ? data.name : ""));

  return (
    <Wrap>
      <Helmet>
        <title>장르</title>
      </Helmet>
      <h1>장르 : {dataTitle && dataTitle[0].name}</h1>
      <Section>
        {disdata &&
          disdata.map((data) => (
            <Link to={`/detail/${data.id}`} key={data.id}>
              <BgImg key={data.id}>
                {data?.poster_path ? (
                  <img
                    src={`${imgURL.imgSize300}${data?.poster_path}`}
                    alt={data?.title}
                  />
                ) : (
                  <img
                    src={`https://asean.org/wp-content/uploads/2022/07/No-Image-Placeholder.svg.png`}
                    alt={data?.title}
                  />
                )}
              </BgImg>
            </Link>
          ))}
      </Section>
    </Wrap>
  );
};
