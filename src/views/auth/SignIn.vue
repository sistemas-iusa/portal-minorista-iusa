<template>
  <v-app id="inspire" style="background-color: #ddd">
    <v-main>
      <v-container fluid fill-height>
        <v-row align="center" justify="center">
          <v-col
            cols="12"
            md="3"
            class="red accent-3 mr-n3 mt-n3 d-none d-lg-flex justify-center"
            style="background-color: #fe0106 !important; height: 510px"
          >
            <v-card-text class="white--text mt-5">
              <p></p>
              <v-img
                width="45"
                src="img/logo_iusa_w.svg"
                class="mt-n10"
              ></v-img>
              <img src="img/banner-login-1.png" alt="" />
              <p class="text-justify mt-5 mb-12">
                <strong>Bienvenido a IUSA en línea</strong>, el exclusivo e
                innovador servicio que <strong>GRUPO IUSA</strong> pone a tu
                disposición para ayudarte a administrar mejor tu negocio.
              </p>
              <p class="text-justify mt-n5 mb-0">
                <strong>Te ofrece GRANDES beneficios...</strong>
              </p>
              <div>
                <v-icon
                  dense
                  color="white"
                  class="mt-10 mr-1"
                  style="font-size: 18px"
                >
                  mdi-checkbox-blank-circle
                </v-icon>
                <v-icon
                  dense
                  color="white"
                  class="mt-10 mr-1"
                  style="font-size: 18px"
                >
                  mdi-checkbox-blank-circle-outline
                </v-icon>
                <v-icon
                  dense
                  color="white"
                  class="mt-10"
                  style="font-size: 18px"
                >
                  mdi-checkbox-blank-circle-outline
                </v-icon>
              </div>
            </v-card-text>
          </v-col>
          <v-col col="12" md="4">
            <div
              class="alert alert-danger"
              role="alert"
              v-if="hasError"
              style="font-weight: 500"
            >
              {{ msg }}.
            </div>
            <v-toolbar
              dark
              color="primary"
              class="d-flex d-lg-none justify-center mb-0"
              style="background-color: #fe0106 !important"
            >
              <v-img width="32" src="img/logo_iusa_w.svg" class="mb-3"></v-img
              ><v-toolbar-title class="mb-3 ml-4"
                ><strong>IUSA en línea</strong></v-toolbar-title
              >
            </v-toolbar>
            <v-card class="elevation-10">
              <v-row>
                <v-card-text class="mt-7">
                  <h4 class="text-center text--accent-3 mb-4">
                    <img src="img/icon-person-badge.svg" />
                    Inicio de Sesión
                  </h4>
                  <v-col cols="12" align="left" justify="left">
                    <form @submit.prevent="submit">
                      <label class="mb-2" style="font-size: 14px"
                        >Usuario</label
                      >
                      <v-text-field
                        placeholder="Ingrese Usuario"
                        type="email"
                        solo
                        v-model="form.email"
                        autofocus
                        required
                      ></v-text-field>
                      <label class="mb-2" style="font-size: 14px"
                        >Contraseña</label
                      >
                      <v-text-field
                        placeholder="Ingrese Contraseña"
                        solo
                        type="password"
                        v-model="form.password"
                        required
                      ></v-text-field>
                      <div class="text-center">
                        <v-card-title
                          class="mt-n5"
                          style="display: inline-block"
                          ><router-link
                            :to="{ name: 'SignUp' }"
                            class="nav-link active"
                            style="color: #000"
                          >
                            <v-icon dense color="black" class="mr-1">
                              mdi-square-edit-outline
                            </v-icon>
                            <span class="text-decoration-underline"
                              >Regístrate</span
                            ></router-link
                          ></v-card-title
                        >
                      </div>
                      <div class="text-center">
                        <v-btn
                          type="submit"
                          rounded
                          block
                          style="
                            background-color: #2fd410;
                            color: #fff;
                            text-transform: none;
                            font-weight: 800;
                          "
                        >
                          {{ procesando ? "Validando..." : "Iniciar Sesión" }}
                        </v-btn>
                      </div>
                    </form>
                    <v-card-subtitle
                      class="mt-1 text-center"
                      style="color: #999"
                      ><router-link
                        :to="{ name: 'PasswordReset' }"
                        class="nav-link active"
                        style="color: rgb(153, 153, 153)"
                        ><span>¿Has olvidado tu contraseña?</span></router-link
                      ></v-card-subtitle
                    >
                  </v-col>
                </v-card-text>
              </v-row>
              <div class="text-center mt-n8">
                <a
                  href="https://wa.me/5215551181585"
                  target="_blank"
                  style="text-decoration: none; color: #4caf50 !important"
                >
                  <v-btn class="mx-2" fab color="success" outlined small>
                    <v-icon>mdi-whatsapp</v-icon>
                  </v-btn>
                </a>
                <a
                  href="mailto:omartinez@iusa.com.mx"
                  target="_blank"
                  style="text-decoration: none; color: #1976d2 !important"
                >
                  <v-btn class="mx-2" fab color="primary" outlined small>
                    <v-icon>mdi-email-outline</v-icon>
                  </v-btn>
                </a>
              </div>
              <v-card-actions> </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
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
      this.procesando = true;
      this.signIn(this.form)
        .then(() => {
          this.$router.replace({
            name: "Home",
          });
        })
        .catch((err) => {
          this.msg = err.response.data[0];
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
