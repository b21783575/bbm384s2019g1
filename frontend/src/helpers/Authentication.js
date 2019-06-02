import axios from 'axios';

const API_URL = 'http://localhost:8080';

let interceptor;

class Authentication {
  executeJwtAuthenticationService(username, password) {
    console.log(username);
    return axios.post(`${API_URL}/authenticate`, {
      username,
      password
    });
  }

  async registerSuccessfulLoginForJwt(username, token) {
    var jwtToken = this.createJWTToken(token);
    await sessionStorage.setItem('token', jwtToken);
    await this.setupAxiosInterceptors(jwtToken);
  }

  createJWTToken(token) {
    return 'Bearer ' + token;
  }

  logout() {
    localStorage.removeItem('userInfo');
    sessionStorage.removeItem('token');
    axios.interceptors.request.eject(interceptor);
  }

  register(type, userInfo) {
    console.log('registered');
    console.log(type);
    login(userInfo);
  }

  updateUser(attr, value) {
    var user = this.getUser();
    user[attr] = value;
    localStorage.setItem('userInfo', JSON.stringify(user));
    return user;
  }

  getUser() {
    return JSON.parse(localStorage.getItem('userInfo'));
  }

  getToken() {
    return sessionStorage.getItem('token');
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('token');
    if (user === null) return false;
    return true;
  }

  async setupAxiosInterceptors(token) {
    interceptor = axios.interceptors.request.use(config => {
      if (this.isUserLoggedIn()) {
        config.headers.authorization = token;
      }
      return config;
    });
  }
}

export default new Authentication();
