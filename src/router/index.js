import { createWebHistory, createRouter } from "vue-router";

import Home from "../pages/Home.vue"
import Game from "../pages/Game.vue"
import Contact from "../pages/Contact.vue"

const routes = [
  { path: '/', 
    name: "Home", 
    component: Home 
},
  { path: "/game", 
    name:"Game", 
    component: Game 
},
{
  path: "/contact",
  name: "Contact",
  component: Contact
}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;