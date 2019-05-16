import axios from 'axios';

const API_URL = 'http://localhost:8080';

class Authentication {
  login(userInfo) {
    console.log(userInfo);
    localStorage.setItem('user', JSON.stringify(userInfo));
  }

  executeBasicAuthenticationService(username, password) {
    return axios.get(`${API_URL}/basicauth`, {
      headers: { authorization: this.createAuthToken(username, password) }
    });
  }

  registerSuccessfulLogin(username, password) {
    //let basicAuthHeader = 'Basic ' +  window.btoa(username + ":" + password)
    //console.log('registerSuccessfulLogin')
    sessionStorage.setItem('deneme', username);
    this.setupAxiosInterceptors(this.createBasicAuthToken(username, password));
  }

  createAuthToken(username, password) {
    var encripted = window.btoa(username + ':' + password);
    console.log(encripted);
    return encripted;
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(type, userInfo) {
    console.log('registered');
    console.log(type);
    login(userInfo);
  }

  getUser() {
    var user = localStorage.getItem('user');
    if (user) return JSON.parse(user);
    return null;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('deneme');
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
