import Vue from 'vue'
import VueRouter from 'vue-router'
import Signup from '../views/signup.vue'
import Forum from '../views/forum.vue'
import Login from '../views/login.vue'
import Post from '../views/post.vue'
import Comment from '../views/comment.vue'
import Profil from '../views/profil.vue'
import CreatePost from '../views/createPost.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/forum',
    name: 'Forum',
    component: Forum
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/post',
    name: 'Post',
    component: Post
  },
  {
    path: '/comment',
    name: 'Comment',
    component: Comment
  },
  {
    path: '/profil',
    name: 'Profil',
    component: Profil
  },
  {
    path: '/createPost',
    name: 'CreatePost',
    component: CreatePost
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
