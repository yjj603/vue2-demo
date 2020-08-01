import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: { name: 'pool' },
    children:[{
      name:'pool',
      path:'/home/pool',
      component:()=>import('@/views/pool/index')
    },{
      name:'tableList',
      path: '/home/pool/tableList/:ci',
      component:()=>import('@/views/pool/tableList')
    },{
      name:'create',
      path: '/home/pool/create/:ci',
      component:()=>import('@/views/pool/create')
    }]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
