import React, { Component } from "react";
import { Link } from "react-router-dom";
// import TopNav from '../TopNav/TopNav'

export default class LoginPage extends Component {
  render() {
    return (
      <div>
        <form className="LoginForm" >
          <div className="username">
            <label htmlFor="LoginForm__username">
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
          <button type="submit"><Link to={"/my-portfolio"} className="to-my-portfolio">Login</Link></button>
        </form>
      </div>
    );
  }
}