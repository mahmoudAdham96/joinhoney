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
  { path: "/", redirect: "/homePage" },
  { path: "/homePage", component: homePage },
  { path: "/products/:search", component: products },
  { path: "/product/:id", component: prodDetails },
  { path: "*", name: "NotFound", component: NotFound },
  // {
  //   path: "/products",
  //   redirect: (to) => {
  //     // the function receives the target route as the argument
  //     // we return a redirect path/location here.
  //     return { path: "/", query: { q: to.params.search } };
  //   },
  // },
  { path: "/homePage", component: homePage },
];

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes,
});

export default router;
