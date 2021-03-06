import jwtDecode from 'jwt-decode'
import config from '../config'

const TokenService = {
  saveAuthToken(token) {
    window.localStorage.setItem(config.TOKEN_KEY, token)
  },
  getAuthToken() {
    return window.localStorage.getItem(config.TOKEN_KEY)
  },
  clearAuthToken() {
    console.info('clearing the auth token')
    window.localStorage.removeItem(config.TOKEN_KEY)
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken()
  },
  parseJwt(jwt) {
    if (jwt) {
      return jwtDecode(jwt) }
    else {
      return {}
    }
  },
  readJwtToken() {
    return TokenService.parseJwt(TokenService.getAuthToken())
  },
}

export default TokenService