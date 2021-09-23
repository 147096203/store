import { createRouter, createWebHistory } from 'vue-router'

// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

//懒加载
// const Home = () => import('../components/Home')
// const HomeNews = () => import('../components/HomeNews')
// const HomeMessage = () => import('../components/HomeMessage')
//
// const About = () => import('../components/About')
// const User = () => import('../components/User')
// const profile = () => import('../components/profile')
const User =() =>import('../views/User')
const UserList =() =>import('../views/UserList')
const Authority =() =>import('../views/Authority')
const AuthorityList =() =>import('../views/AuthorityList')
const RoleList =() =>import('../views/RoleList')
const routes = [
  //  路由默认路径
  {
    path: '/',
    // redirect：Home   重定向到Home
    // component: Home
    redirect: 'User',
  },
  {
    path:'/User',
    component:User
  },
  {
    path:'/UserList',
    component:UserList
  },
  {
    path:'/Authority',
    component:Authority
  },
  {
    path:'/AuthorityList',
    component:AuthorityList
  },
  {
    path:'/RoleList',
    component:RoleList
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
