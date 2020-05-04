
import React from "react";
import ReactDOM from "react-dom";
import LoginPage from "./LoginPage";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const section = document.createElement("section");
  ReactDOM.render(
    <BrowserRouter>
      <LoginPage />
    </BrowserRouter>,
    section
  );

  ReactDOM.unmountComponentAtNode(section);
});