import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Industry from '../components/First.vue'
import Overview from '../components/Overview.vue'
import Detail from '../components/Detail.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
  {
    path: "/industry",
    name: "Industry",
    component: Industry
  },
  {
    path: "/overview",
    name: "Overview",
    component: Overview
  },
  {
    path: "/detail",
    name: "Detail",
    component: Detail
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
