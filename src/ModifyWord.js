import React from "react";
import styled from "styled-components";

const ModifyWord = (props) => {
  return (
    <ModifyWordContainer>
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <button>수정하기</button>
    </ModifyWordContainer>
  );
};

const ModifyWordContainer = styled.div`
  background-color: #fff;
  width: 50vw;
  max-width: 350px;
  margin: auto;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export default ModifyWord;
