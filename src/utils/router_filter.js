// 两个方法 

// 后台路由信息和全部路由进行对比的方法

function RouterFilter(EndPermissions, AllRouter) {
  let result_filter = []
  AllRouter.forEach(item => {
    EndPermissions.forEach(v => {
      if (item.meta.name === v.name) {
        if (item.children && item.children.length > 0) {
          item.children = RouterFilter(v.children, item.children)
        }
        result_filter.push(item)
      }
    })
  })
  return result_filter
}


// 默认显示的路由 就是redirect子路由重定向的路由

export {
  RouterFilter
}