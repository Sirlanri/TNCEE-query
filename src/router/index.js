import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
      {
        path:'forecast',
        name:'forecast',
        component:()=>import('../views/Forecast.vue')
      },
      {
        path:'Browse',
        name:'Browse',
        component:()=>import('../views/Browse.vue'),
        children:[
          {
            path:'tongji',
            name:"tongji",
            component:()=>import('@/components/tongji.vue')
          },
          {
            path:'xingbie',
            name:"xingbie",
            component:()=>import('@/components/xingbie.vue')
          },
          {
            path:'midu',
            name:"midu",
            component:()=>import('@/components/midu.vue')
          },
        ]
      },
    ]
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
