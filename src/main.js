// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import app from './App'
import router from './router/index.js'
import store from "./store"
import * as api from "./store/api"
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from "echarts"

//import * as echarts from 'echarts'

Vue.prototype.$api = api
Vue.prototype.$echarts = echarts

Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,//配置路由器
  //components: { App },
  //template: '<App/>',
  render:h=>h(app),
  store
})
