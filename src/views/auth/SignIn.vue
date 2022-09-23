<template>
  <div class="home">
    <p></p>
    <h2 class="login-header">
      IUSA
      <span class="login-title">EN LÍNEA</span>
    </h2>
    <div class="row justify-content-center">
      <div class="col-lg-4">
        <div class="card rounded-lg m-2 p-2">
          <h4><i class="fas fa-lock"></i> Acceso</h4>
          <form @submit.prevent="submit">
            <div
              class="alert alert-warning"
              role="alert"
              v-if="hasError"
              style="font-weight: 500"
            >
              {{ msg }}.
            </div>
            <p></p>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                v-model="form.email"
                placeholder="Usuario"
                class="form-control"
              />
            </div>
            <p></p>
            <div>
              <input
                type="password"
                name="password"
                id="password"
                v-model="form.password"
                placeholder="Contraseña"
                class="form-control"
              />
            </div>
            <p></p>
            <div>
              <div class="d-grid gap-2">
                <button type="submit" class="btn btn-danger btn-block">
                  Entrar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
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
