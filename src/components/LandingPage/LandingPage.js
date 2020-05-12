import React, { Component } from "react";
import { Link } from "react-router-dom";
// import TopNav from '../TopNav/TopNav'
import './LandingPage.css';

export default class LandingPage extends Component {
  render() {
    return (
      <section>
        <h3>
          Create your own portfolio of cryptocurrencies, stocks, real estate, and more!
        </h3>
        <ul>
          <li>Share your portfolio via shareable link</li>
          <li>Only you can edit your own portfolio</li>
          <li>If your friends send you their portfolio links, you can see their asset selections and discover new stocks and investments</li>
        </ul>
        <Link to={`/register`} className="link-to-registration-main">
          Register Now
        </Link>
        <p>
          Try it out yourself, or login with the Demo User: 
          <br></br>
          Login: Demo 
          <br></br>
          Password: ASDFasdf12!@
        </p>
        <Link to={`/login`} className="link-to-login-main">
          Login
        </Link>
      </section>
    );
  }
}