import axios from 'axios';

const API_URL = 'http://localhost:8080';

class Authentication {
  executeJwtAuthenticationService(username, password, remember) {
    console.log('2');
    if (remember) {
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
    }
    return axios.post(`${API_URL}/authenticate`, {
      username,
      password
    });
  }

  async registerSuccessfulLoginForJwt(username, token) {
    console.log('3.1');
    var jwtToken = this.createJWTToken(token);
    await sessionStorage.setItem('token', jwtToken);
    await this.setupAxiosInterceptors(jwtToken);
  }

  createJWTToken(token) {
    return 'Bearer ' + token;
  }

  logout() {
    sessionStorage.removeItem('userInfo');
    sessionStorage.removeItem('token');
    this.setupAxiosInterceptors('foooo');
  }

  register(type, userInfo) {
    login(userInfo);
  }

  updateUser(attr, value) {
    var user = this.getUser();
    user[attr] = value;
    sessionStorage.setItem('userInfo', JSON.stringify(user));
    return user;
  }

  getUser() {
    console.log('getuser');
    return JSON.parse(sessionStorage.getItem('userInfo'));
  }

  getToken() {
    return sessionStorage.getItem('token');
  }

  isUserLoggedIn() {
    let token = sessionStorage.getItem('token');
    if (token === null) return false;
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
