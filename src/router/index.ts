import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import("../views/Landing.vue")
  },
  {
    path: '/profile',
    component: () => import("../views/Profile.vue")
  },
  {
    path: '/clientfeed',
    component: () => import("../views/ClientFeed.vue")
  },
  {
    path: '/clientfeed/create',
    component: () => import("../views/CreateClientFeed.vue")
  },
  {
    path: '/driverfeed',
    component: () => import("../views/DriverFeed.vue")
  },
  {
    path: '/driverfeed/create',
    component: () => import("../views/CreateDriverFeed.vue")
  },
  {
    path:'/clientfeed/history',
    component: () => import('../views/History.vue'),
  },
  {
    path:'/driverfeed/history',
    component: () => import('../views/History.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
