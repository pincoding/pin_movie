import styled from "styled-components";

import { useEffect, useState } from "react";
import { searchMoive } from "../../api";
import { useForm } from "react-hook-form";

const Container = styled.div`
  padding-top: 80px;
  display: flex;
  justify-content: center;
`;
const SearchHeader = styled.form``;

export const Search = () => {
  const [resData, setResData] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onsubmit" });

  const onSubmit = async () => {
    try {
      // const { searchMode: keyword } = data;
      const { results } = await searchMoive();
      setResData(results);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(resData);

  return (
    <Container>
      <SearchHeader onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("searchMode", {
            required: "검색할 내용을 입력해주세요.",
          })}
          type="text"
          placeholder="검색해주세요."
        ></input>
      </SearchHeader>
    </Container>
  );
};
//npm i react-hook-form 설치완료
