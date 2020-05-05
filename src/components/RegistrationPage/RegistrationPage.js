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

  state = { 
    error: null,
    passwordValidation: { 
      hasUpperCase: false,
      hasLowerCase: false,
      hasNumber: false,
      hasMinimumChars: false,
      hasSpecialChar: false
    }
  }

  onRegistrationSuccess = () => {
    const { history } = this.props
    history.push('/login')
  }

  onChange = ev => {
    ev.preventDefault()
    const { value: password } = ev.target
    const passwordValidation = {
      hasUpperCase: /[A-Z]/.test(password),
      hasLowerCase: /[a-z]/.test(password),
      hasNumber: /\d/.test(password),
      hasMinimumChars: password.length > 7,
      hasSpecialChar: /\W/.test(password)
    }
    this.setState({ error: null, passwordValidation })
  }

  passwordValid = () => {
    const { passwordValidation } = this.state
    return !Object.values(passwordValidation).includes(false)
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
    const { error, passwordValidation: { hasMinimumChars, hasUpperCase, hasLowerCase, hasSpecialChar, hasNumber } } = this.state
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
            onChange={this.onChange}
          ></input>
          <ul>
            {this.passwordValid() && <li>Password looks good!</li>}
            {!hasMinimumChars && <li>Must be at least 8 characters</li>}
            {!hasUpperCase && <li>Must contain an upper case letter</li>}
            {!hasLowerCase && <li>Must contain a lower case letter</li>}
            {!hasSpecialChar && <li>Must include a special character</li>}
            {!hasNumber && <li>Must contain a number</li>}
          </ul>
        </div>
        <button type="submit" className="register-button">{/*<Link to={"/my-portfolio"} className="to-my-portfolio">Register</Link>*/}Register</button>
      </form>
    );
  }
}