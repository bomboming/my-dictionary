import React from "react";
import styled from "styled-components";

import MyDictionary from "./MyDictionary";

function App() {
  return (
    <AppWrap>
      <MyDictionary />
    </AppWrap>
  );
}

const AppWrap = styled.div`
  background-color: #bcbaff;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

export default App;
