import React from "react";
import ReactDOM from "react-dom";
import "./css/index";
import App from "./app/layout/App";
import { BrowserRouter } from "react-router-dom";

const rootEl = document.getElementById("root");

function render() {
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    rootEl
  );
}

if (module.hot) {
  module.hot.accept("./app/layout/App", function () {
    setTimeout(render);
  });
}

render();
