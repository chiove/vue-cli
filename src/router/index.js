import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';
import store from 'src/store';

Vue.use(Router);

const router = new Router({
  routes,
});

router.beforeEach((to, from, next) => {
  routes.forEach((route) => {
    if (to.name === route.name) {
      Promise.all(route.modules || []).then((res) => {
        res.forEach((item) => {
          if (!store.hasModule(item.default.name)) {
            store.registerModule(item.default.name, item.default);
          }
        });
        next();
      });
    }
  });
});

export default router;
