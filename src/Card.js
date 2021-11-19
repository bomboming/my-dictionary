import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

const Card = (props) => {
  const history = useHistory();
  const dictionary = useSelector((state) => state.dictionary.list);
  const index = props.index;

  //   const [color, setColor] = useState(false);

  //   const success = () => {
  //     setColor(!color);
  //   };

  return (
    <Container
      onClick={() => {
        history.push(`/detail/${index}`);
      }}
    >
      <h6>단어</h6>
      <p style={{ fontWeight: "800" }}>{dictionary[index].word}</p>
      <h6>설명</h6>
      <p>{dictionary[index].explain}</p>
      <h6>예시</h6>
      <p style={{ color: "#4469FD" }}>{dictionary[index].example}</p>
      {/* <button onClick={success}>완료하기</button> */}
    </Container>
  );
};

const Container = styled.div`
  height: 16rem;
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 1rem;
  background-color: #fbc645;

  h6 {
    margin: auto;
    text-decoration: #64c67e wavy underline;
    font-size: 1.5rem;
  }

  p {
    margin: 5px;
    font-size: 2rem;
  }
`;

export default Card;
