import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class TopNav extends Component {
  render() {
    return (
    <nav>
      <h3>Asset Trend</h3>
      <div>
        <button type="button">
          <Link to={`/register`} className="link-to-registration">
            Register
          </Link>
        </button>
        <button type="button">
          <Link to={`/login`} className="link-to-login">
            Login
          </Link>
        </button>
      </div>
    </nav>
    );
  }
}