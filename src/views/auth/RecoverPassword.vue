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
            <form @submit.prevent="submit">
              <v-card
                class="elevation-10"
                style="
                  padding-left: 50px;
                  padding-right: 50px;
                  padding-bottom: 10px;
                  margin-top: 20px;
                "
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
                      <v-icon style="color: #000"> mdi-key </v-icon>
                      <strong> Volver a establecer contraseña </strong>
                    </h6>
                    <p></p>
                    <form @submit.prevent="submit">
                      <v-row align="center" justify="center">
                        <v-col col="12" md="8" style="text-align: left">
                          <label class="mb-2" style="font-size: 14px"
                            >Nueva Contraseña:</label
                          >
                          <v-text-field
                            placeholder="Ingrese nueva contraseña"
                            type="password"
                            solo
                            v-model="form.password"
                            autofocus
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col
                          col="12"
                          md="8"
                          style="text-align: left"
                          class="mt-n5"
                        >
                          <label class="mb-2" style="font-size: 14px"
                            >Confirmar Nueva Contraseña:</label
                          >
                          <v-text-field
                            placeholder="Confirmar nueva contraseña"
                            type="password"
                            solo
                            v-model="form.confirm_password"
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
                      >Si necesitas ayuda, ponte en contacto con el
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
            </form>
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
  name: "RecoverPassword",
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
      form: {
        id: this.$route.params.id,
        password: "",
        confirm_password: "",
      },
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
          .post("confirmPassword", this.form)
          .then((response) => {
            console.log(response);
            alert("Contraseña actualizada");
            this.procesando = false;
            this.form.password = null;
            this.form.confirm_password = null;
            this.$router.replace({
              name: "Home",
            });
          })
          .catch((error) => {
            if (error.response.data.errors) {
              this.procesando = false;
              this.msg = error.response.data.errors;
              this.hasError = true;
              this.snackbar = true;
              setTimeout(() => {
                this.hasError = false;
              }, 8000);
            }
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