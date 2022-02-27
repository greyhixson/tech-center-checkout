import Vue from 'vue';
import VueRouter from 'vue-router';
import AdminView from '../views/AdminView.vue';
import UserView from '../views/UserView.vue';
import UserRes from '../components/User/UserRes.vue';

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
    path: '/UserRes',
    name: 'UserRes',
    component: UserRes,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
