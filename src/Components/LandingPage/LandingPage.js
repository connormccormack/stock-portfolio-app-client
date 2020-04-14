import React, { Component } from "react";
import { Link } from "react-router-dom";
// import TopNav from '../TopNav/TopNav'

export default class LandingPage extends Component {
  render() {
    return (
      <section>
        <h1>Welcome to Asset Trend</h1>
        <h3>
          See what stocks and cryptocurrencies your friends are investing in, and create and share your own portfolio!
        </h3>
        <p>
          Here are some exciting words and example portfolios
        </p>
        <Link to={`/register`} className="link-to-registration">
          Register Now
        </Link>
        <p>For Returning Users:</p>
        <Link to={`/login`} className="link-to-login">
          Login
        </Link>
      </section>
    );
  }
}