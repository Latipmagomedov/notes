import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Completed from "../views/Completed.vue";
import AddNote from "../views/AddNote.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/completed",
    name: "Completed",
    component: Completed,
  },
  {
    path: "/add-note",
    name: "AddNote",
    component: AddNote,
  },
];

const router = new VueRouter({
  routes,
  // mode: 'history',
});

export default router;
