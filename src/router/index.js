//此文件为配置路由的文件


import Vue from 'vue'
import Router from 'vue-router'

//交通流量下的三个维度路由
import luxianWeidu from '../components/routeComponents/luxianWeidu'
import timeWeidu from '../components/routeComponents/timeWeidu'
import xingzhengquhuaWeidu from '../components/routeComponents/xingzhengquhuaWeidu'

//交通事件下的三个维度路由
import luxianWeidu2 from '../components/routeComponents/luxianWeidu2'
import timeWeidu2 from '../components/routeComponents/timeWeidu2'
import xingzhengquhuaWeidu2 from '../components/routeComponents/xingzhengquhuaWeidu2'

//交通流量-高德/百度 切换
import trafficBaidu from '../components/routeComponents/trafficBaidu'
import trafficGaode from '../components/routeComponents/trafficGaode'

import HomePage from "../components/HomePage.vue"

//信息看板组件
import infoBoard from "../components/routeComponents/infoBoard.vue"

//运行监控组件
import serviceMoniter from "../components/routeComponents/serviceMoniter.vue"
import systemMonitor from "../components/routeComponents/systemMonitor.vue"
import visitMonitor from "../components/routeComponents/visitMonitor.vue"

//资源中心组件
import serviceManage from "../components/routeComponents/serviceManage.vue"
import dataManage from "../components/routeComponents/dataManage.vue"
import standardRull from "../components/routeComponents/standardRull.vue"

//授权中心下的组件
import resourceList from "../components/routeComponents/resourceList.vue"
import serviceApply from "../components/routeComponents/serviceApply.vue"

//开发中心下的组件
import developCenter1 from "../components/routeComponents/developCenter1.vue"
import developCenter2 from "../components/routeComponents/developCenter2.vue"

//系统管理下的组件
import userManage from "../components/routeComponents/userManage.vue"
import unitManage from "../components/routeComponents/unitManage.vue"
import rightManage from "../components/routeComponents/rightManage.vue"


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      redirect:"/HomePage"
    },

    //信息看板栏的路由
    {
      path:"/infoBoard",
      name:"infoBoard",
      component:infoBoard,
    },

    //运行监控栏的路由
    {
      path:"/serviceMoniter",
      name:"serviceMoniter",
      component:serviceMoniter,
      redirect:'/luxianWeidu'
    },
    {
      path:"/systemMonitor",
      name:"systemMonitor",
      component:systemMonitor,
    },
    {
      path:"/visitMonitor",
      name:"visitMonitor",
      component:visitMonitor,
    },

    //资源中心栏下的路由
    {
      path:"/serviceManage",
      name:"serviceManage",
      component:serviceManage,
    },
    {
      path:"/dataManage",
      name:"dataManage",
      component:dataManage,
    },
    {
      path:"/standardRull",
      name:"standardRull",
      component:standardRull,
    },

    //授权中心栏下的路由
    {
      path:"/resourceList",
      name:"resourceList",
      component:resourceList,
    },
    {
      path:"/serviceApply",
      name:"serviceApply",
      component:serviceApply,
    },

    //开发中心栏下的路由
    {
      path:"/developCenter1",
      name:"developCenter1",
      component:developCenter1,
    },
    {
      path:"/developCenter2",
      name:"developCenter2",
      component:developCenter2,
    },

    //系统管理下的路由
    {
      path:"/userManage",
      name:"userManage",
      component:userManage,
    },
    {
      path:"/unitManage",
      name:"unitManage",
      component:unitManage,
    },
    {
      path:"/rightManage",
      name:"rightManage",
      component:rightManage,
    },

    //接内蒙项目 交通流量 三个维度的路由
    {
      path:"/luxianWeidu",
      name:"luxianWeidu",
      component:luxianWeidu,
      /*children:[
        {
          path:'/trafficGaode',
          component: trafficGaode
        },
        {
          path:'/trafficBaidu',
          component: trafficBaidu
        },
      ]*/
    },
    {
      path:"/timeWeidu",
      name:"timeWeidu",
      component:timeWeidu,
      /*children:[
        {
          path:'/trafficGaode',
          component: trafficGaode
        },
        {
          path:'/trafficBaidu',
          component: trafficBaidu
        },
      ]*/
    },
    {
      path:"/xingzhengquhuaWeidu",
      name:"xingzhengquhuaWeidu",
      component:xingzhengquhuaWeidu,
      /*children:[
        {
          path:'/xingzhengquhuaWeidu/trafficGaode',
          component: trafficGaode
        },
        {
          path:'/xingzhengquhuaWeidu/trafficBaidu',
          component: trafficBaidu
        },
      ]*/
    },
    //内蒙项目 交通事件 三个维度的路由
    {
      path:"/luxianWeidu2",
      name:"luxianWeidu2",
      component:luxianWeidu2,
    },
    {
      path:"/timeWeidu2",
      name:"timeWeidu2",
      component:timeWeidu2,
    },
    {
      path:"/xingzhengquhuaWeidu2",
      name:"xingzhengquhuaWeidu2",
      component:xingzhengquhuaWeidu2,
    },

  ]
})
