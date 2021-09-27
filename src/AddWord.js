import React from "react";
import styled from "styled-components";

const AddWord = (props) => {
  return (
<Container>
      <h1>단어 추가하기</h1>
      <hr />
      <div>
        <h6>단어</h6>
        <input type="text" />
        <h6>설명</h6>
        <input type="text" />
        <h6>예시</h6>
        <input type="text" />
      </div>
      <button>
        추가하기
      </button>
    </Container>
  );
};

const Container = styled.div`
  background-color: #fff;
  width: 50vw;
  max-width: 350px;
  margin: auto;
  height: 80vh;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 15px;

  h1 {
    color: #1F1D28;
    text-align: center;

    &:hover{
        color:#64C67E;
    }
    }
  }

  hr {
    margin: 16px 0px;
  }

  div{
    border-radius: 5px;
    padding: 15px;
    margin: 8px;
    background-color: #FBC645;
    
    h6{
      margin:auto;
      margin-bottom:5px;
      font-size:1.5em;
    }

    input{
      margin:auto;
      font-size:1.5em;
      margin-bottom:10px;
    }

  }

  button{
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    padding: 15px;
    margin: auto;
    background-color: #64C67E;
    border:none;
    cursor:pointer;
    font-size:1.5em;
    width: 20vw;
    font-weight: 800;
  }
`;

export default AddWord;
