import React, { Component } from "react";
import { Link } from 'react-router-dom';
import AuthApiService from '../../services/AuthApiService';
// import { Button, Input, Required } from "../Utils/Utils";
import './RegistrationPage.css';

export default class RegistrationPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  state = { error: null }

  onRegistrationSuccess = () => {
    const { history } = this.props
    history.push('/login')
  }

  handleSubmit = ev => {
    ev.preventDefault()
    const { user_name, password } = ev.target

    this.setState({ error: null })
    AuthApiService.postUser({
      user_name: user_name.value,
      password: password.value,
    })
      .then(user => {
        user_name.value = ''
        password.value = ''
        this.onRegistrationSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  render() {
    const { error } = this.state
    return (
      <form className="RegistrationForm" onSubmit={this.handleSubmit}>
        <div className="username">
          <label htmlFor="RegistrationForm__user_name">
            Username:
          </label>
          <input
            name="user_name"
            type="text"
            required
            id="RegistrationForm__user_name"
          ></input>
        </div>
        <div className="password">
          <label htmlFor="RegistrationForm__password">
            Password:
          </label>
          <input
            name="password"
            type="password"
            required
            id="RegistrationForm__password"
          ></input>
        </div>
        <button type="submit">{/*<Link to={"/my-portfolio"} className="to-my-portfolio">Register</Link>*/}Register</button>
      </form>
    );
  }
}