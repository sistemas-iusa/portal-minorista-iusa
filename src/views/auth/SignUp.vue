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
                    <v-icon style="color: #000">
                      mdi-check-circle-outline
                    </v-icon>
                    <strong> Registro de Cuenta</strong>
                  </h6>
                  <p style="text-align: center">
                    IUSA en línea es un sistema que te permite
                    <strong
                      >consultar información relevante sobre tus compras,
                      estadísticas, avance de tus bonos, pagos, cartera,
                      pedidos, etc.</strong
                    >
                    en cualquier momento y desde cualquier lugar, con la cual
                    podrás tomar mejores decisiones sobre tus pedidos y así
                    aumentar tus ventas.
                    <strong
                      >Además IUSA en línea te permite cargar pedidos
                      directamente de tu sistema o capturarlos en tu
                      tienda.</strong
                    >
                  </p>
                  <form @submit.prevent="submit">
                    <v-row align="center" justify="center">
                      <v-col cols="12" md="6" align="left" justify="left">
                        <label for="" class="mb-2">Fecha de nacimiento *</label>
                        <v-text-field
                          solo
                          placeholder="Ingrese DD/MM/AAAA"
                          type="date"
                          v-model="form.birthday"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="6" align="left" justify="left">
                        <label for="" class="mb-2">Contraseña *</label>
                        <v-text-field
                          solo
                          placeholder="Ingrese Contraseña"
                          type="password"
                          v-model="form.password"
                          required
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row class="mt-n10">
                      <v-col cols="12" sm="6" align="left" justify="left">
                        <label for="" class="mb-2">E-mail *</label>
                        <v-text-field
                          solo
                          type="email"
                          placeholder="Ingrese E-mail"
                          v-model="form.email"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" align="left" justify="left">
                        <label for="" class="mb-3">Logo</label>
                        <v-file-input
                          placeholder="Seleccionar archivo"
                          outlined
                          dense
                          append-outer-icon="mdi-image"
                          prepend-icon=""
                          v-model="form.file"
                        ></v-file-input>
                      </v-col>
                    </v-row>
                    <v-row class="mt-n10">
                      <v-col cols="12" sm="6" align="left" justify="left">
                        <label for="" class="mb-2">Confirmar E-mail *</label>
                        <v-text-field
                          solo
                          placeholder="Confirmar E-mail"
                          type="email"
                          v-model="form.verify_email"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" align="left" justify="left">
                        <label for="" class="mb-2">Teléfono *</label>
                        <v-text-field
                          solo
                          placeholder="Ingrese Teléfono"
                          type="tel"
                          v-model="form.telephone"
                          required
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row class="mt-n10">
                      <v-col cols="12" sm="6" align="left" justify="left">
                        <label for="" class="mb-2">Nombre *</label>
                        <v-text-field
                          solo
                          placeholder="Ingrese Nombre"
                          v-model="form.firstname"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        align="left"
                        justify="left"
                        class="mt-n7"
                      >
                        <v-container class="px-0" fluid>
                          <v-switch v-model="form.whatsapp">
                            <template v-slot:label>
                              ¿El número tiene WhatsApp? &nbsp;
                              <v-icon> mdi-whatsapp </v-icon>
                            </template>
                          </v-switch>
                        </v-container>
                      </v-col>
                    </v-row>
                    <v-row
                      class="mt-n10"
                      align="center"
                      justify="center"
                      style="color: rgb(153, 153, 153)"
                    >
                      <v-col col="12" md="8">
                        <v-checkbox
                          :label="`Compartir mis datos de registro con los proveedores de contenidos de IUSA en línea para fines de marketing.`"
                          v-model="form.share_personal_data"
                          style="margin-left: 40px"
                        ></v-checkbox>
                        <v-checkbox
                          :label="`No quiero recibir mensajes de marketing de IUSA en línea.`"
                          v-model="form.marketing_messages"
                          style="margin-left: 40px"
                          class="mt-n3"
                        ></v-checkbox>
                        <p>*Son campos requeridos, favor de llenarlos.</p>
                      </v-col>
                    </v-row>
                    <v-row class="mt-n5" style="color: rgb(153, 153, 153)">
                      <p>
                        Al hacer click en registrar, acepta los
                        <strong style="color: red">
                          <a
                            href="https://www.tiendaiusa.com/terminos-y-condiciones"
                            target="_blank"
                            >Términos y condiciones de uso
                          </a></strong
                        >de IUSA en línea.
                      </p>
                    </v-row>
                    <v-row style="color: rgb(153, 153, 153)" class="mt-n1">
                      <p>
                        Para obtener más información acerca de cómo IUSA en
                        línea recopila, utiliza, comparte y protege tus datos
                        personales, consulta nuestra
                        <strong style="color: red"
                          ><a
                            href="https://www.tiendaiusa.com/aviso-de-privacidad"
                            target="_blank"
                          >
                            Política de privacidad
                          </a></strong
                        >
                        de IUSA en línea.
                      </p>
                    </v-row>
                    <div class="text-center mt-3">
                      <vue-recaptcha
                        sitekey="6Lefo8kUAAAAANnsSS5MfvDnzzniSQ0f3Nfc6U_A"
                        @verify="onVerify"
                        @expired="onExpired"
                        class="g-recaptcha"
                      ></vue-recaptcha>
                    </div>
                    <v-col cols="12" align="left" justify="left">
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
                          {{ procesando ? "Validando..." : "Registrar" }}
                        </v-btn>
                      </div>
                      <v-card-subtitle
                        class="mt-1 text-center"
                        style="color: #999"
                        ><router-link
                          :to="{ name: 'PasswordReset' }"
                          class="nav-link active"
                          style="color: rgb(153, 153, 153)"
                          ><span
                            >Si aún necesitas ayuda, ponte en contacto con el
                            <strong style="color: red"
                              >Soporte IUSA en línea.</strong
                            ></span
                          ></router-link
                        ></v-card-subtitle
                      >
                    </v-col>
                  </form>
                </v-card-text>
              </v-row>
              <div class="text-center mt-n8">
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
              <v-card-actions> </v-card-actions>
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
  name: "SignUp",
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
        birthday: "",
        password: "",
        email: "",
        file: [],
        verify_email: "",
        telephone: "",
        firstname: "",
        whatsapp: false,
        share_personal_data: false,
        marketing_messages: false,
      },
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
      if (this.recaptcha != null) {
        axios
          .post("register", this.form)
          .then((response) => {
            console.log(response);
            this.form = {};
            this.recaptcha = null;
            this.$router.replace({
              name: "ConfirmAccount",
            });
          })
          .catch((error) => {
            if (error.response.data.errors) {
              this.msg = error.response.data.errors;
              this.hasError = true;
              this.snackbar = true;
              setTimeout(() => {
                this.hasError = false;
              }, 8000);
            } else {
              alert(error);
            }
          })
          .finally(() => (this.loading = false));
      } else {
        this.hasError = true;
        this.snackbar = true;
        setTimeout(() => {
          this.hasError = false;
        }, 8000);
        this.msg = "El campo reCAPTCHA es obligatorio.";
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
