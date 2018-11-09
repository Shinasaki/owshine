import Vue from 'vue'
import Router from 'vue-router'

// layout
const Body = () => import('@component/Body');
const Notfound = () => import('@component/Notfound');
// view
const Landing = () => import('@component/Landing/Landing');


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    components: {
      body: Body,
    },
    children: [{
        path: 'landing',
        alias: '/',
        component: Landing,
        name: 'Landing',
        meta: {
          title: 'หน้าหลัก'
        }
      },
      {
        path: '404',
        component: Notfound,
        name: 'Notfound',
        meta: {
          title: '404'
        }
      }
    ]
  }]
})
