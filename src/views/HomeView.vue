<template>
  <v-container fluid class="grey lighten-5">
    <v-row dense>
      <!---Start col-left-->
      <v-col md="12">
        <v-card class="mx-auto" outlined :style="'border: 0px'">
          <v-list-item class="ma-0">
            <v-col md="4">
              <strong>Bienvenido, </strong>
              <span>{{ data.NAME1 }}</span>
              <span style="color: #979797; font-size: 10px">
                / A 12 Octubre 2022 a las 12:02pm
              </span>
            </v-col>
            <v-col md="8" class="text-justify boder-side-small">
              <br />
              <p>
                <v-icon style="color: red" size="45" dense="true"
                  >mdi-shield-lock-outline</v-icon
                >
                <span class="text-header-anounce">Seguro y</span>
                <v-icon style="color: red" size="45" dense="true"
                  >mdi-cash-multiple</v-icon
                >
                <span class="text-header-anounce">fácil de pagar.</span>
                <span class="text-header-red">¡Vive la experiencia IUSA!</span>
              </p>
            </v-col>
          </v-list-item>
          <v-row class="mt-n5 ma-4">
            <v-col md="2" style="vertical-align: bottom">
              <v-btn icon style="color: #000 !important">
                <v-icon>mdi-filter-outline</v-icon>
              </v-btn>
              <strong>Filtro X Grupo:</strong>
            </v-col>
            <v-col md="2">
              <v-checkbox
                v-model="ex4"
                label="Generar Pedido"
                color="black"
                value="balck"
                class="black-label"
                hide-details
              ></v-checkbox>
            </v-col>
            <v-col md="2">
              <v-checkbox
                v-model="ex4"
                label="Productos"
                color="black"
                value="balck"
                class="black-label"
                hide-details
              ></v-checkbox>
            </v-col>
            <v-col md="2">
              <v-checkbox
                v-model="ex4"
                label="Desempeño"
                class="blue-label"
                color="#0000FF"
                value="#0000FF"
                hide-details
              ></v-checkbox>
            </v-col>
            <v-col md="2">
              <v-checkbox
                v-model="ex4"
                label="Nivel de Servicio"
                class="red-label"
                color="red"
                value="red"
                hide-details
              ></v-checkbox>
            </v-col>
            <v-col md="2">
              <v-checkbox
                v-model="ex4"
                label="Beneficios y Bonos"
                class="gold-label"
                color="#FFD700"
                value="#FFD700"
                hide-details
              ></v-checkbox>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col md="3">
        <!--Start v-Card Datos Generales-->
        <v-card
          class="mx-auto rounded-lg elevation-4"
          outlined
          :style="'border: 4px solid gray;'"
        >
          <v-list-item-content>
            <div class="text-general">
              <v-icon>mdi-account-circle</v-icon>
              DATOS CLIENTE:
            </div>
          </v-list-item-content>
        </v-card>
        <v-card class="mx-auto rounded-xl elevation-5 ma-5" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline mb-4">
                <v-avatar size="100">
                  <img src="img/grupo_trejo.jpeg" alt="Cliente" />
                </v-avatar>
              </div>
              <v-list-item-title class="text-h5 mb-1">
                {{ data.NAME1 }}
                <v-list-item-subtitle> {{ data.KUNNR }} </v-list-item-subtitle>
              </v-list-item-title>
              <br />

              <v-list-item three-line class="ma-5">
                <v-list-item-content>
                  <strong>RFC:</strong><span>{{ data.STCD1 }}</span>
                </v-list-item-content>
                <v-list-item-content>
                  <strong>Alta:</strong><span>22/04/2021</span>
                </v-list-item-content>
              </v-list-item>
              <br />
              <p class="text-justify mt-n5 ma-5">
                <strong>Domicilio Fiscal:</strong>
              </p>
              <br />
              <p class="text-justify mt-n5 ma-5">
                {{ data.ORT01 }}
              </p>
              <br />
              <p class="text-justify mt-n5 ma-5">
                <strong>Domicilio de Entrega:</strong>
              </p>
              <br />
              <p class="text-justify mt-n5 ma-5">
                Jose Maria Rico 102, Col del Valle Centro , Benito Juarez, 03100
                Ciudad de Mexico, CDMX
              </p>

              <v-list-item three-line>
                <v-list-item-content>
                  <p class="text-justify mt-n5 ma-5">
                    <strong>Mun/Del:</strong>
                  </p>
                  <p class="text-justify mt-n5 ma-5">{{ data.VKGRP }}</p>
                </v-list-item-content>
                <v-list-item-content>
                  <p class="text-justify mt-n5 ma-5">
                    <strong>Estado:</strong>
                  </p>
                  <p class="text-justify mt-n5 ma-5">{{ data.REGIO }}</p>
                </v-list-item-content>
              </v-list-item>

              <div class="ma-5" style="color: red !important">
                <v-icon style="color: red">mdi-email</v-icon>
                <span> {{ data.SMTP_ADDR }} </span>
              </div>

              <div style="color: blue !important">
                <a
                  ><v-icon style="color: blue">mdi-bookmark</v-icon>
                  <span> {{ data.TELF1 }}</span></a
                >
              </div>

              <v-layout justify-center>
                <v-switch v-model="switch1" class="green-label"
                  ><template v-slot:label>
                    <span class="pr-2"> El número tiene Whatsapp </span>
                    <v-icon style="color: #25d366">mdi-whatsapp</v-icon>
                  </template></v-switch
                >
              </v-layout>

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
                  Editar
                </v-btn>
              </div>
            </v-list-item-content>
          </v-list-item>
        </v-card>
        <!--End v-card Datos Generales-->
        <!--Start v-card Contactos-->
        <v-card
          class="mx-auto rounded-lg elevation-4 mb-4"
          outlined
          :style="'border: 4px solid gray;'"
        >
          <v-list-item-content>
            <div class="text-general">
              <v-icon>mdi-account-details</v-icon>
              CONTACTO IUSA EN LÍNEA:
            </div>
          </v-list-item-content>
        </v-card>

        <v-card class="mx-auto rounded-lg elevation-4 mb-4" outlined>
          <v-list-item three-line>
            <v-avatar size="50" color="grey">
              <img src="img/banner-login-2.png" alt="Cliente" />
            </v-avatar>
            <v-list-item-content>
              <div class="text-justify ma-2">
                <strong>Asesor:</strong>
                <p>Gabriela Gonzalez Mont</p>
              </div>
            </v-list-item-content>
          </v-list-item>
          <v-list-item-group class="ml-5 mb-4">
            <div class="text-justify ma-1" style="color: blue !important">
              <a
                ><v-icon style="color: blue">mdi-cellphone-check</v-icon>
                <v-icon style="color: #25d366">mdi-whatsapp</v-icon>
                <span> 71-2250-5880</span></a
              >
            </div>
            <div class="text-justify ma-1" style="color: red !important">
              <v-icon style="color: red">mdi-email</v-icon>
              <span> omarmartinez@isua.com.mx</span>
            </div>
          </v-list-item-group>
        </v-card>
        <!--End v-card Contactos-->
        <v-card class="mx-auto rounded-lg elevation-5 ma-5" outlined>
          <v-list-item-content class="text-justify ml-5">
            <div class="mb-n3">
              <strong>SÍGUENOS</strong>
            </div>
          </v-list-item-content>
          <v-list-item three-line>
            <v-list-item-content>
              <a><v-icon style="color: red" size="35">mdi-facebook </v-icon></a>
            </v-list-item-content>
            <v-list-item-content>
              <a><v-icon style="color: red" size="35">mdi-youtube</v-icon></a>
            </v-list-item-content>
            <v-list-item-content>
              <a><v-icon style="color: red" size="35">mdi-instagram</v-icon></a>
            </v-list-item-content>
            <v-list-item-content>
              <a><v-icon style="color: red" size="35">mdi-twitter</v-icon></a>
            </v-list-item-content>
          </v-list-item>
        </v-card>
        <!--End v-card Contactos-->
      </v-col>
      <!---End v-col left-->
      <!---Start v-col center-->
      <v-col md="6">
        <!--Start v-card Estado-->
        <v-card
          class="mx-auto rounded-lg elevation-4 mb-4"
          outlined
          :style="'border: 4px solid #0000FF;'"
        >
          <v-list-item-content>
            <div class="text-desp">
              <v-icon style="color: #0000ff !important"
                >mdi-wallet-plus-outline</v-icon
              >
              CARTERA Y LINEA DE CREDITO:
            </div>
          </v-list-item-content>
        </v-card>
        <v-card class="mx-auto rounded-xl elevation-5 ma-5" outlined>
          <v-list-item three-line>
            <v-list-item-title class="text-h5 mb-2">
              Límite de crédito
              <span
                ><strong>{{ data.KLIMK }}</strong></span
              >
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-progress-linear
              class="rounded-lg"
              v-model="power"
              color="blue"
              height="25"
            >
              <template v-slot:default="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
              </template>
            </v-progress-linear>
          </v-list-item>
          <v-list-item three-line>
            <v-col md="8">
              <div class="text-justify ma-3">
                <p>
                  S.corte <strong>{{ data.SKFOR }}</strong>
                </p>
              </div>
              <div class="text-justify ma-1">
                Estatus folio: <span> Análisis de Credito</span>
                <br />
                Plazo: <span> 30 Días</span>
                <br />
                Monto Vencido: <span> $0.00</span>
                <br />
                Partidas Vencidas: <span> 0</span>
                <br />
                Notas de crédito pendientes de aplicar: <span> $0</span>
                <br />
                Pagos pendientes de aplicar: <span>$0</span>
                <br />
              </div>
            </v-col>
            <v-col md="4">
              <div class="text-justify mb-4">
                <p>S.disponible <strong>$857,265.67</strong></p>
              </div>
              <div class="text-center mb-4">
                <p class="text-big-num">$0.00</p>
                <p>Monto Total</p>
              </div>
            </v-col>
          </v-list-item>
          <v-list-item class="text-center mb-4">
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
              <v-icon>mdi-download</v-icon>
              Estado de Cuenta
            </v-btn>
          </v-list-item>
        </v-card>
        <!--End v-card Estado-->
        <!--Start v-card Historicos-->
        <v-card
          class="mx-auto rounded-lg elevation-4 mb-4"
          outlined
          :style="'border: 4px solid #0000FF;'"
        >
          <v-list-item-content>
            <div class="text-desp">
              <v-icon style="color: #0000ff !important"
                >mdi-clock-time-five-outline</v-icon
              >
              HISTORICO DE COMPRAS
            </div>
          </v-list-item-content>
        </v-card>
        <v-card class="mx-auto rounded-xl elevation-5 ma-5" outlined>
          <v-data-table
            :headers="headers"
            :items="concepto"
            :items-per-page="5"
            item-key="name"
            class="elevation-1"
            locale="esp"
            :footer-props="{
              showFirstLastPage: true,
              firstIcon: 'mdi-arrow-collapse-left',
              lastIcon: 'mdi-arrow-collapse-right',
              prevIcon: 'mdi-minus',
              nextIcon: 'mdi-plus',
            }"
          ></v-data-table>
        </v-card>
        <!--End v-card historico-->
        <!--Start v-card indicadores-->
        <v-card
          class="mx-auto rounded-lg elevation-4 mb-4"
          outlined
          :style="'border: 4px solid #0000FF;'"
        >
          <v-list-item-content>
            <div class="text-desp">
              <v-icon style="color: #0000ff !important">mdi-chart-line</v-icon>
              INDICADORES PARA BONO
            </div>
          </v-list-item-content>
        </v-card>
        <v-card class="mx-auto rounded-xl elevation-5 ma-5" outlined>
          <div class="ma-4">
            <v-list-item three-line class="mb-1 ma-4">
              <v-select
                :items="items"
                label="Pagos Mensuales (Sin IVA):"
                dense
                outlined
              ></v-select>
            </v-list-item>
            <v-list-item>
              <v-progress-linear
                class="rounded-lg"
                v-model="ind_1"
                color="blue"
                height="25"
              >
                <template v-slot:default="{ value }">
                  <strong>{{ Math.ceil(value) }}%</strong>
                </template>
              </v-progress-linear>
            </v-list-item>
            <v-list-item>
              <v-col md="6">
                <div>Ingresos: <strong>$0</strong></div>
              </v-col>
              <v-col md="6">
                <div>Total: <strong>$0</strong></div>
              </v-col>
            </v-list-item>
            <v-list-item-content class="text-center">
              <div><strong>Pagos y Porcentaje Vía TEL (Sin IVA)</strong></div>
            </v-list-item-content>
            <v-list-item>
              <v-progress-linear
                class="rounded-lg"
                v-model="ind_1"
                color="blue"
                height="25"
              >
                <template v-slot:default="{ value }">
                  <strong>{{ Math.ceil(value) }}%</strong>
                </template>
              </v-progress-linear>
            </v-list-item>
            <v-list-item>
              <v-col md="6">
                <div>Ingresos: <strong>$0</strong></div>
              </v-col>
              <v-col md="6">
                <div>Total: <strong>$0</strong></div>
              </v-col>
            </v-list-item>
            <v-list-item-content class="text-center">
              <div><strong>Pagos y Porcentaje Vía SPEI (Sin IVA)</strong></div>
            </v-list-item-content>
            <v-list-item>
              <v-progress-linear
                class="rounded-lg"
                v-model="ind_1"
                color="blue"
                height="25"
              >
                <template v-slot:default="{ value }">
                  <strong>{{ Math.ceil(value) }}%</strong>
                </template>
              </v-progress-linear>
            </v-list-item>
            <v-list-item>
              <v-col md="6">
                <div>Ingresos: <strong>$0</strong></div>
              </v-col>
              <v-col md="6">
                <div>Total: <strong>$0</strong></div>
              </v-col>
            </v-list-item>
            <v-list-item-content class="text-center">
              <div>
                <strong style="color: red"
                  >TOTAL de Pagos y Porcentaje Vía TEL + SPEI:</strong
                >
              </div>
            </v-list-item-content>
            <v-list-item>
              <v-progress-linear
                class="rounded-lg"
                v-model="ind_1"
                color="blue"
                height="25"
              >
                <template v-slot:default="{ value }">
                  <strong>{{ Math.ceil(value) }}%</strong>
                </template>
              </v-progress-linear>
            </v-list-item>
            <v-list-item>
              <v-col md="6">
                <div>Ingresos: <strong>$0</strong></div>
              </v-col>
              <v-col md="6">
                <div>Total: <strong>$0</strong></div>
              </v-col>
            </v-list-item>
          </div>
        </v-card>
        <!--End v-card Indicadores-->
        <!--Star v-card indicadores-crecimiento-->
        <v-card
          class="mx-auto rounded-lg elevation-4 mb-4"
          outlined
          :style="'border: 4px solid #0000FF;'"
        >
          <v-list-item-content>
            <div class="text-desp">
              <v-icon style="color: #0000ff !important">mdi-finance</v-icon>
              INDICADORES DE CRECIMIENTO
            </div>
          </v-list-item-content>
        </v-card>
        <v-card class="mx-auto rounded-xl elevation-5 ma-5" outlined>
          <v-list-item-content class="text-center text-bold">
            <div>
              <strong style="color: green"
                >Crecimiento anual inflacionado acumulado a meses
                completos:</strong
              >
            </div>
          </v-list-item-content>
          <v-list-item three-line>
            <v-list-item-content>
              <p><strong>Enero - Septiembre 2022</strong></p>
              <v-list-item>
                <v-progress-linear
                  class="rounded-lg"
                  v-model="ind_1"
                  color="blue"
                  height="25"
                >
                  <template v-slot:default="{ value }">
                    <strong>{{ Math.ceil(value) }}%</strong>
                  </template>
                </v-progress-linear>
              </v-list-item>
            </v-list-item-content>
            <v-list-item-content>
              <p><strong>Enero - Junio 2022</strong></p>
              <v-list-item>
                <v-progress-linear
                  class="rounded-lg"
                  v-model="ind_1"
                  color="blue"
                  height="25"
                >
                  <template v-slot:default="{ value }">
                    <strong>{{ Math.ceil(value) }}%</strong>
                  </template>
                </v-progress-linear>
              </v-list-item>
            </v-list-item-content>
            <v-list-item-content>
              <p><strong>Enero - Marzo 2022</strong></p>
              <v-list-item>
                <v-progress-linear
                  class="rounded-lg"
                  v-model="ind_1"
                  color="blue"
                  height="25"
                >
                  <template v-slot:default="{ value }">
                    <strong>{{ Math.ceil(value) }}%</strong>
                  </template>
                </v-progress-linear>
              </v-list-item>
            </v-list-item-content>
          </v-list-item>
          <v-list-item-content class="text-center">
            <div>
              <strong style="color: #32cd32"
                >Crecimiento inflacionado últimos 3 meses vs mismos meses año
                anterior:</strong
              >
            </div>
          </v-list-item-content>
          <v-list-item three-line>
            <v-list-item-content>
              <p><strong>Jul-Ag-Sep</strong></p>
              <v-list-item>
                <v-progress-linear
                  class="rounded-lg"
                  v-model="ind_1"
                  color="blue"
                  height="25"
                >
                  <template v-slot:default="{ value }">
                    <strong>{{ Math.ceil(value) }}%</strong>
                  </template>
                </v-progress-linear>
              </v-list-item>
            </v-list-item-content>
            <v-list-item-content>
              <p><strong>Abr-May-Jun</strong></p>
              <v-list-item>
                <v-progress-linear
                  class="rounded-lg"
                  v-model="ind_1"
                  color="blue"
                  height="25"
                >
                  <template v-slot:default="{ value }">
                    <strong>{{ Math.ceil(value) }}%</strong>
                  </template>
                </v-progress-linear>
              </v-list-item>
            </v-list-item-content>
            <v-list-item-content>
              <p><strong>En-Feb-Mar</strong></p>
              <v-list-item>
                <v-progress-linear
                  class="rounded-lg"
                  v-model="ind_1"
                  color="blue"
                  height="25"
                >
                  <template v-slot:default="{ value }">
                    <strong>{{ Math.ceil(value) }}%</strong>
                  </template>
                </v-progress-linear>
              </v-list-item>
            </v-list-item-content>
            <v-list-item-content>
              <p><strong>Oct-Nov-Dic</strong></p>
              <v-list-item>
                <v-progress-linear
                  class="rounded-lg"
                  v-model="ind_1"
                  color="blue"
                  height="25"
                >
                  <template v-slot:default="{ value }">
                    <strong>{{ Math.ceil(value) }}%</strong>
                  </template>
                </v-progress-linear>
              </v-list-item>
            </v-list-item-content>
          </v-list-item>
        </v-card>
        <!--End v-card indicadores-crecimiento-->
      </v-col>
      <!--End v-col center-->
      <!---Start v-col right-->
      <v-col md="3">
        <!--Start v-card tiempo-entrega-->
        <v-card
          class="mx-auto rounded-lg elevation-4 mb-4"
          outlined
          :style="'border: 4px solid red;'"
        >
          <v-list-item-content>
            <div class="text-niv">
              <v-icon style="color: red !important">mdi-calendar-check</v-icon>
              TIEMPO DE ENTREGA DE LOS ÚLTIMOS PEDIDOS
            </div>
          </v-list-item-content>
        </v-card>
        <v-card class="mx-auto rounded-xl elevation-5 ma-5" outlined>
          <v-list-item three-line class="mb-1 ma-4">
            <v-select
              :items="items"
              label="Octubre 2022:"
              dense
              outlined
            ></v-select>
          </v-list-item>
          <v-data-table
            :headers="headers_time"
            :items="time"
            :items-per-page="5"
            item-key="name"
            class="elevation-1"
            locale="esp"
            :footer-props="{
              showFirstLastPage: true,
              firstIcon: 'mdi-arrow-collapse-left',
              lastIcon: 'mdi-arrow-collapse-right',
              prevIcon: 'mdi-minus',
              nextIcon: 'mdi-plus',
            }"
          ></v-data-table>
        </v-card>
        <!--End v-card timepo-entrega-->
        <!--Start v-card niveles-servicio-->
        <v-card
          class="mx-auto rounded-lg elevation-4 mb-4"
          outlined
          :style="'border: 4px solid red;'"
        >
          <v-list-item-content>
            <div class="text-niv">
              <v-icon style="color: red !important">mdi-alarm</v-icon>
              NIVELES DE SERVICIO Y TIEMPO DE ENTREGA
            </div>
          </v-list-item-content>
        </v-card>
        <v-card class="mx-auto rounded-xl elevation-5 ma-5" outlined>
          <v-list-item three-line class="mb-1 ma-4">
            <v-select
              :items="items"
              label="Octubre 2022:"
              dense
              outlined
            ></v-select>
          </v-list-item>
          <v-data-table
            :headers="headers_niv"
            :items="niv"
            :items-per-page="5"
            item-key="name"
            class="elevation-1"
            locale="esp"
            :footer-props="{
              showFirstLastPage: true,
              firstIcon: 'mdi-arrow-collapse-left',
              lastIcon: 'mdi-arrow-collapse-right',
              prevIcon: 'mdi-minus',
              nextIcon: 'mdi-plus',
            }"
          ></v-data-table>
        </v-card>
        <!--End v-card niveles-servicio-->
        <!--start v-card reserva-->
        <v-card
          class="mx-auto rounded-lg elevation-4 mb-4"
          outlined
          :style="'border: 4px solid #DAA520;'"
        >
          <v-list-item-content>
            <div class="text-gold">
              <v-icon style="color: #daa520 !important"
                >mdi-file-document-outline</v-icon
              >
              RESERVA DE GARANTÍA
            </div>
          </v-list-item-content>
        </v-card>
        <v-card class="mx-auto rounded-xl elevation-5 ma-5" outlined>
          <v-list-item three-line class="mb-1 ma-4">
            <v-select
              :items="items"
              label="Octubre 2022:"
              dense
              outlined
            ></v-select>
          </v-list-item>
          <v-data-table
            :headers="headers_res"
            :items="res"
            :items-per-page="5"
            item-key="name"
            class="elevation-1"
            locale="esp"
            :footer-props="{
              showFirstLastPage: true,
              firstIcon: 'mdi-arrow-collapse-left',
              lastIcon: 'mdi-arrow-collapse-right',
              prevIcon: 'mdi-minus',
              nextIcon: 'mdi-plus',
            }"
          ></v-data-table>
        </v-card>
        <!--end v-card reserva-->
        <!--Star v-card bono-->
        <v-card
          class="mx-auto rounded-lg elevation-4 mb-4"
          outlined
          :style="'border: 4px solid #DAA520;'"
        >
          <v-list-item-content>
            <div class="text-gold">
              <v-icon style="color: #daa520 !important"
                >mdi-numeric-3-box-outline</v-icon
              >
              BONO
            </div>
          </v-list-item-content>
        </v-card>
        <v-card class="mx-auto rounded-xl elevation-5 ma-5" outlined>
          <v-list-item three-line class="mb-1 ma-2">
            <v-select
              :items="items"
              label="Octubre 2022:"
              dense
              outlined
            ></v-select>
          </v-list-item>
          <v-data-table
            :headers="headers_bono"
            :items="bono"
            :items-per-page="5"
            item-key="name"
            class="elevation-1"
            locale="esp"
            :footer-props="{
              showFirstLastPage: true,
              firstIcon: 'mdi-arrow-collapse-left',
              lastIcon: 'mdi-arrow-collapse-right',
              prevIcon: 'mdi-minus',
              nextIcon: 'mdi-plus',
            }"
          ></v-data-table>
          <v-list-item-content class="text-center text-bold">
            <div>
              **Los montos de los bonos son por el periodoque se obtuvieron
            </div>
          </v-list-item-content>
        </v-card>
        <!--End v-card nono-->
        <!--Start v-card total-beneficio-->
        <v-card
          class="mx-auto rounded-lg elevation-4 mb-4"
          outlined
          :style="'border: 4px solid #DAA520;'"
        >
          <v-list-item-content>
            <div class="text-gold">
              <v-icon style="color: #daa520 !important"
                >mdi-bookmark-plus-outline</v-icon
              >
              TOTAL DE BENEFICIOS
            </div>
          </v-list-item-content>
        </v-card>
        <v-card class="mx-auto rounded-xl elevation-5 ma-5" outlined>
          <v-list-item three-line class="mb-1 ma-4">
            <v-select
              :items="items"
              label="Octubre 2022:"
              dense
              outlined
            ></v-select>
          </v-list-item>
          <v-data-table
            :headers="headers_ben"
            :items="ben"
            :items-per-page="5"
            item-key="name"
            class="elevation-1"
            locale="esp"
            :footer-props="{
              showFirstLastPage: true,
              firstIcon: 'mdi-arrow-collapse-left',
              lastIcon: 'mdi-arrow-collapse-right',
              prevIcon: 'mdi-minus',
              nextIcon: 'mdi-plus',
            }"
          ></v-data-table>
        </v-card>
        <!--End v-card total-beneficio-->
      </v-col>
      <!---End v-col right-->
    </v-row>
    <p></p>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      data: null,
      switch1: true,
      skill: 20,
      knowledge: 33,
      power: 14,
      ind_1: 0,
      headers: [
        {
          text: "Concepto",
          align: "start",
          value: "name",
        },
        { text: "Octubre 22", value: "month" },
      ],
      concepto: [
        {
          name: "Facturacón neta",
          month: "$0.00",
        },
        {
          name: "Renglonaje Caja / atado del trimestr del día",
          month: "0",
        },
        {
          name: "Renglones nuevos en el trimestre al dia (Total últimos 4 trims 0)",
          month: "0",
        },
        {
          name: "Renglones din re-order en el trimestre a día",
          month: "0",
        },
        {
          name: "Renglones disponibles para pedido especial de PNC",
          month: "12,956",
        },
      ],
      headers_time: [
        {
          text: "Pedidos Totales",
          align: "start",
          value: "name",
        },
        { text: "Promedio de días de entrega", value: "time" },
      ],
      time: [
        {
          name: "Ent en 1 día hábil:",
          time: "(0%)",
        },
        {
          name: "Ent en 2 días hábiles:",
          time: "(0%)",
        },
        {
          name: "Ent en 3 días hábiles:",
          time: "(0%)",
        },
      ],
      headers_niv: [
        {
          text: "Niveles de Servicio",
          align: "start",
          value: "name",
        },
        { text: "Percent", value: "niv" },
      ],
      niv: [
        {
          name: "Nivel de Servicio Primera Factura:",
          niv: "0.0%",
        },
        {
          name: "Nivel de Servicio Real (sin BO repetido):",
          niv: "0.0%",
        },
        {
          name: "Tiempode entrega (días Hábiles):",
          niv: "0.0%",
        },
      ],
      headers_res: [
        {
          text: "Campos",
          align: "start",
          value: "name",
        },
        { text: "Precio", value: "res" },
      ],
      res: [
        {
          name: "Reserva de Garantía:",
          res: "0.0%",
        },
        {
          name: "Notas de devolución:",
          res: "0.0%",
        },
      ],
      headers_bono: [
        {
          text: "Bono",
          align: "start",
          value: "name",
        },
        { text: "Estatus", value: "est" },
      ],
      bono: [
        {
          name: "Bono x Pago Anticipado**:",
          est: "Pendiente",
        },
        {
          name: "Bono x Apoyo a la Marca:",
          est: "Pendiente",
        },
      ],
      headers_ben: [
        {
          text: "Beneficios",
          align: "start",
          value: "name",
        },
        { text: "Estatus", value: "est" },
      ],
      ben: [
        {
          name: "% de beneficios adicionales:",
          est: "Pendiente",
        },
        {
          name: "Total de beneficios adicionales:",
          est: "Pendiente",
        },
      ],
    };
  },
  async mounted() {
    let self = this;
    self.getCustomerInformation();
  },
  methods: {
    getCustomerInformation() {
      axios
        .post("getCustomerInformation", {
          client_code: "0000002674",
          society: "217",
          organization: "IUS2",
          channel: "DT",
        })
        .then((response) => {
          console.log(response.data);
          this.data = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style scoped>
.v-sheet.v-card:not(.v-sheet--outlined) {
  box-shadow: none;
}
</style>