import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("../views/Home.vue"),
    children: [
      {
        path: "/",
        name: "home-start",
        component: () => import(/*快速上手*/ "../docs/start.md")
      },
      {
        path: "/CHANGELOG",
        name: "CHANGELOG",
        component: () => import(/*更新日志*/ "../../CHANGELOG.md")
      },
      {
        path: "/vueapi2x",
        name: "vueapi2x",
        component: () => import(/*vueapi2x*/ "../docs/vueapi2x.md")
      },
      {
        path: "/cookbook",
        name: "cookbook",
        component: () => import(/*cookbook*/ "../docs/cookbook.md")
      },
      {
        path: "/vuecli",
        name: "vuecli",
        component: () => import(/*vuecli*/ "../docs/vuecli.md")
      },
      {
        path: "/vuex-module-decorators",
        name: "vuex-module-decorators",
        component: () => import(/*vuecli*/ "../docs/vuex-module-decorators.md")
      },
      {
        path: "/vue-property-decorator",
        name: "vue-property-decorator",
        component: () => import(/*vuecli*/ "../docs/vue-property-decorator.md")
      },
      {
        path: "/component/button",
        name: "component-button",
        component: () => import("../../src/button/index.md")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.NODE_ENV !== "production" ? "/" : "/",
  routes
});

export default router;
