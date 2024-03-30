import styled from "styled-components";

import { useState } from "react";
import { searchMoive } from "../../api";
import { useForm } from "react-hook-form";
import { imgURL } from "../../imgurl";
import { Loadings } from "../../components/Loading";

const Wrap = styled.div`
  padding: 150px;
  p {
    color: #1f77ff;
  }
  h1 {
    font-size: 30px;
    margin-top: 180px;
  }
`;
const SearchHeader = styled.form`
  padding: 150px;
  position: relative;
  input {
    all: unset;
    width: 100%;
    border-bottom: 1px solid #666;
    padding: 5px 5px;
  }
`;

const Section = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 20px;
  column-gap: 20px;
`;
const BgImg = styled.div`
  height: 400px;

  img {
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
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
  // console.log(resData);
  console.log(keyword + `keyword`);
  console.log(errors?.searchMode?.message);
  return (
    <Wrap>
      <SearchHeader onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("searchMode", {
            required: "검색할 내용을 입력해주세요.",
          })}
          type="text"
          placeholder="내용을 입력해주세요."
        ></input>
      </SearchHeader>
      {/* <p>{errors?.searchMode?.message}</p>
      <h1>검색내용 : {keyword}</h1> */}

      <Section>
        {Loading ? (
          <Loadings />
        ) : (
          <>
            {resData &&
              resData.map((data) => (
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
              ))}
          </>
        )}
      </Section>
    </Wrap>
  );
};
//npm i react-hook-form 설치완료

// const a = [1,2,3,4];
// const b = [5,6,7,8];

// a.concat(b);
