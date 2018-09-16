import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Elements from './views/Elements.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/elements',
      name: 'elements',
      component: Elements,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
});
