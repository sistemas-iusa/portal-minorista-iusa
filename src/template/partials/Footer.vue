<template>
  <v-footer padless color="grey darken-3" dark>
    <v-col class="text-center" cols="12">
      {{ new Date().getFullYear() }} — <strong>IUSA</strong>
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
