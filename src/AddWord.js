import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom"; //useHistory Hook 사용
import { useDispatch } from "react-redux";
import { actionCreators } from "./redux/modules/dictionary"; //액션생성함수 불러오기

const AddWord = (props) => {
  const dispatch = useDispatch();
  const history = useHistory(); //useHistory Hook 사용

  // input에 있는 값들을 가지고오겠다. 초기값을 null로하겠다.
  const [word, setWord] = useState(null);
  const [explain, setExplain] = useState(null);
  const [example, setExample] = useState(null);

  const addWordList = () => {
    const wordCard = {
      word: word,
      explain: explain,
      example: example,
    };
    dispatch(actionCreators.addDictionaryFB(wordCard));
    history.push("/");
  };

  return (
    <Container>
      <h1>단어 추가하기</h1>
      <hr />
      <Content>
        <h6>단어</h6>
        <input
          type="text"
          placeholder="단어를 입력하세요."
          onChange={(e) => {
            setWord(e.target.value);
          }}
        />
        <h6>설명</h6>
        <input
          type="text"
          placeholder="설명을 입력하세요."
          onChange={(e) => {
            setExplain(e.target.value);
          }}
        />
        <h6>예시</h6>
        <input
          type="text"
          placeholder="예시를 입력하세요."
          onChange={(e) => {
            setExample(e.target.value);
          }}
        />
        <button onClick={addWordList}>추가하기</button>
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

  input {
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

export default AddWord;
