const routes = [
  {
    path: '/',
    name: '',
    component: () => import(/* webpackChunkName: "demo" */ '../pages/demo'),
    modules: [
      import(/* webpackChunkName: "demo-module" */ '../pages/demo/module'),
    ],
  },
  {
    path: '/demo',
    name: 'demo',
    component: () => import(/* webpackChunkName: "demo" */ '../pages/demo'),
    modules: [
      import(/* webpackChunkName: "demo-module" */ '../pages/demo/module'),
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
    path: '/socket-demo',
    name: 'socket-demo',
    component: () => import(/* webpackChunkName: "socket-demo" */'../pages/socket-demo'),
    modules: [
      import(/* webpackChunkName: "socket-demo-module" */ '../pages/socket-demo/module'),
    ],
  },
  {
    path: '/*',
    name: 'not-found',
    component: () => import(/* webpackChunkName: "not-found" */ '../pages/not-found'),
  },
];

export default routes;
