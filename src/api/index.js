import http from '../utils/http.js'
import store from '../store'

function login(user){
  return http.get('/api/login', {user:user.user})
}

function permissions(){
  return http.get('/api/permissions?user=' + store.state.userToken)
}

export {
  login,
  permissions
}