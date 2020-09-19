import {createRouter, createWebHashHistory} from "vue-router";

const Home = () => import("../views/Home");
const About = () => import("../views/About");
const User = () => import("../views/User")
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/user",
    name: "User",
    component: User
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
