// 进行路由对比方法；
import { RouterFilter } from "../../utils/router_filter"

// 后端返回的权限路由信息
import { permissions } from '../../api';
import AllRouters from "../../router/permissions";

// 动态跟路由和要真正添加的router根路由
import router, { dynamicRoute } from '../../router'

export default {
  namespaced: true,
  state: {
    name: '艾克',
    // 路由权限数据
    permissionsList: '',
    menuList: []
  },
  mutations: {
    SET_PERMISSIONSlIST(state, payload) {
      state.permissionsList = payload
    },
    CLEAR_PERMISSIONSlIST(state) {
      state.permissionsList = ''
    },
    SET_MENUlIST(state, payload) {
      state.menuList = payload
    },
    CLEAR_MENUlIST(state) {
      state.menuList = []
    },
    test() {
      console.log('调同');
    }
  },
  actions: {
    async GET_PERMISSIONS({commit}) {
      let { data: result } = await permissions()
      // 动态权限数据添加到vuex中 后面使用方便
      commit('SET_PERMISSIONSlIST', result)

      // 删选路由 有权限的路由
      let filter_result = RouterFilter(result, AllRouters)
      // 要动态加载的（根路由）
      let MainRouters = dynamicRoute.find(item => item.path == '')
      MainRouters.children.push(...filter_result)
      // 动态添加router根路由
      router.addRoute(...dynamicRoute)
      // 设置menuList
      commit('SET_MENUlIST', MainRouters)
    }
  }
}