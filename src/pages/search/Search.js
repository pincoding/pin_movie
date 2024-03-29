import styled from "styled-components";

import { useState } from "react";
import { searchMoive } from "../../api";
import { useForm } from "react-hook-form";
import { imgURL } from "../../imgurl";

const Wrap = styled.div`
  padding: 150px;
`;
const SearchHeader = styled.form`
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onsubmit" });

  const onSubmit = async (data) => {
    try {
      const { searchMode: keyword } = data;
      const { results } = await searchMoive(keyword);
      setResData(results);
      setKeyWord(keyword);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(resData);
  console.log(keyword + `keyword`);

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

          
      <Section>
        {resData &&
          resData.map((data) => (
            <BgImg key={data.id}>
              <img
                src={`${imgURL.imgSize300}${data?.poster_path}`}
                alt={data?.title}
              />
            </BgImg>
          ))}
      </Section>
    </Wrap>
  );
};
//npm i react-hook-form 설치완료

// const a = [1,2,3,4];
// const b = [5,6,7,8];

// a.concat(b);
