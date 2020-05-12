import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import TokenService from '../../services/TokenService';
import PortfoliosService from '../../services/PortfoliosService';
import './Portfolios.css';

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

  componentDidMount() {
    this.updateAssetList()
  }

  handleDelete(assetId) {
    // eslint-disable-next-line no-restricted-globals
    const deleteConfirmed = confirm('Delete Asset?')
    if (deleteConfirmed) {
      PortfoliosService.deleteAsset(assetId)
      .then(() => 
        this.updateAssetList()
      )
    }
  }

  updateAssetList() {
    return PortfoliosService.getAssetList(this.props.match.params.user_id)
    .then((assetList) => {
      this.setState( { assetList } )
    })
    .catch((err) => {this.setState({ error: err })})
  }

  handleShare() {
    let shareUrl = window.location.href;
    const el = document.createElement('textarea');
    el.value = shareUrl;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }

  render() { 
    // console.log(TokenService.readJwtToken())
    const { user_id } = TokenService.readJwtToken()
    const isCurrentUser = (TokenService.hasAuthToken() && (Number(this.props.match.params.user_id) === user_id))
    const { assetList } = this.state

    // if logged in but viewing someone else's portfolio page, remove delete and add buttons
    return (
      <div className="portfolio-container">
        {isCurrentUser ? <h2>My Portfolio</h2> : <h2> User{this.props.match.params.user_id}'s Portfolio</h2>}
        {isCurrentUser && <Link className="shareable" onClick={() => this.handleShare()}>Click Here to Copy Shareable URL!</Link>}
        <ul className="asset-list">
          {assetList.map(asset =>
            <li className="portfolio-item">
              <span className="asset-name">{asset.asset_name}</span>
              <div className="sub-item">
                <span>{asset.asset_class}</span>
                <span>{isCurrentUser && <button type="button" className="delete-button" onClick={() => this.handleDelete(asset.id)}>Delete</button>}</span>
              </div>
            </li>
          )}
        </ul>
        {isCurrentUser &&
        <Link to={"/add-item"} className="link-to-add-item">Add New Asset</Link>}
      </div>
    );
  }

}