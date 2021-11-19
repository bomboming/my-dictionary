import React, { useState } from "react";
import styled from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from "./redux/modules/dictionary";

const Detail = (props) => {
  const history = useHistory();
  //   const dispatch = useDispatch();
  const dictionary = useSelector((state) => state.dictionary.list); //업데이트 된 것을 받아온다.
  console.log("상세", dictionary);
  // url 파라미터에서 인덱스 가져오기
  const params = useParams();
  const dictionary_index = params.id;

  //   const deleteWordList = () => {
  //     dispatch(
  //       actionCreators.deleteDictionaryFB(dictionary[dictionary_index].id)
  //     );
  //     history.push("/");
  //   };

  return (
    <Container>
      <h1>상세페이지</h1>
      <hr />
      <Content>
        <h6>단어</h6>
        <p>{dictionary[dictionary_index].word}</p>
        <h6>설명</h6>
        <p>{dictionary[dictionary_index].explain}</p>
        <h6>예시</h6>
        <p>{dictionary[dictionary_index].example}</p>
        {/* <button onClick={updateWordList}>수정하기</button> */}
        {/* <button onClick={deleteWordList}>삭제하기</button> */}
        <button
          onClick={() => {
            history.goBack();
          }}
        >
          뒤로가기
        </button>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  background-color: #fff;
  width: 50rem;
  margin: auto;
  height: 66rem;
  padding: 1.6rem;
  border: 1px solid #ddd;
  border-radius: 1.5rem;

  h1 {
    color: #1f1d28;
    text-align: center;

    &:hover {
      color: #64c67e;
    }
  }

  hr {
    margin: 1.6rem 0px;
  }
`;

const Content = styled.div`
  border-radius: 0.5rem;
  padding: 1.5rem;
  margin: 1rem;
  background-color: #fbc645;

  h6 {
    margin: auto;
    margin-bottom: 0.5rem;
    font-size: 2rem;
  }

  p {
    margin: auto;
    font-size: 2rem;
    margin-bottom: 1rem;
    width: 100%;
    padding: 1rem 0;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    padding: 1.5rem;
    margin: auto;
    background-color: #64c67e;
    border: none;
    cursor: pointer;
    font-size: 2rem;
    width: 100%;
    font-weight: 800;
  }
`;

export default Detail;
