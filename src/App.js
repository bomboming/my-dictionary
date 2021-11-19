import React from "react";
import styled from "styled-components"; //styled-components는 패키지 설치가 필요하다.

// 페이지 전환을 위한 라우팅, 스위치 처리
import { Route, Switch } from "react-router-dom";
import MyDictionary from "./MyDictionary";
import AddWord from "./AddWord";
import NotFound from "./NotFound";
import Detail from "./Detail";

import { db } from "./firebase";
import { collection, getDoc, getDocs, addDoc } from "firebase/firestore";

function App(props) {
  React.useEffect(async () => {
    const query = await getDocs(collection(db, "dictionary"));
    query.forEach((doc) => {
      console.log("이거확인", doc.id, doc.data());
    });
  }, []);

  return (
    <AppWrap>
      <Switch>
        <Route exact path="/" exact>
          <MyDictionary />
        </Route>
        <Route exact path="/addword">
          <AddWord />
        </Route>
        <Route exact path="/detail/:id">
          <Detail />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
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
