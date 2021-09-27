import React from "react";
import styled from "styled-components";

const MyDictionary = (props) => {
  return (
    <Container>
      <h1>MY DICTIONARY</h1>
      <hr />
      <div>
        <h6>단어</h6>
        <p style={{ fontWeight: "800" }}>단어입니다.</p>
        <h6>설명</h6>
        <p>설명입니다.</p>
        <h6>예시</h6>
        <p style={{ color: "#4469FD" }}>예시입니다.</p>
      </div>
      <button>
        <i class="fas fa-plus "></i>
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
  position:relative;

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
    padding: 5px;
    margin: 8px;
    background-color: #FBC645;
    
    h6{
        margin:auto;
        text-decoration: #64C67E wavy underline;
    }

    p{
        margin:5px;
    }

  }

  button{
    border-radius: 50%;
    width: 6vw;
    height: 12vh;
    background-color: #64C67E;
    border:none;
    cursor:pointer;
    position: absolute;
    right:24px;
    bottom:24px;

    i{
        font-size:3.5em;
    }
  }
`;

export default MyDictionary;