
import React from "react";
import ReactDOM from "react-dom";
import Portfolios from "./Portfolios";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <Portfolios />
    </BrowserRouter>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});