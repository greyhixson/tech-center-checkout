import Vue from 'vue';
import VueRouter from 'vue-router';
// Views
import AdminView from '../views/AdminView.vue';
import LoginView from '../views/LoginView.vue';
import UserView from '../views/UserView.vue';

// Admin Components
import AdminActive from '../components/Admin/AdminActive.vue';
import AdminLog from '../components/Admin/AdminLog.vue';
import AllDevices from '../components/Admin/AllDevices.vue';
import ModifyInventory from '../components/Admin/ModifyInventory.vue';

// User Components
import UserRes from '../components/User/UserRes.vue';
import UserConfirmRes from '../components/User/UserConfirmRes.vue';
import UserReviewRes from '../components/User/UserReviewRes.vue';

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
    path: '/',
    name: 'LoginView',
    component: LoginView,
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
    path: '/UserConfirmRes',
    name: 'UserConfirmRes',
    component: UserConfirmRes,
  },
  {
    path: '/UserReviewRes',
    name: 'UserReviewRes',
    component: UserReviewRes,
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
