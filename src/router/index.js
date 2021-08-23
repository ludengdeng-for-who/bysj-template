import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from "@/components/Layout"
import Login from "@/views/Login"
import Books from "@/views/Books"
import Status from "@/views/Status"
import Check from "@/views/Check"
import Home from "@/views/Home"
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: 'home',
        component: Home
      },
      {
        path: 'books',
        component: Books
      },
      {
        path: 'status',
        component: Status
      },
      {
        path: 'check',
        component: Check
      }
    ]
  },
  {
    path: "/login",
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
