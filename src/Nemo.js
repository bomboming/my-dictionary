import React, { useState } from "react";
import styled from "styled-components";

const Nemo = (props) => {
  const [box_num, setBox_num] = useState(3);
  const nemo_count = Array.from({ length: box_num }, (v, i) => i);

  const add = () => {
    setBox_num(box_num + 1);
  };

  const del = () => {
    setBox_num(box_num > 0 ? box_num - 1 : 0);
  };

  return (
    <Container>
      {nemo_count.map((item, idx) => {
        return <Box></Box>;
      })}

      <Btn onClick={add}>추가</Btn>
      <Btn onClick={del}>빼기</Btn>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  margin: 10px;
  background-color: coral;
`;

const Btn = styled.button`
  padding: 2px;
  margin: 5px;
`;

export default Nemo;
