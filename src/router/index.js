import Vue from 'vue';
import VueRouter from 'vue-router';
import AdminView from '../views/AdminView.vue';
import UserAvailableResView from '../views/UserAvailableResView.vue';
import UserResView from '../views/UserResView.vue';
import UserReviewResView from '../views/UserReviewResView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/UserAvailableResView',
    name: 'UserAvailableResView',
    component: UserAvailableResView,
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
    path: '/UserResView',
    name: 'UserResView',
    component: UserResView,
  },
  {
    path: '/UserReviewResView',
    name: 'UserReviewResView',
    component: UserReviewResView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
