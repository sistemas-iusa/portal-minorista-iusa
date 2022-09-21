<template>
  <div class="home">
    <h1>SignIn</h1>
    <form @submit.prevent="submit">
      <div
        class="alert alert-danger"
        role="alert"
        v-if="hasError"
        style="font-weight: 500"
      >
        {{ msg }}.
      </div>
      <p></p>
      <div>
        <label for="email">email </label>
        <input type="email" name="email" id="email" v-model="form.email" />
      </div>
      <p></p>
      <div>
        <label for="password">password </label>
        <input
          type="password"
          name="password"
          id="password"
          v-model="form.password"
        />
      </div>
      <p></p>
      <div>
        <button type="submit">SignIn</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
//import axios from 'axios';
// @ is an alias to /src
export default {
  name: "SignIn",
  components: {},
  data() {
    return {
      procesando: false,
      hasError: false,
      recaptcha: null,
      msg: null,
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions({
      signIn: "auth/signIn",
    }),
    submit() {
      this.signIn(this.form)
        .then(() => {
          this.$router.replace({
            name: "home",
          });
        })
        .catch(() => {
          this.msg = "Usuario y/o contraseña incorrectos";
          this.procesando = false;
          this.hasError = true;
          setTimeout(() => {
            this.hasError = false;
          }, 5000);
          this.form.password = null;
        });
    },
  },
};
</script>
