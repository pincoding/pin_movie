import styled from "styled-components";

import { useState } from "react";
import { searchMoive } from "../../api";
import { useForm } from "react-hook-form";
import { imgURL } from "../../imgurl";
import { Loadings } from "../../components/Loading";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Wrap = styled.div`
  padding: 0px 100px 0px 100px;
  p {
    color: #1f77ff;
  }
  h1 {
    font-size: 30px;
    margin-top: 150px;
  }
  @media screen and (max-width: 1024px) {
    padding: 100px 50px 0px 50px;
    h1 {
      font-size: 26px;
      margin-top: 100px;
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
const SearchHeader = styled.form`
  padding: 150px 0px 10px 0px;
  position: relative;
  input {
    all: unset;
    width: 100%;
    border-bottom: 1px solid #666;
    padding: 5px 5px;
  }
  @media screen and (max-width: 1024px) {
    padding: 60px 0px 10px 0px;
  }
  @media screen and (max-width: 768px) {
    input {
      padding: 0px 0px;
    }
  }
  @media screen and (max-width: 480px) {
    padding: 0px 30px 0px 10px;
    input {
      padding: 0px 5px;
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

export const Search = () => {
  const [resData, setResData] = useState();
  const [keyword, setKeyWord] = useState();
  const [Loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onsubmit" });

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const { searchMode: keyword } = data;
      const { results } = await searchMoive(keyword);
      setResData(results);
      setKeyWord(keyword);
      setLoading(false);
    } catch (error) {
      console.log(error?.searchMode);
    }
  };

  console.log(keyword + `keyword`);
  console.log(errors?.searchMode?.message);
  return (
    <Wrap>
      <Helmet>
        <title>검색</title>
      </Helmet>
      <SearchHeader onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("searchMode", {
            required: "검색할 내용을 입력해주세요.",
          })}
          type="text"
          placeholder="내용을 입력해주세요."
        ></input>
      </SearchHeader>
      <p>{errors?.searchMode?.message}</p>
      <h1>{resData ? <>검색내용 : {keyword}</> : ""}</h1>

      <Section>
        {Loading ? (
          <Loadings />
        ) : (
          <>
            {resData &&
              resData.map((data) => (
                <Link to={`/detail/${data.id}`}>
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
          </>
        )}
      </Section>
    </Wrap>
  );
};
