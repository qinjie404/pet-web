import {createRouter, createWebHashHistory} from "vue-router";

const Home = () => import("../views/Home");
const About = () => import("../views/About");
const User = () => import("../views/User");
const AboutMessage = () => import("../views/AboutMessage");
const AboutNews = () => import("../views/AboutNews");
const Profile = () => import("../views/Profile");
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About,
    children: [
      {
        path: "news",
        name: "AboutNews",
        component: AboutNews
      },
      {
        path: "message",
        name: "AboutMessage",
        component: AboutMessage
      }
    ]
  },
  {
    path: "/user/:userName",
    name: "User",
    component: User
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
