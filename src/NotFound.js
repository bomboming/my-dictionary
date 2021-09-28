import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";  //useHistory Hook을 사용한 페이지 전환

const NotFound = (props) =>{
    const history = useHistory();
    return(
        <Container>
            <h2>주소가 올바르지 않습니다!</h2>
            <button onClick={()=>{history.goBack()}}>
            <i class="fas fa-arrow-left"></i>뒤로가기
            </button>
        </Container>
    )
}


const Container = styled.div`
  background-color: #fff;
  width: 50vw;
  max-width: 350px;
  margin: auto;
  height: 80vh;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 15px;
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;

  h2 {
    color: #1F1D28;
    text-align: center;

    &:hover{
        color:red;
    }
    }
  }

  button{
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    padding: 15px;
    background-color: #64C67E;
    border:none;
    cursor:pointer;
    font-size:1.5em;
    width: 20vw;
    font-weight: 800;
  }
`;

export default NotFound;
