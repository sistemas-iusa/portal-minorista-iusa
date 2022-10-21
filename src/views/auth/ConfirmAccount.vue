<template>
  <v-app id="inspire" style="background-color: #ddd">
    <v-main>
      <v-container fluid fill-height>
        <v-row align="center" justify="center">
          <v-col col="12" md="8">
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
                  <img
                    src="img/logo-iusa-solicitud@2x.png"
                    alt=""
                    width="95"
                    class="mt-n5"
                  />
                  <h6>
                    <v-icon style="color: #000">
                      mdi-check-circle-outline
                    </v-icon>
                    <strong> Solicitud de Registro de Cuenta </strong>
                  </h6>
                  <p style="text-align: center" class="mt-5">
                    Se te ha enviado un mensaje por
                    <strong>correo electrónico</strong> favor de dirigirte a tu
                    bandeja de entrada.
                  </p>
                  <p></p>
                  <img src="img/mailing-register.svg" alt="">
                  <p></p>
                </v-card-text>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  name: "ConfirmAccount",
  components: {},
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
