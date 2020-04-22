import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/TokenService';
import { useHistory } from "react-router-dom";
import PortfoliosService from '../../services/PortfoliosService';

export default class AddItem extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  

  handleSubmit = (ev) => {
    const { user_id } = TokenService.readJwtToken()
    const { assetName, assetClass } = ev.target;
    const payload = {
      assetClass: assetClass.val(),
      assetClass: assetClass.val()
    };
    PortfoliosService.postAsset(payload)
    .then((res) => {
      let history = useHistory();
      history.push(`/portfolios/${user_id}`);
    })
    .catch((res) => {
      this.setState({ error: res.error });
    });
  }

  render() {
    const { user_id } = TokenService.readJwtToken()
    
    // make onSubmit for form, and on submit push `/portfolio/${user_id}` to history

    // for handleSubmit - send token and form data to the post route

    return (
      <div className="add-item-form" >
        <form onSubmit={this.handleSubmit}>
          <div className="assetName">
            <label htmlFor="assetName">
              Asset Name
            </label>
            <input
              name="assetName"
              type="text"
              required
              id="assetName"
            ></input>
          </div>
          <div className="assetClass">
            <label htmlFor="assetClass">
              Asset Class
            </label>
            <input
              name="assetClass"
              type="text"
              required
              id="assetClass"
            ></input>
          </div>
          <button type="submit">Add New Asset</button>
        </form>
      </div>
    );
  }
}

// <Link to={`/portfolios/${user_id}`} className="link-to-my-portfolio">