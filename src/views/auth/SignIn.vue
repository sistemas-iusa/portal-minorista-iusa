<template>
  <v-app id="inspire" style="background-color: #ddd">
    <v-main>
      <v-container fluid fill-height>
        <v-row align="center" justify="center">
          <v-col
            cols="12"
            md="3"
            class="
              red
              accent-3
              mr-n3
              mt-n3
              d-none d-lg-flex
              justify-center
              elevation-10
            "
            style="
              background-color: #fe0106 !important;
              height: 570px;
              border-radius: 19px;
            "
          >
            <v-carousel :show-arrows="false" hide-delimiter-background>
              <v-carousel-item>
                <v-card-text class="white--text mt-5">
                  <p></p>
                  <v-img
                    width="45"
                    src="img/logo_iusa_w.svg"
                    class="mt-n10"
                  ></v-img>
                  <div class="mt-15 mb-15">
                    <img src="img/propuesta-1-x2.svg" alt="" />
                  </div>
                  <p class="text-justify mt-5 mb-12">
                    Bienvenido a <strong>IUSA en línea</strong>, el exclusivo e
                    innovador servicio que <strong>GRUPO IUSA</strong> pone a tu
                    disposición para ayudarte a administrar mejor tu negocio.
                  </p>
                  <p class="text-justify mt-n5 mb-0">
                    <strong>Te ofrece GRANDES beneficios...</strong>
                  </p>
                </v-card-text>
              </v-carousel-item>
              <v-carousel-item>
                <v-card-text class="white--text mt-5">
                  <p></p>
                  <v-img
                    width="45"
                    src="img/logo_iusa_w.svg"
                    class="mt-n10"
                  ></v-img>
                  <br />
                  <p class="text-justify mt-5 mb-12">
                    Te ofrecemos <strong>GRANDES</strong> beneficios:
                  </p>
                  <p class="text-justify mt-n5 mb-12">
                    1.- Consulta
                    <strong>
                      personalizada y actualizada de datos generales</strong
                    >, cartera, facturación, bonos, etc.
                  </p>
                  <p class="text-justify mt-n5 mb-12">
                    2.- <strong>Elaboración de pedidos</strong>, Histórico.
                  </p>
                  <img src="img/banner-login-2.png" alt="" class="mt-n5" />
                </v-card-text>
              </v-carousel-item>
              <v-carousel-item>
                <v-card-text class="white--text mt-5">
                  <p></p>
                  <v-img
                    width="45"
                    src="img/logo_iusa_w.svg"
                    class="mt-n10"
                  ></v-img>
                  <img src="img/banner-login-3.png" alt="" />
                  <p class="text-justify mt-n5 mb-12"></p>
                  <p></p>
                  <p class="text-justify mt-n5 mb-12">
                    3.- Entérate de todas nuestras promociones y conoce los
                    recursos como listas de precios, catálogos...
                    <strong>¡Actualizados!</strong>
                  </p>
                  <p class="text-justify mt-n5 mb-12">
                    <strong
                      >¡Regístrate y disfruta de todos sus beneficios!</strong
                    >
                  </p>
                </v-card-text>
              </v-carousel-item>
            </v-carousel>
          </v-col>
          <v-col col="12" md="4">
            <div
              class="alert alert-warning"
              role="alert"
              v-if="hasError"
              style="font-weight: 500"
            >
              <v-icon style="color: #000" class="mt-n1"> mdi-alert </v-icon>
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
            <v-card
              class="elevation-10"
              style="border-radius: 0px 19px 19px 0px"
            >
              <v-row>
                <v-card-text class="mt-4">
                  <h5
                    class="text-center text--accent-3 mb-2"
                    style="font-weight: 500"
                  >
                    <img src="img/icon-person-badge.svg" />
                    Inicio de Sesión
                  </h5>
                  <v-col cols="12" align="left" justify="left">
                    <form @submit.prevent="submit">
                      <label class="mb-2" style="font-size: 14px"
                        >Usuario:</label
                      >
                      <v-text-field
                        class="mb-n3"
                        placeholder="Ingrese Usuario"
                        type="email"
                        solo
                        v-model="form.email"
                        autofocus
                        required
                      ></v-text-field>
                      <label class="mb-2" style="font-size: 14px"
                        >Contraseña:</label
                      >
                      <v-text-field
                        placeholder="Ingrese Contraseña"
                        solo
                        type="password"
                        v-model="form.password"
                        required
                      ></v-text-field>
                      <div class="text-center mt-n4 mb-1">
                        <vue-recaptcha
                          sitekey="6Lefo8kUAAAAANnsSS5MfvDnzzniSQ0f3Nfc6U_A"
                          @verify="onVerify"
                          @expired="onExpired"
                          class="g-recaptcha"
                        ></vue-recaptcha>
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
                            font-weight: 600;
                            font-size: 16px;
                          "
                        >
                          {{ procesando ? "Validando..." : "Iniciar Sesión" }}
                        </v-btn>
                      </div>
                    </form>
                    <div class="text-center">
                    <v-card-subtitle
                      class="mt-n1 text-center"
                      style="color: #999"
                      ><router-link
                        :to="{ name: 'PasswordReset' }"
                        style="color: rgb(153, 153, 153);text-decoration:none;"
                        >¿Has olvidado tu contraseña?</router-link
                      ></v-card-subtitle
                    >
                    </div>
                    <div class="text-center">
                      <v-card-title class="mt-n15" style="display: inline-block"
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
import VueRecaptcha from "vue-recaptcha";
export default {
  name: "SignIn",
  components: {
    VueRecaptcha,
  },
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
    onVerify: function (response) {
      this.recaptcha = response;
    },
    onExpired: function () {
      this.recaptcha = null;
    },
    submit() {
      if (this.recaptcha != null) {
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
      } else {
        this.hasError = true;
        setTimeout(() => {
          this.hasError = false;
        }, 5000);
        this.msg = "El campo CAPTCHA es obligatorio";
      }
    },
  },
};
</script>

<style scoped>
.v-carousel__controls {
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  bottom: 0;
  display: flex;
  height: 50px;
  justify-content: center;
  list-style-type: none;
  position: absolute;
  width: 100%;
  z-index: 1;
}
.text-center {
  text-align: center;
}

.g-recaptcha {
  display: inline-block;
}
</style>
