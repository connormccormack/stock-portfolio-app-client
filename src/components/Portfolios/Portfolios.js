import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
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
      .then((assetList) => {this.setState({ assetList })})
      .catch((err) => {this.setState({ error: err })})
  }

  handleDelete(assetId) {
    console.log('delete clicked')

  }
   // /portfolio/1234
   // if (currentlyLoggedInUserId === portfolioUserId) {
   // this.props.match.params.user_id

  // Include a div that suggests how to get started IF there are no items in the list
  render() { 
    console.log(this.props.match.params.user_id)
    console.log(this.state.assetList)
    const { user_id } = TokenService.readJwtToken()
    const isCurrentUser = (TokenService.hasAuthToken() && (this.props.match.params.user_id == user_id))
    const { assetList } = this.state
    // if logged in but viewing someone else's portfolio page, remove delete and add buttons
    return (
      <div>
        {isCurrentUser ? <h2>My Portfolio</h2> : <h2>User {this.props.match.params.user_id}'s Portfolio</h2>}
        <ul>
          {assetList.map(asset =>
            <li className="portfolio-item">
              <span>{asset.asset_name}</span>
              <span>{asset.asset_class}</span>
              {isCurrentUser && <button type="button" onClick={() => this.handleDelete(asset.id)}>Delete</button>}
            </li>
          )}
        </ul>
        {isCurrentUser &&
        <Link to={"/add-item"} className="link-to-add-item">Add New Asset</Link>}
      </div>
    );
  }

}