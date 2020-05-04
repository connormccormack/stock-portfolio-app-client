
import React from "react";
import ReactDOM from "react-dom";
import RegistrationPage from "./RegistrationPage";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const form = document.createElement("form");
  ReactDOM.render(
    <BrowserRouter>
      <RegistrationPage />
    </BrowserRouter>,
    form
  );

  ReactDOM.unmountComponentAtNode(form);
});