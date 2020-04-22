import React, { Component } from "react";
import { Link } from 'react-router-dom';
import TokenService from '../../services/TokenService';
import PortfoliosService from '../../services/PortfoliosService';

export default class Portfolios extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  state = { 
    error: null,
    assetList: [] 
  };
  // component did mount
    // do fetch call, set state

  componentDidMount() {
    console.log('component mounted')
    PortfoliosService.getAssetList(this.props.match.params.user_id)
      .then((assetList) => {this.setState(assetList)})
      .catch((err) => {this.setState({ error: err })})
  }

   // /portfolio/1234
   // if (currentlyLoggedInUserId === portfolioUserId) {
   // this.props.match.params.user_id

  // Include a div that suggests how to get started IF there are no items in the list
  render() { 
    console.log(this.props.match.params.user_id)
    const { user_id } = TokenService.readJwtToken()
    const isCurrentUser = (TokenService.hasAuthToken() && (this.props.match.params.user_id == user_id))
    // if logged in but viewing someone else's portfolio page, remove delete and add buttons
    return (
      <div>
        {isCurrentUser ? <h2>My Portfolio</h2> : <h2>Username's Portfolio</h2>}
        <ul>
          <li><span>Asset name, </span><span>Asset Class </span>{isCurrentUser && <button type="button">Delete</button>}</li>
          <li><span>Asset name, </span><span>Asset Class </span>{isCurrentUser && <button type="button">Delete</button>}</li>
          <li><span>Asset name, </span><span>Asset Class </span>{isCurrentUser && <button type="button">Delete</button>}</li>
        </ul>
        {isCurrentUser &&
        <button type="button"><Link to={"/add-item"} className="link-to-add-item">Add New Asset</Link></button>}
      </div>
    );
  }

}