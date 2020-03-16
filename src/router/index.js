//导入vue
import Vue from 'vue'
//导入vue-router
import VueRouter from 'vue-router'
//导入 Login
import Login from '../views/login/index.vue'
import useElement from '../views/useElement/index.vue'
//使用vue-router
Vue.use(VueRouter)
//创建一个新的vue对象
var router = new VueRouter({
  routes: [{
    path: '/login',
    component: Login
  },
{
  path: '/useElement',
  component: useElement 
}]
})
//将新的对象暴露出去
export default router