import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: () =>
        import(/* webpackChunkName: "layout" */ "./layout/BasicLayout.vue"),
      children: [
        {
          path: "/",
          redirect: "/activiti"
        },
        {
          path: "/activiti",
          component: () =>
            import(/* webpackChunkName: "Activiti" */ "./views/Activiti.vue")
        },
        {
          path: "/process",
          component: () =>
            import(/* webpackChunkName: "Process" */ "./views/Process.vue")
        },
        {
          path: "/task",
          component: () =>
            import(/* webpackChunkName: "Task" */ "./views/Task.vue")
        }
      ]
    }
  ]
});
