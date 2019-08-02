import axios from 'axios';
import * as moment from 'moment'
import * as qs from 'qs'
import { any } from 'prop-types';
// import {message} from 'antd'
const $http = {
  ajax: any,
  get: any,
  post: any
};
axios.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})
axios.interceptors.response.use(function (response) {
  if (response.status === 200) {
    return response.data
  } else {
    throw Error(response.data.msg || '服务异常')
  }
}, function (error) {
  return Promise.reject(error)
})
const ajax: any = (url: any, data: any, method: any, options: any) => {
  if (options === undefined) {
    options = {}
  }
  options.url = url;
  
  options.data = data;
  options.method = method;
  options.withCredentials = true;
  return axios(options).catch(error => {
    return {
      data: {
        isSucc: false,
        statusCode: 500,
        message: error.message
      }
    };
  }).then(response => {
    return response
  })
}
const get: any = (url: any, options: any) => {
  if (options === undefined) {
    options = {}
  }
  return ajax(url, options.data !== undefined ? {
    data: options.data
  } : '', "get", options);
}
const post: any = (url: any, data: any, options: any) => {
  if (options === undefined) {
    options = {};
  }
  for (var d in data) {
    if (data[d] instanceof Date) {
      data[d] = moment(data[d]).format("YYYY-MM-DD HH:mm:ss");
    }
  }
  return ajax(url, qs.stringify({
    data: typeof (data) == "object" ? JSON.stringify(data) : data
  }), "post", options);
}

$http.ajax = ajax;
$http.get = get;
$http.post = post
export default $http