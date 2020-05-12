import React, { Component } from "react";
import { Link } from 'react-router-dom';
import TokenService from '../../services/TokenService';
import './TopNav.css';

export default class TopNav extends Component {

  handleLogout = () => {
    TokenService.clearAuthToken()
    this.props.history.push('/')
  }

  handleTitleClick = () => {
    const { user_id } = TokenService.readJwtToken();
    if (TokenService.hasAuthToken()) {
      this.props.history.push(`/portfolios/${user_id}`)
    } else {
      this.props.history.push('/')
    }
  }

  render() {
    return (
    <nav>
      <h3 className="navTitle" onClick={() => this.handleTitleClick()}>Asset Trend</h3>
      <div>
      {TokenService.hasAuthToken() ? 
        <button type="button" className="logout-button" onClick={this.handleLogout}>
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