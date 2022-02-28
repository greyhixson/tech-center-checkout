import Vue from 'vue';
import VueRouter from 'vue-router';
import AdminView from '../views/AdminView.vue';
import UserView from '../views/UserView.vue';
import UserConfirmRes from '../components/User/UserConfirmRes.vue';
import UserRes from '../components/User/UserRes.vue';
import UserReviewRes from '../components/User/UserReviewRes.vue';
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
  {
    path: '/UserRes',
    name: 'UserRes',
    component: UserRes,
  },
  {
    path: '/UserRes',
    name: 'UserRes',
    component: UserRes,
  },
  {
    path: '/UserReviewRes',
    name: 'UserReviewRes',
    component: UserReviewRes,
  },
  {
    path: '/UserConfirmRes',
    name: 'UserConfirmRes',
    component: UserConfirmRes,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
