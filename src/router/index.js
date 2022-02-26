import Vue from 'vue';
import VueRouter from 'vue-router';
import AdminView from '../views/AdminView.vue';
import UserView from '../views/UserView.vue';
import AllDevices from '../views/AllDevicesView.vue';

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
    path: '/AllDevices',
    name: 'AllDevices',
    component: AllDevices,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
