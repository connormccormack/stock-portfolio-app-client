import React, { Component } from "react";
import { Link } from "react-router-dom";
// import TopNav from '../TopNav/TopNav'
import './LandingPage.css';

export default class LandingPage extends Component {
  render() {
    return (
      <section>
        <h3>
          Create and share your own portfolio
        </h3>
        <h3>
          See your friends' investments
        </h3>
        <h3>
          Discover new cryptocurrencies, alternative investments, and more!
        </h3>
        <p>
          Try it out yourself, or login with Demo User. 
          <br></br>
          Login: Demo 
          <br></br>
          Password: ASDFasdf12!@
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