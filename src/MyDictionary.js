import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { actionCreators } from "./redux/modules/dictionary";
import Card from "./Card";

const MyDictionary = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const data = useSelector((state) => state.dictionary.list);

  useEffect(() => {
    dispatch(actionCreators.loadDictionaryFB());
  }, []);

  return (
    <Container>
      <h1>MY DICTIONARY</h1>
      <hr />
      <Content>
        {data.map((item, idx) => {
          return <Card {...item} index={idx} key={idx} data={data} />;
        })}
      </Content>
      <AddBtn
        onClick={() => {
          history.push("/addword");
        }}
      >
        <i class="fas fa-plus "></i>
      </AddBtn>
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

  hr {
    margin: 1.6rem 0px;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 86%;

  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const AddBtn = styled.button`
  border-radius: 50%;
  width: 10rem;
  height: 10rem;
  background-color: #64c67e;
  border: none;
  cursor: pointer;
  position: fixed;
  position: absolute;
  bottom: 1rem;
  right: 1rem;

  i {
    font-size: 3.5em;
  }
`;

export default MyDictionary;
