import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/TokenService';
// import { useHistory } from "react-router-dom";
import PortfoliosService from '../../services/PortfoliosService';
import './AddItem.css';

export default class AddItem extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { user_id } = TokenService.readJwtToken()
    const { assetName, assetClass } = ev.target;
    const payload = {
      user_id: user_id,
      assetName: assetName.value,
      assetClass: assetClass.value
    };
    console.log('yolo')
    PortfoliosService.postAsset(payload)
    .then((res) => {
      this.props.history.push(`/portfolios/${user_id}`);
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
      <div className="add-item-screen" >
        <form onSubmit={this.handleSubmit} id="add-item-form">
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
            <select id="assetClass" form="add-item-form" name="assetClass" required>
              <option value="US Equity">US Equity</option>
              <option value="International Equity">International Equity</option>
              <option value="Cryptocurrency">Cryptocurrency</option>
              <option value="Fiat Currency">Fiat Currency</option>
              <option value="Bonds">Bonds</option>
              <option value="Real Estate">Real Estate</option>
              <option value="Alternative Investments">Alternative Investments</option>
              <option value="Precious Metals & Commodities">Precious Metals & Commodities</option>
            </select>
          </div>
          <button type="submit">Add New Asset</button>
        </form>
      </div>
    );
  }
}

// <Link to={`/portfolios/${user_id}`} className="link-to-my-portfolio">