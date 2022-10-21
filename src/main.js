import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import vuetify from "./plugins/vuetify";

import "../src/assets/css/styles.css";

require("@/store/subscriber");

axios.defaults.baseURL = "https://dev-api-portal-minorista.iusa.com.mx/api";

Vue.config.productionTip = false;

store.dispatch("auth/attempt", localStorage.getItem("token")).then(() => {
  new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App),
  }).$mount("#app");
});
