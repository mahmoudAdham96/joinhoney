import Vue from "vue";

import VueRouter from "vue-router";
import products from "../views/ProductPage.vue";
import prodDetails from "../views/prodDetails.vue";
import homePage from "../views/homePage.vue";
import NotFound from "../views/notFound.vue";
import Paginate from "vuejs-paginate";
Vue.use("paginate", Paginate);
Vue.use(VueRouter);

const routes = [
  { path: "/", component: homePage, alias: "/homePage" },
  // { path: "/homePage", component: homePage },
  { path: "/products/:search", component: products },
  { path: "/product/:id", component: prodDetails },
  { path: "*", name: "NotFound", component: NotFound },
];

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes,
});

export default router;
