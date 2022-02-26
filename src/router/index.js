import Vue from 'vue';
import VueRouter from 'vue-router';
import AdminView from '../views/AdminView.vue';
import AdminActive from '../components/Admin/AdminActive.vue'; // imported from components-Admin Active Reservations
import AdminLog from '../components/Admin/AdminLog.vue'; // imported from components-Admin Logged Reservations
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
    component: AdminActive, // imported component
  },
  {
    path: '/AdminLogRes',
    name: 'AdminLogRes',
    component: AdminLog, // imported component
  },
];

const router = new VueRouter({
  routes,
});

export default router;
