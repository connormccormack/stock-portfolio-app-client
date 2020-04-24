import React, { Component } from "react";
import { Link } from 'react-router-dom';
import TokenService from '../../services/TokenService';
import './TopNav.css';

export default class TopNav extends Component {

  handleLogout = () => {
    TokenService.clearAuthToken()
    this.props.history.push('/')
  }

  render() {
    console.log(this.props)
    return (
    <nav>
      <h3>Asset Trend</h3>
      <div>
      {TokenService.hasAuthToken() ? 
        <button type="button" onClick={this.handleLogout}>
          Logout
        </button> 
        : 
        <span>
            <Link to={`/register`} className="link-to-registration">
              Register
            </Link>
            <Link to={`/login`} className="link-to-login">
              Login
            </Link>
        </span>}
      </div>
    </nav>
    );
  }
}