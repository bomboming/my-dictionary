import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom"; //BrowserRouter 적용
import { Provider } from "react-redux";
import store from "./redux/configStore";

ReactDOM.render(
  // store와 component 연결
  <Provider store={store}>
    {/* 페이지 전환을 위한 라우팅 처리 */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
