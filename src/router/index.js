import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignIn from "../views/auth/SignIn.vue";
import SignUp from "../views/auth/SignUp.vue";
import PasswordReset from "../views/auth/PasswordReset.vue";
import ConfirmAccount from "../views/auth/ConfirmAccount.vue";
import RecoverPassword from "../views/auth/RecoverPassword.vue";
import ClientRequest from "../views/client_request/ClientRequest.vue";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "SignIn",
    component: SignIn,
    beforeEnter: (to, from, next) => {
      if (store.getters["auth/authenticated"]) {
        return next({
          name: "Home",
        });
      }
      next();
    },
  },
  {
    path: "/home",
    name: "Home",
    component: HomeView,
    beforeEnter: (to, from, next) => {
      if (!store.getters["auth/authenticated"]) {
        return next({
          name: "SignIn",
        });
      }
      next();
    },
  },
  {
    path: "/client-request",
    name: "ClientRequest",
    component: ClientRequest,
    beforeEnter: (to, from, next) => {
      if (!store.getters["auth/authenticated"]) {
        return next({
          name: "SignIn",
        });
      }
      next();
    },
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
    beforeEnter: (to, from, next) => {
      if (store.getters["auth/authenticated"]) {
        return next({
          name: "Home",
        });
      }
      next();
    },
  },
  {
    path: "/password-reset",
    name: "PasswordReset",
    component: PasswordReset,
    beforeEnter: (to, from, next) => {
      if (store.getters["auth/authenticated"]) {
        return next({
          name: "Home",
        });
      }
      next();
    },
  },
  {
    path: "/confirm-account",
    name: "ConfirmAccount",
    component: ConfirmAccount,
    beforeEnter: (to, from, next) => {
      if (store.getters["auth/authenticated"]) {
        return next({
          name: "Home",
        });
      }
      next();
    },
  },
  {
    path: "/recover-password/:id",
    name: "RecoverPassword",
    component: RecoverPassword,
    beforeEnter: (to, from, next) => {
      if (store.getters["auth/authenticated"]) {
        return next({
          name: "Home",
        });
      }
      next();
    },
  },
  {
    path: "/:pathMatch(.*)*",
    beforeEnter: (to, from, next) => {
      if (!store.getters["auth/authenticated"]) {
        return next({
          name: "SignIn",
        });
      }
      next();
    },
  },
];

const router = new VueRouter({
  mode: "hash",
  //mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
