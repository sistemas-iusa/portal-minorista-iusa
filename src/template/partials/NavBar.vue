<template>
  <div v-if="authenticated">
    <v-app-bar color="grey darken-3" dark>
      <v-toolbar-title>
        <v-img
          style="width: 100%; height: 100%"
          src="img/logo_iusa_w.svg"
        ></v-img>
      </v-toolbar-title>
      <h5 class="ml-5" style="font-weight: 500; margin-top: 10px">
        IUSA EN LÍNEA
      </h5>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>fas fa-user-circle</v-icon>
      </v-btn>
      <v-btn icon>
        <v-badge :content="messages" :value="messages" color="red" overlap>
          <v-icon>mdi-bell</v-icon>
        </v-badge>
      </v-btn>
      <v-btn icon>
        <v-badge :content="messages" :value="messages" color="green" overlap>
          <v-icon>mdi-cart</v-icon>
        </v-badge>
      </v-btn>
      <v-app-bar-nav-icon x-large @click="drawer = true"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-toolbar
      flat
      style="background-color: red"
      class="d-none d-lg-flex justify-center"
      height="50%;"
      elevation="5"
    >
      <div style="color: #fff">
        <v-btn icon style="color: #fff !important">
          <v-icon>mdi-format-list-bulleted</v-icon>
        </v-btn>
        <label>Generales</label>
      </div>
      <div style="color: #fff">
        <v-btn icon style="color: #fff !important">
          <v-icon>mdi-shopping-outline</v-icon>
        </v-btn>
        <label>Pedidos</label>
      </div>
      <div style="color: #fff">
        <v-btn icon style="color: #fff !important">
          <v-icon>mdi-flare</v-icon>
        </v-btn>
        <label>Consulta</label>
      </div>
      <div style="color: #fff">
        <v-btn icon style="color: #fff !important">
          <v-icon>mdi-trophy-variant-outline</v-icon>
        </v-btn>
        <label>Evaluación de Calidad</label>
      </div>
      <div style="color: #fff">
        <v-btn icon style="color: #fff !important">
          <v-icon>mdi-cart-minus</v-icon>
        </v-btn>
        <label>Productos Descontinuados</label>
      </div>
      <div style="color: #fff">
        <v-btn icon style="color: #fff !important">
          <v-icon>mdi-reload</v-icon>
        </v-btn>
        <label>Actualización de Precios y Productos</label>
      </div>
    </v-toolbar>
    <v-toolbar
      flat
      style="background-color: red"
      class="d-flex d-lg-none justify-center"
      elevation="5"
    >
      <v-btn icon style="color: #fff !important">
        <v-icon>mdi-arrow-expand-down</v-icon>
      </v-btn>
      <v-btn icon style="color: #fff !important">
        <v-icon>mdi-format-list-bulleted</v-icon>
      </v-btn>
      <v-btn icon style="color: #fff !important">
        <v-icon>mdi-store</v-icon>
      </v-btn>
      <v-btn icon style="color: #fff !important">
        <v-icon>mdi-palette-advanced</v-icon>
      </v-btn>
      <v-btn icon style="color: #fff !important">
        <v-icon>mdi-flare</v-icon>
      </v-btn>
      <v-btn icon style="color: #fff !important">
        <v-icon>mdi-account-tie</v-icon>
      </v-btn>
      <v-btn icon style="color: #fff !important">
        <v-icon>mdi-play-box-multiple</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <router-link :to="{ name: 'Home' }" class="nav-link active">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
          </router-link>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Cuenta</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-cart</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Pedido</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-star</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Promociones y descuentos</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-format-list-bulleted-square</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Lista de Precios Vigentes</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-tag-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Productos</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-card-bulleted-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Familias</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-chart-areaspline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Oportunidad de Mercado</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-arrow-collapse-down</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Estados de Cuenta</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-storefront-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Tienda de Éxito</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-water-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Solicitud de Rotulación</v-list-item-title>
          </v-list-item>
          <v-list-item @click.prevent="signOut">
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Cerrar sesión</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data: () => ({
    drawer: false,
    group: null,
    messages: 1,
  }),
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
    }),
  },
  methods: {
    ...mapActions({
      signOutAction: "auth/signOut",
    }),
    signOut() {
      this.signOutAction().then(() => {
        this.$router.replace({
          name: "SignIn",
        });
      });
    },
  },
};
</script>
