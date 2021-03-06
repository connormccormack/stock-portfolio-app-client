import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthApiService from '../../services/AuthApiService';
import TokenService from '../../services/TokenService';
// import TopNav from '../TopNav/TopNav'
import './LoginPage.css';

export default class LoginPage extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  }

  state = { error: null }

  handleSubmitJwtAuth = ev => {
    ev.preventDefault()
    this.setState({ error: null })
    const { user_name, password } = ev.target

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value,
    })
      .then(res => {
        user_name.value = ''
        password.value = ''
        this.handleLoginSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const { user_id } = TokenService.readJwtToken()
    const destination = '/portfolios/' + user_id;
    history.push(destination)

  }

  render() {
    return (
      <section className="login-screen">
        <p>
          Try it out with the Demo User: 
          <br></br>
          Login: Demo 
          <br></br>
          Password: ASDFasdf12!@
        </p>
        <div className="login-form-container">
          <form className="LoginForm" onSubmit={this.handleSubmitJwtAuth}>
            <div className="user_name-container">
              <label htmlFor="LoginForm__username">
                Username
              </label>
              <input
                name="user_name"
                type="text"
                required
                id="LoginForm__user_name"
              ></input>
            </div>
            <div className="password-container">
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
            <button type="submit" className="login-button">Login</button>
          </form>
        </div>
      </section>
    );
  }
}