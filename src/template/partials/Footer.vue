<template>
  <v-footer padless color="grey darken-3" dark>
    <v-col class="text-center" cols="12" style="font-size: 14px">
      <a
        href="https://www.tiendaiusa.com/terminos-y-condiciones"
        target="_blank"
        style="color: #fff; text-decoration: none"
        >Condiciones de Uso</a
      >
      |
      <a
        href="https://www.tiendaiusa.com/aviso-de-privacidad"
        target="_blank"
        style="color: #fff; text-decoration: none"
        >Aviso de Privacidad</a
      >
      <br />
      <span style="color: rgb(153, 153, 153)">
        Todos los derechos reservados a IUSA
        {{ new Date().getFullYear() }}
      </span>
    </v-col>
  </v-footer>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
    }),
  },
  methods: {},
};
</script>
