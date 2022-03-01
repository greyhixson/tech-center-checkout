import Vue from 'vue';
import VueRouter from 'vue-router';
import AdminView from '../views/AdminView.vue';
import AdminActive from '../components/Admin/AdminActive.vue';
import AdminLog from '../components/Admin/AdminLog.vue';
import UserView from '../views/UserView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/UserView',
    name: 'UserView',
    component: UserView,
  },
  {
    path: '/AdminView',
    name: 'AdminView',
    component: AdminView,
  },
  {
    path: '/Profile',
    name: 'Profile',
    // add component later
  },
  {
    path: '/AdminActiveRes',
    name: 'AdminActiveRes',
    component: AdminActive,
  },
  {
    path: '/AdminLogRes',
    name: 'AdminLogRes',
    component: AdminLog,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
