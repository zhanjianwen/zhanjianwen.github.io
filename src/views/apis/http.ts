import axios from 'axios';
import * as moment from 'moment'
import * as qs from 'qs'
import { any } from 'prop-types';
const $http={
  ajax:any,
  get:any,
  post:any
};
axios.interceptors.request.use(function(config) {
  return config
}, function (error) {
  return Promise.reject(error)
})
axios.interceptors.response.use(function(response) {
  if (response.status === 200) {
      return response.data
  } else {
      throw Error(response.data.msg || '服务异常')
  }
}, function (error) {
  return Promise.reject(error)
})

const ajax:any=(url:any, data:any, method:any, options:any) => {
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
const get:any = (url:any, options:any) => {
  if (options === undefined) {
      options = {}
  }
  return ajax(url, options.data !== undefined ? {
      data: options.data
  } : '', "get", options);
}

const post:any = (url:any, data:any, options:any) => {
  if (options === undefined) {
      options = {};
  }
  for (var d in data) {
      if (data[d] instanceof Date) {
          data[d] = moment(data[d]).format("YYYY-MM-DD HH:mm:ss");
      }
  }
  return ajax(url,qs.stringify({
      data: typeof (data) == "object" ? JSON.stringify(data) : data
  }), "post", options);
}

$http.ajax=ajax;
$http.get=get;
$http.post=post
export default $http








// import Vue from 'vue';
// import  axios from 'axios';
// import * as qs from 'qs';
// // 取消请求
// const CancelToken = axios.CancelToken;
// // 是否需要拦截code==-1的状态
// let is_log: boolean = false;
// // 设置默认请求头
// axios.defaults.headers = {
//     'X-Requested-With': 'XMLHttpRequest',
//     'Content-Type': 'application/x-www-form-urlencoded',
// };
// axios.interceptors.request.use(function (config) {
//   return config
// }, function (error) {
//   return Promise.reject(error)
// })

// axios.interceptors.response.use(function (response) {
//   if (response.status === 200) {
//       return response.data
//   } else {
//       throw Error(response.data.msg || '服务异常')
//   }
// }, function (error) {
//   return Promise.reject(error)
// })
// // 将axios 的 post 方法，绑定到 vue 实例上面的 $post
// Vue.prototype.$post =  (url: any, params: any) => {
//     return new Promise((resolve, reject) => {
//         axios.post(url, qs.stringify(params)).then((res: any) => {
//             resolve(res);
//         }).catch((err: any) => {
//             reject(err);
//          });
//      });
// };
// // 将axios 的 get 方法，绑定到 vue 实例上面的 $get
// Vue.prototype.$get =  (url: any, params: any) => {
//     return new Promise((resolve, reject) => {
//         axios.get(url, { params: params }).then((res: any) => {
//             resolve(res); // 返回请求成功的数据 data
//         }).catch((err: any) => {
//             reject(err);
//         });
//     });
// };