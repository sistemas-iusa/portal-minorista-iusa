<template>
  <nav class="navbar navbar-light bg-light" v-if="authenticated">
    <div class="container-fluid">
      <router-link :to="{ name: 'Home' }" class="navbar-brand">
        <img src="img/logo-iusa.svg" />
      </router-link>
      <span class="m-0 p-0"> Portal Minorista IUSA &nbsp;</span>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasDarkNavbar"
        aria-controls="offcanvasDarkNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="offcanvas offcanvas-end text-bg-light"
        tabindex="-1"
        id="offcanvasDarkNavbar"
        aria-labelledby="offcanvasDarkNavbarLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">
            {{ user.name }}
            <p></p>
            <h6 style="text-align: left">{{ user.email }}</h6>
          </h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body" style="text-align: left">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <router-link :to="{ name: 'Home' }" class="nav-link active">
                <i class="fas fa-home icon"></i> Home
              </router-link>
              <router-link
                :to="{ name: 'ClientRequest' }"
                class="nav-link active"
              >
                <i class="fas fa-user-plus icon"></i> Solicitud Cliente IUSA
              </router-link>
            </li>
          </ul>
          <hr />
          <div>
            <div class="d-grid gap-2">
              <button
                class="btn btn-danger btn-block"
                type="submit"
                @click.prevent="signOut"
              >
                <i class="fas fa-sign-out-alt"></i> Cerrar sesión
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
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
          name: "signin",
        });
      });
    },
  },
};
</script>
