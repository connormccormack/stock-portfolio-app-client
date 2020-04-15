import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class MyPortfolio extends Component {

  // Include a div that suggests how to get started IF there are no items in the list
  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
        <ul>
          <li><span>Asset name, </span><span>Asset Class </span><span><button type="button">Delete</button></span></li>
          <li><span>Asset name, </span><span>Asset Class </span><span><button type="button">Delete</button></span></li>
          <li><span>Asset name, </span><span>Asset Class </span><span><button type="button">Delete</button></span></li>
          <li><span>Asset name, </span><span>Asset Class </span><span><button type="button">Delete</button></span></li>
        </ul>
        <button type="button"><Link to={"/add-item"} className="link-to-add-item">Add New Asset</Link></button>
      </div>
    );
  }
}