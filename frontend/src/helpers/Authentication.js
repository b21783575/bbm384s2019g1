import axios from 'axios';

const API_URL = 'http://localhost:8080';

class Authentication {
  login(userInfo) {
    console.log(userInfo);
    localStorage.setItem('old_user', JSON.stringify(userInfo));
  }

  executeJwtAuthenticationService(email, password) {
    console.log(email);
    return axios.post(`${API_URL}/authenticate`, {
      email,
      password
    });
  }

  registerSuccessfulLoginForJwt(username, token) {
    sessionStorage.setItem('user', username);
    this.setupAxiosInterceptors(this.createJWTToken(token));
  }

  createJWTToken(token) {
    return 'Bearer ' + token;
  }

  createAuthToken(username, password) {
    var encripted = window.btoa(username + ':' + password);
    console.log(encripted);
    return encripted;
  }

  logout() {
    localStorage.removeItem('old_user');
  }

  register(type, userInfo) {
    console.log('registered');
    console.log(type);
    login(userInfo);
  }

  getUser() {
    var user = localStorage.getItem('old_user');
    if (user) return JSON.parse(user);
    return null;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('user');
    if (user === null) return false;
    return true;
  }

  setupAxiosInterceptors(token) {
    axios.interceptors.request.use(config => {
      if (this.isUserLoggedIn()) {
        config.headers.authorization = token;
      }
      return config;
    });
  }
}

export default new Authentication();
