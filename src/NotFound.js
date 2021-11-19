import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom"; //useHistory Hook을 사용한 페이지 전환

const NotFound = (props) => {
  const history = useHistory();
  return (
    <Container>
      <h2>주소가 올바르지 않습니다!</h2>
      <button
        onClick={() => {
          history.goBack();
        }}
      >
        <i class="fas fa-arrow-left"></i>뒤로가기
      </button>
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
  position: relative;

  h1 {
    color: #1f1d28;
    text-align: center;

    &:hover {
      color: #64c67e;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    padding: 15px;
    background-color: #64c67e;
    border: none;
    cursor: pointer;
    font-size: 1.5em;
    width: 20vw;
    font-weight: 800;
  }
`;

export default NotFound;
