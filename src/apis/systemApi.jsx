import $http from './http'
import config from './config'
export default {
  name: 'system',
  getUrl(url) {
    return config.getUrl(this.name, url);
  },
  postLogin(data) {
    return $http.post(`/api/login`, data);
  },
  postLogout(data) {
    return $http.post(`/api/logout`, data);
  },
  postHome(data) {
    return $http.post(`/api/home`, data);
  },
  
}