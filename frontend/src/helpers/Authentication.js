import axios from 'axios';

const API_URL = 'http://localhost:8080';

class Authentication {
  login(userInfo) {
    console.log(userInfo);
    localStorage.setItem('old_user', JSON.stringify(userInfo));
  }

  executeJwtAuthenticationService(username, password) {
    console.log(username);
    return axios.post(`${API_URL}/authenticate`, {
      username,
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

  logout() {
    localStorage.removeItem('old_user');
  }

  register(type, userInfo) {
    console.log('registered');
    console.log(type);
    login(userInfo);
  }

  getUser() {
    axios
      .get(`${API_URL}/api/userinfo`)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
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
