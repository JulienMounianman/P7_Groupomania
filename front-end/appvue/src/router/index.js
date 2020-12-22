import Vue from 'vue'
import VueRouter from 'vue-router'
import Signup from '../views/signup.vue'
import Forum from '../views/forum.vue'
import Login from '../views/login.vue'
import Post from '../views/post.vue'
import Comment from '../views/comment.vue'
import Profil from '../views/profil.vue'
import CreatePost from '../views/createPost.vue'
import CreateCategory from '../views/createCategory.vue'
import EditCategory from '../views/editCategory.vue'
import listUser from '../views/listUser.vue'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/Signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/forum',
    name: 'Forum',
    component: Forum,
    beforeEnter: (to, from, next) => {
      if(localStorage.getItem('token') === null){
        router.push({ name:'Login'})
      }
      next()
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/post',
    name: 'Post',
    component: Post,
    beforeEnter: (to, from, next) => {
      if(localStorage.getItem('token') === null){
        router.push({ name:'Login'})
      }
      next()
    }
  },
  {
    path: '/comment',
    name: 'Comment',
    component: Comment,
    beforeEnter: (to, from, next) => {
      if(localStorage.getItem('token') === null){
        router.push({ name:'Login'})
      }
      next()
    }
  },
  {
    path: '/profil',
    name: 'Profil',
    component: Profil,
    beforeEnter: (to, from, next) => {
      if(localStorage.getItem('token') === null){
        router.push({ name:'Login'})
      }
      next()
    }
  },
  {
    path: '/createPost',
    name: 'CreatePost',
    component: CreatePost,
    beforeEnter: (to, from, next) => {
      if(localStorage.getItem('token') === null){
        router.push({ name:'Login'})
      }
      next()
    }
  },
  {
    path: '/createCategory',
    name: 'createCategory',
    component: CreateCategory,
    beforeEnter: (to, from, next) => {
      if(localStorage.getItem('token') === null){
        router.push({ name:'Login'})
      }
      if(store.state.isAdmin === false){
        router.push({ name:'Login'})
      }
      next()
    },
    
  },
  {
    path: '/editCategory',
    name: 'editCategory',
    component: EditCategory,
    beforeEnter: (to, from, next) => {
      if(localStorage.getItem('token') === null){
        router.push({ name:'Login'})
      }
      if(store.state.isAdmin === false){
        router.push({ name:'Login'})
      }
      next()
    }
  },
  {
    path: '/listUser',
    name: 'listUser',
    component: listUser,
    beforeEnter: (to, from, next) => {
      if(localStorage.getItem('token') === null){
        router.push({ name:'Login'})
      }
      if(store.state.isAdmin === false){
        router.push({ name:'Login'})
      }
      next()
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
