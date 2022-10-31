<template>
  <v-app id="inspire" style="background-color: #ddd">
    <v-main>
      <v-container fluid fill-height>
        <v-row align="center" justify="center">
          <v-col col="12" md="8">
            <div
              class="alert alert-danger"
              role="alert"
              v-if="hasError"
              style="font-weight: 500"
            >
              {{ msg }}
            </div>
            <v-card
              class="elevation-10"
              style="
                padding-left: 50px;
                padding-right: 50px;
                padding-bottom: 10px;
                margin-top: 20px;
                border-radius: 19px;
              "
              v-if="!send"
            >
              <v-row>
                <v-card-text class="mt-7">
                  <router-link :to="{ name: 'Home' }">
                    <img
                      src="img/propuesta-1-x2.svg"
                      alt=""
                      width="200"
                      class="mt-n5"
                    />
                  </router-link>
                  <h6 class="mt-5 mb-5">
                    <v-icon style="color: #000"> mdi-lock </v-icon>
                    <strong> Restablecimiento de Contraseña </strong>
                  </h6>
                  <p style="text-align: center" class="mt-5">
                    Pon tu <strong>nombre de usuario de IUSA</strong> en línea o
                    la dirección de correo <strong>electrónico</strong> que
                    usaste para registrarte. Te enviaremos un mensaje con tu
                    nombre de usuario y un enlace para restablecer tu
                    contraseña.
                  </p>
                  <p></p>
                  <form @submit.prevent="submit">
                    <v-row align="center" justify="center">
                      <v-col col="12" md="8" style="text-align: left">
                        <label class="mb-2" style="font-size: 14px"
                          >Usuario / Email:</label
                        >
                        <v-text-field
                          placeholder="Ingrese Usuario / Email"
                          type="email"
                          solo
                          v-model="form.email"
                          autofocus
                          required
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <div class="text-center mt-n5">
                      <vue-recaptcha
                        sitekey="6Lefo8kUAAAAANnsSS5MfvDnzzniSQ0f3Nfc6U_A"
                        @verify="onVerify"
                        @expired="onExpired"
                        class="g-recaptcha"
                      ></vue-recaptcha>
                    </div>
                    <v-row align="center" justify="center" class="mt-0 mb-5">
                      <v-col col="12" md="8">
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
                            {{ procesando ? "Validando..." : "Enviar" }}
                          </v-btn>
                        </div>
                      </v-col>
                    </v-row>
                  </form>
                  <p></p>
                  <span
                    >Si aún necesitas ayuda, ponte en contacto con el
                    <strong style="color: red"
                      >Soporte IUSA en línea.</strong
                    ></span
                  >
                  <p></p>
                  <div class="text-center mb-5">
                    <span style="font-weight: 800">Contáctanos:</span>
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
                </v-card-text>
              </v-row>
            </v-card>
            <v-card
              class="elevation-10"
              style="
                padding-left: 50px;
                padding-right: 50px;
                padding-bottom: 10px;
                margin-top: 20px;
              "
              v-if="send"
            >
              <v-row>
                <v-card-text class="mt-7">
                  <router-link :to="{ name: 'Home' }">
                    <img
                      src="img/propuesta-1-x2.svg"
                      alt=""
                      width="200"
                      class="mt-n5"
                    />
                  </router-link>
                  <h6 class="mt-5 mb-5">
                    <v-icon style="color: #000"> mdi-lock </v-icon>
                    <strong> Restablecimiento de Contraseña </strong>
                  </h6>
                  <p style="text-align: center" class="mt-5">
                    Se te ha enviado un mensaje por
                    <strong>correo electrónico</strong> con instrucciones sobre
                    cómo restablecer tu contraseña.
                  </p>
                  <img src="img/mailing-password.svg" alt="" />
                  <p></p>
                  <a href="" style="color: rgb(47, 212, 16); font-weight: 700"
                    >Ir a login.</a
                  >
                  <p></p>
                </v-card-text>
              </v-row>
            </v-card>
            <div class="text-center ma-2">
              <v-snackbar v-model="snackbar" :timeout="timeout">
                {{ msg }}
                <template v-slot:action="{ attrs }">
                  <v-btn
                    color="red"
                    text
                    v-bind="attrs"
                    @click="snackbar = false"
                  >
                    Close
                  </v-btn>
                </template>
              </v-snackbar>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import VueRecaptcha from "vue-recaptcha";
import axios from "axios";
export default {
  name: "PasswordReset",
  components: {
    VueRecaptcha,
  },
  data() {
    return {
      snackbar: false,
      procesando: false,
      hasError: false,
      recaptcha: null,
      msg: null,
      timeout: 8000,
      form: {},
      send: false,
    };
  },
  methods: {
    onVerify: function (response) {
      this.recaptcha = response;
    },
    onExpired: function () {
      this.recaptcha = null;
    },
    submit() {
      this.procesando = true;
      if (this.recaptcha != null) {
        axios
          .post("forgottenPassword", this.form)
          .then((response) => {
            console.log(response.data.error);
            if (response.data.error) {
              this.procesando = false;
              this.msg = response.data.error;
              this.hasError = true;
              this.snackbar = true;
              setTimeout(() => {
                this.hasError = false;
              }, 8000);
            } else {
              this.form.email = null;
              this.recaptcha = null;
              this.send = true;
              /* this.$router.replace({
                name: "ConfirmAccount",
              }); */
            }
          })
          .catch((error) => {
            alert(error);
          })
          .finally(() => (this.loading = false));
      } else {
        this.hasError = true;
        this.snackbar = true;
        this.procesando = false;
        setTimeout(() => {
          this.hasError = false;
        }, 8000);
        this.msg = "El campo CAPTCHA es obligatorio.";
      }
    },
  },
};
</script>

<style scoped>
.text-center {
  text-align: center;
}

.g-recaptcha {
  display: inline-block;
}
</style>

