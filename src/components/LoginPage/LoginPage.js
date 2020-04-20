import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthApiService from '../../services/AuthApiService';
// import TopNav from '../TopNav/TopNav'

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
    const destination = (location.state || {}).from || '/my-portfolio'
    history.push(destination)
  }

  render() {
    return (
      <div>
        <form className="LoginForm" onSubmit={this.handleSubmitJwtAuth}>
          <div className="user_name">
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
          <button type="submit">{/*<Link to={"/my-portfolio"} className="to-my-portfolio">Login</Link>*/}Login</button>
        </form>
      </div>
    );
  }
}