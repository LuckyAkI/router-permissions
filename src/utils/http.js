import axios from 'axios'

let instance  = axios.create({
  // baseURL: 'http://localhost:8888',
  timeout: 500
})

let http = {}

// instance .interceptors.request.use(config => {

// }, err => err)

// instance .interceptors.response.use(data => {
//   return data
// }, error => {
//   if (error.response.status) {
//     switch (error.response.status) {
//       // 401: 未登录
//       // 未登录则跳转登录页面，并携带当前页面的路径
//       // 在登录成功后返回当前页面，这一步需要在登录页操作。                
//       case 401:
//         router.replace({
//           path: '/login',
//           query: {
//             redirect: router.currentRoute.fullPath
//           }
//         });
//         break;

//       // 403 token过期
//       // 登录过期对用户进行提示
//       // 清除本地token和清空vuex中token对象
//       // 跳转登录页面                
//       case 403:
//         Toast({
//           message: '登录过期，请重新登录',
//           duration: 1000,
//           forbidClick: true
//         });
//         // 清除token
//         localStorage.removeItem('token');
//         store.commit('loginSuccess', null);
//         // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面 
//         setTimeout(() => {
//           router.replace({
//             path: '/login',
//             query: {
//               redirect: router.currentRoute.fullPath
//             }
//           });
//         }, 1000);
//         break;

//       // 404请求不存在
//       case 404:
//         Toast({
//           message: '网络请求不存在',
//           duration: 1500,
//           forbidClick: true
//         });
//         break;
//       // 其他错误，直接抛出错误提示
//       default:
//         Toast({
//           message: error.response.data.message,
//           duration: 1500,
//           forbidClick: true
//         });
//     }
//     return Promise.reject(error.response);
//   }
// })

http.get = function (url,params) {
  return new Promise((resolve, reject) => {
    instance.get(url, {
      params: params
    }).then(res => {
      resolve(res.data);
    }).catch(err => {
      reject(err.data)
    })
  });
}
// http.post = function(url,params){
//   return new Promise((resolve, reject) => {
//     instance.post(url,params)
//    .then(res => {
//        resolve(res.data);
//    })
//    .catch(err =>{
//        reject(err.data)
//    })
// });
// }
export default http