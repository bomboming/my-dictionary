import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom"; //BrowserRouter 적용

ReactDOM.render(
  <React.StrictMode>
    {/* 페이지 전환을 위한 라우팅 처리 */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
