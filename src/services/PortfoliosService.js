import TokenService from './TokenService';
import config from '../config';

const PortfoliosService = {
  getAssetList(user_id) {
    return fetch(`${config.API_ENDPOINT}/portfolios/${user_id}`)
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postAsset(asset) {
    return fetch(`${config.API_ENDPOINT}/portfolios`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(config.TOKEN_KEY)}`,
      },
      body: JSON.stringify(asset),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  deleteAsset(id) {
    return fetch(`${config.API_ENDPOINT}/assets/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem(config.TOKEN_KEY)}` 
      }
    }).then((res) => 
    !res.ok ? res.json().then((e) => Promise.reject(e)) : true
    )
  }
}

export default PortfoliosService;