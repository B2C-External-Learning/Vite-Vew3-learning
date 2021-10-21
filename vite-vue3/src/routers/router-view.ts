const routeViews: any[] = [
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import ('@views/NotFound.vue'),
  },
  {
    path: '/',
    name: 'Home',
    component: () => import ('@views/Home.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component:  () => import ('@views/Login.vue'),
  },
  {
    path: '/user/:userName',
    name: 'User',
    component:  () => import ('@views/User.vue'),
    props: true,
  },
];

export default routeViews;
