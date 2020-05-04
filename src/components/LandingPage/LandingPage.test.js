
import React from "react";
import ReactDOM from "react-dom";
import LandingPage from "./LandingPage";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const section = document.createElement("section");
  ReactDOM.render(
    <BrowserRouter>
      <LandingPage />
    </BrowserRouter>,
    section
  );

  ReactDOM.unmountComponentAtNode(section);
});