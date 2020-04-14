import React, { Component } from "react";
// import { Button, Input, Required } from "../Utils/Utils";

export default class RegistrationPage extends Component {


  render() {
    return (
      <form className="RegistrationForm" >
        <div className="username">
          <label htmlFor="RegistrationForm__user_name">
            Username
          </label>
          <input
            name="username"
            type="text"
            required
            id="RegistrationForm__username"
          ></input>
        </div>
        <div className="password">
          <label htmlFor="RegistrationForm__password">
            Password
          </label>
          <input
            name="password"
            type="password"
            required
            id="RegistrationForm__password"
          ></input>
        </div>
        <button type="submit">Register</button>
      </form>
    );
  }
}