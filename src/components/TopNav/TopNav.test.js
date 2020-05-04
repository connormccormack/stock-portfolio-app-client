
import React from "react";
import ReactDOM from "react-dom";
import TopNav from "./TopNav";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const nav = document.createElement("nav");
  ReactDOM.render(
    <BrowserRouter>
      <TopNav />
    </BrowserRouter>,
    nav
  );

  ReactDOM.unmountComponentAtNode(nav);
});