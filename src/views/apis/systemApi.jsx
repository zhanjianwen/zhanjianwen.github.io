  import $http from './http'
  import config from './config'
  export default {
      name: 'system',
      getUrl(url) {
          return config.getUrl(this.name, url);
      },
      postLogin(data) {
        return $http.post(this.getUrl(`/login`), data);
    },
  }