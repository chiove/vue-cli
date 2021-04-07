const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../pages/login'),
    modules: [
      import(/* webpackChunkName: "login-module" */ '../pages/login/module'),
      import(/* webpackChunkName: "home-module" */ '../pages/home/module'),
    ],
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */'../pages/home'),
    modules: [
      import(/* webpackChunkName: "home-module" */ '../pages/home/module'),
    ],
  },
  {
    path: '/*',
    name: 'not-found',
    component: () => import(/* webpackChunkName: "not-found" */ '../pages/not-found'),
  },
];

export default routes;
