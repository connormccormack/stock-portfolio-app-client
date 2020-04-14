import React, { Component } from "react";
import { Link } from "react-router-dom";
// import TopNav from '../TopNav/TopNav'

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <form className="LoginForm" >
          <div className="username">
            <label htmlFor="LoginForm__user_name">
              Username
            </label>
            <input
              name="username"
              type="text"
              required
              id="LoginForm__username"
            ></input>
          </div>
          <div className="password">
            <label htmlFor="LoginForm__password">
              Password
            </label>
            <input
              name="password"
              type="password"
              required
              id="LoginForm__password"
            ></input>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}