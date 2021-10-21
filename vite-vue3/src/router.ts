import { createWebHistory, createRouter } from 'vue-router';
import routeViews from '@routers/router-view';
import routeApis from '@routers/router-api';

var allRoutes: any[] = [];
allRoutes.concat(routeViews, routeApis);

const router = createRouter({
  history: createWebHistory(),
  routes: allRoutes,
});

export default router;
