import React, { Component } from "react";
import { Link, Redirect } from 'react-router-dom';
import TokenService from '../../services/TokenService';

export default class Portfolios extends Component {

  // component did mount
    // do fetch call, set state



  // Include a div that suggests how to get started IF there are no items in the list
  render() {

    return (
      <div>
        <h2>My Portfolio</h2>
        <ul>
          <li><span>Asset name, </span><span>Asset Class </span>{TokenService.hasAuthToken() && <button type="button">Delete</button>}</li>
          <li><span>Asset name, </span><span>Asset Class </span>{TokenService.hasAuthToken() && <button type="button">Delete</button>}</li>
          <li><span>Asset name, </span><span>Asset Class </span>{TokenService.hasAuthToken() && <button type="button">Delete</button>}</li>
        </ul>
        {TokenService.hasAuthToken() &&
        <button type="button"><Link to={"/add-item"} className="link-to-add-item">Add New Asset</Link></button>}
      </div>
    );
  }

}