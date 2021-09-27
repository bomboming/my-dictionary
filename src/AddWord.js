import React from "react";
import styled from "styled-components";

const AddWord = (props) => {
  return (
    <AddWordContainer>
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <button>추가하기</button>
    </AddWordContainer>
  );
};

const AddWordContainer = styled.div`
  background-color: #fff;
  width: 50vw;
  max-width: 350px;
  margin: auto;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export default AddWord;
