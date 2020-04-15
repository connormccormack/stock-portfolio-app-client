import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class AddItem extends Component {
  render() {
    return (
      <div className="add-item-form">
        <form>
          <div className="asset-name">
            <label htmlFor="asset-name">
              Asset Name
            </label>
            <input
              name="asset-name"
              type="text"
              required
              id="asset-name"
            ></input>
          </div>
          <div className="asset-class">
            <label htmlFor="asset-class">
              Asset Class
            </label>
            <input
              name="asset-class"
              type="text"
              required
              id="asset-class"
            ></input>
          </div>
          <button type="submit"><Link to={"/my-portfolio"} className="link-to-my-portfolio">Add New Asset</Link></button>
        </form>
      </div>
    );
  }
}