import Vue from 'vue';
import VueRouter from 'vue-router';
import AdminView from '../views/AdminView.vue';
import UserView from '../views/UserView.vue';
import AllDevicesView from '../views/AllDevicesView.vue';
import AdminAvailableView from '../views/AdminAvailableView.vue';
import ModifyInventoryView from '../views/ModifyInventoryView.vue';

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
    component: AllDevicesView,
  },
  {
    path: '/AvailableDevices',
    name: 'AvailableDevices',
    component: AdminAvailableView,
  },
  {
    path: '/ModifyInventory',
    name: 'ModifyInventory',
    component: ModifyInventoryView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
