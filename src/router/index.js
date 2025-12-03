import { createWebHistory, createRouter } from "vue-router";

// Pages
import Home from "../pages/Home.vue";
import Game from "../pages/Game.vue";
import CekPesanan from "../pages/CekPesanan.vue";
import Contact from "../pages/Contact.vue";
import OrderSuccess from "../pages/OrderSuccess.vue";
import Ulasan from "../pages/Ulasan.vue";
import login from "../pages/login.vue";
import register from "../pages/register.vue";

// Game Pages
import Arknights from "../pages/Arknights.vue";
import UmaMusume from "../pages/UmaMusume.vue";
import P5X from "../pages/P5X.vue";
import Wuwa from "../pages/Wuwa.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/game",
    name: "Game",
    component: Game,
  },

  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },

  {
    path: "/ulasan",
    name: "Ulasan",
    component: Ulasan,
  },

  {
    path: "/game/Arknights",
    name: "Arknights",
    component: Arknights,
  },
  {
    path: "/game/UmaMusume",
    name: "UmaMusume",
    component: UmaMusume,
  },
  {
    path: "/game/P5X",
    name: "P5X",
    component: P5X,
  },
  {
    path: "/game/Wuwa",
    name: "Wuwa",
    component: Wuwa,
  },

  {
    path: "/cek-pesanan",
    name: "CekPesanan",
    component: CekPesanan,
  },

  {
    path: "/order-success",
    name: "OrderSuccess",
    component: OrderSuccess,
  },

  {
    path: "/login",
    name: "login",
    component: login,
  },
  {
    path: "/register",
    name: "register",
    component: register,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
