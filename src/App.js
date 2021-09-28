import React from "react";
import styled from "styled-components"; //styled-components 설치필요

// 페이지 전환을 위한 라우팅, 스위치 처리
import { Route, Switch } from "react-router-dom";
import MyDictionary from "./MyDictionary";
import AddWord from "./AddWord";
import ModifyWord from "./ModifyWord";
import NotFound from "./NotFound";

function App() {
  return (
    <AppWrap>
      <Switch>
      <Route path="/" exact>
        <MyDictionary />
      </Route>
      <Route path="/addword">
        <AddWord />
      </Route>
      <Route path="/modifyword">
        <ModifyWord />
      </Route>
      <Route>
        <NotFound />
      </Route>
      </Switch>
    </AppWrap>
  );
}

const AppWrap = styled.div`
  background-color: #BCBAFF;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

export default App;
