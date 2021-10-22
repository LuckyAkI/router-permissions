export default {
  get userToken(){
     return localStorage.getItem('token')
  },
  set userToken(value){
    localStorage.setItem('token',value)
  },
  list:[1,2,3]
}