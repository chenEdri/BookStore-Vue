import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import BookApp from '../views/BookApp.vue'
import BookDetails from '../views/BookDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/book/:bookId',
    component: BookDetails
  },
  {
    path: '/book',
    component: BookApp
  },
]

const router = new VueRouter({
  routes
})

export default router
