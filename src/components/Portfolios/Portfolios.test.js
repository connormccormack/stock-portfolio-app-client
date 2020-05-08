
import React from "react";
import ReactDOM from "react-dom";
import Portfolios from "./Portfolios";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

const mockProps = {
  params: {user_id: 31}
}

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <Portfolios match={mockProps}/>
    </BrowserRouter>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});