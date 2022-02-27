import Vue from 'vue';
import VueRouter from 'vue-router';
import AdminView from '../views/AdminView.vue';
import UserView from '../views/UserView.vue';
import AllDevices from '../components/Admin/AllDevices.vue';
import ModifyInventory from '../components/Admin/ModifyInventory.vue';

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
  {
    path: '/ModifyInventory',
    name: 'ModifyInventory',
    component: ModifyInventory,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
