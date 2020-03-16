//导入vue
import Vue from 'vue'
//导入APP.vue（根组件）
import App from './App.vue'
import router from './router/index.js'
//导入 Element
import Element from 'element-ui'
//导入Element的样式'
import 'element-ui/lib/theme-chalk/index.css'
//导入全局样式
import './style/index.css'
//使用Element
Vue.use(Element)
Vue.config.productionTip = false

//创建了一个新的vue实例
new Vue({
  render: h => h(App),
  router
}).$mount('#app')