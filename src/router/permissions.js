
// 商品
let Goods = () => import("../components/goods/goods.vue")
let GoodsList = () => import("../components/goods/goods_list/goods_list.vue")
let ClassIfy = () => import("../components/goods/classify/classify.vue")  //分类

// 订单
let Order = () => import("../components/order/order.vue")
let OrderList = () => import("../components/order/order_list/order_list.vue") //订单列表

let Product = () => import("../components/order/product/product.vue")       //产品
let Review = () => import("../components/order/product/review/review.vue") //审核
let ProductList = () => import("../components/order/product/list/product_list.vue") // 产品列表

let ReturnGoods = () => import("../components/order/return_goods/return_goods.vue") //退货

let AllRouters = [
  {
    path: '/goods',
    component: Goods,
    name: 'Goods',
    meta: {
      name: '产品管理'
    },
    children: [
      {
        path: '/goods_list',
        component: GoodsList,
        name: 'GoodsList',
        meta: {
          name: '产品列表'
        }
      },
      {
        path: '/class_lfy',
        component: ClassIfy,
        name: 'ClassIfy',
        meta: {
          name: '产品分类'
        }
      }
    ]
  },
  {
    path: '/order',
    component: Order,
    name: 'Order',
    meta: {
      name: '订单管理'
    },
    children: [
      {
        path: '/order_list',
        component: OrderList,
        name: 'OrderList',
        meta: {
          name: '订单列表'
        },
      },
      {
        path: 'return_goods',
        component: ReturnGoods,
        name: 'ReturnGoods',
        meta: {
          name: '退货管理'
        }
      },
      {
        path:'/product',
        component:Product,
        name:'Product',
        meta:{
          name:'生产管理'
        },
        children:[
          {
            path:'/review',
            component:Review,
            name:'Review',
            meta:{
              name:'审核管理'
            }
          },
          {
            path:'/product_list',
            component:ProductList,
            name:'ProductList',
            meta:{
              name:'生产列表'
            }
          }
        ]
      }
    ]
  }
]


export default AllRouters