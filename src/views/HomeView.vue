<template>
  <v-container fluid class="grey lighten-5">
    <v-row dense>
      <v-col cols="12" sm="6" md="8">
        <v-carousel>
          <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            :src="item.src"
            :href="item.href"
            target="_blank"
          ></v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col cols="6" md="4">
        <v-card>
          <v-img class="white--text align-end" src="img/banner_1.svg"> </v-img>
        </v-card>
        <v-card style="margin-top: 10px">
          <v-img class="white--text align-end" src="img/banner_1.svg"> </v-img>
        </v-card>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col sm="6">
        <!-- <v-card class="pa-2" outlined tile> One of three columns </v-card> -->
        <span style="font-weight: 800">OFERTAS DEL DÍA</span>
        <v-slide-group class="pa-4" active-class="success" show-arrows>
          <v-slide-item v-for="(item, i) in items_product" :key="i">
            <v-card class="mx-auto" max-width="280" style="text-align: left">
              <v-img :src="item.src" width="180px"></v-img>
              <v-card-title>
                <v-chip class="ma-1" color="red" text-color="white">
                  - {{ item.percent }}
                </v-chip>
                <span> {{ item.less }}</span>
              </v-card-title>
              <v-card-subtitle>
                Precio antes <del>{{ item.price }}</del></v-card-subtitle
              >
              <v-card-text>
                <strong>{{ item.name_product }}</strong>
              </v-card-text>
            </v-card>
          </v-slide-item>
        </v-slide-group>
        <span style="color: red; font-size: 12px"
          >Descubre todas las ofertas</span
        >
      </v-col>
      <v-col sm="2" v-for="(item, i) in new_product" :key="i">
        <span style="font-weight: 800">PRODUCTOS NUEVOS</span>
        <v-card class="mx-auto" max-width="280" style="text-align: left">
          <v-img :src="item.src" width="180px"></v-img>
          <v-card-title
            style="
              font-size: 0.875rem;
              font-weight: 400;
              line-height: 1.375rem;
              letter-spacing: 0.0071428571em;
            "
          >
            <strong style="color: rgba(0, 0, 0, 0.6)">
              {{ item.name_product }}
            </strong>
          </v-card-title>
          <v-card-subtitle> {{ item.description }} </v-card-subtitle>
        </v-card>
        <span style="color: red; font-size: 12px"
          >Descubre nuestros productos nuevos</span
        >
        <!-- <v-card class="pa-2" outlined tile> One of three columns </v-card> -->
      </v-col>
      <v-col cols="6" md="4">
        <v-card>
          <v-img class="white--text align-end" src="img/banner_1.svg"> </v-img>
        </v-card>
        <v-card style="margin-top: 10px">
          <v-card-title> SÍGUENOS </v-card-title>
          <v-card-actions style="padding-bottom: 20px">
            <v-btn class="mx-2" small fab dark color="red">
              <v-icon dark> mdi-facebook </v-icon>
            </v-btn>
            <v-btn class="mx-2" small fab dark color="red">
              <v-icon dark> mdi-youtube </v-icon>
            </v-btn>
            <v-btn class="mx-2" small fab dark color="red">
              <v-icon dark> mdi-instagram </v-icon>
            </v-btn>
            <v-btn class="mx-2" small fab dark color="red">
              <v-icon dark> mdi-twitter </v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
        <br />
      </v-col>
    </v-row>
    <p></p>
    <v-container fluid>
      <v-row>
        <v-img class="white--text align-end" src="img/banner_4.svg"> </v-img>
      </v-row>
    </v-container>
    <p></p>
    <v-row>
      <v-col>
        <v-text-field
          append-icon="mdi-magnify"
          label="Buscar producto por SKU"
          filled
          rounded
          dense
        ></v-text-field>
      </v-col>
    </v-row>
    <p></p>
    <v-row dense>
      <p>LO MAS VENDIDO</p>
      <v-col sm="12">
        <v-slide-group class="pa-4" active-class="success" show-arrows>
          <v-slide-item v-for="(item, i) in sold_most" :key="i">
            <v-card class="mx-auto" max-width="300" style="text-align: left">
              <v-card-subtitle>
                <strong>{{ item.name_product }} </strong></v-card-subtitle
              >
              <v-card-subtitle style="margin-top: -30px">
                SKU: {{ item.sku }}</v-card-subtitle
              >
              <v-img :src="item.src" width="200px"></v-img>
              <v-card-subtitle class="d-flex justify-center">
                Empaque: {{ item.pack }}</v-card-subtitle
              >
              <v-card-title
                style="margin-top: -35px"
                class="d-flex justify-center"
              >
                <strong
                  ><span> A {{ item.price }}</span></strong
                >
              </v-card-title>
              <v-card-actions class="d-flex justify-center">
                <v-btn rounded color="primary" dark small>
                  <v-icon left> mdi-cart </v-icon> Agregar al carrito
                </v-btn>
              </v-card-actions>
              <v-card-actions class="d-flex justify-center">
                <v-btn rounded color="success" dark small>
                  <v-icon left> mdi-check </v-icon> Comprar Ahora
                </v-btn>
              </v-card-actions>
              <p></p>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-col>
    </v-row>
    <p></p>
    <v-container class="grey lighten-5">
      <h3>Nuestras Marcas</h3>
      <p></p>
      <h5>Calidad, innovación y experiencia nos respaldan</h5>
    </v-container>
    <v-row>
      <v-slide-group class="pa-4" active-class="success" show-arrows>
        <v-slide-item v-for="(item, i) in brand" :key="i">
          <v-card class="ma-2" style="height: auto">
            <v-img
              class="white--text align-end"
              :src="item.src"
              style="display: block; height: auto; margin: auto; width: 160px"
            >
            </v-img>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        src: "img/slide_01@2x.png",
        href: "https://iusa.com.mx/catalogo_construccion/",
      },
    ],
    new_product: [
      {
        src: "img/618750_1.jpg",
        name_product: "BOMBA PRESURIZADORA IUSA, 3 SERVICIOS",
        description:
          "Por su calidad, es ideal para su uso residencial e incrementa la presión del agua en servicios como lavavajillas o regaderas de alto flujo.",
      },
    ],
    sold_most: [
      {
        src: "img/tuberia-rigida-de-cobre_1.jpg",
        sku: "267193,300749,300747",
        price: "$132.00",
        pack: "1 pzas",
        name_product: "TUBO RÍGIDO CORTO DE COBRE TIPO ”L”, TRAMO DE 1 M",
      },
      {
        src: "img/301716_03.jpg",
        sku: "301716,301715",
        price: "$2,963.00",
        pack: "1 pza",
        name_product: "CORDÓN FLEXIBLE TIPO POT (SPT), 12 AWG - CAJA 100M",
      },
      {
        src: "img/278686_2_1.jpg",
        sku: "210838,210839",
        price: "$4,620.00",
        pack: "1 pza",
        name_product: "CALENTADOR DE RÁPIDA RECUPERACIÓN ENERHIT, 7 L",
      },
      {
        src: "img/618247_4.jpg",
        sku: "618247",
        price: "$499.00",
        pack: "1 pza",
        name_product: "FILTRO DE AGUA CON TECNOLOGÍA DE DISCOS 80 L",
      },
      {
        src: "img/267118_1.jpg",
        sku: "267118",
        price: "$934.00",
        pack: "1 pza",
        name_product:
          "VENTILADOR DE PISO DE 20 CON PERILLA DE TRES VELOCIDADES",
      },
    ],
    items_product: [
      {
        src: "img/267925_1.jpg",
        href: "https://iusa.com.mx/catalogo_construccion/",
        percent: "18%",
        price: "$4,155.00",
        less: "$3,777.00",
        name_product: "CALENTADOR IUSA DE RÁPIDA RECUPERACIÓN, 5L, GAS LP",
      },
      {
        src: "img/lbl-iusa-26_principal.jpg",
        href: "https://iusa.com.mx/catalogo_construccion/",
        percent: "25%",
        price: "$8,522.00",
        less: "$7,747.00",
        name_product: "CALENTADOR SOLAR PRIMO DE TUBOS AL VACÍO",
      },
      {
        src: "img/617035_01.jpg",
        href: "https://iusa.com.mx/catalogo_construccion/",
        percent: "20%",
        price: "$8,236.00",
        less: "$7,100.00",
        name_product: "MOTOBOMBA A GASOLINA PARA ALTA CARGA 6.5 HP",
      },
      {
        src: "img/268458_1.jpg",
        href: "https://iusa.com.mx/catalogo_construccion/",
        percent: "38%",
        price: "$14,800.00",
        less: "$17,168.00",
        name_product: "AIRE ACONDICIONADO MINI SPLIT, MASTERFRIZ 2023",
      },
      {
        src: "img/619049_01.jpg",
        href: "https://iusa.com.mx/catalogo_construccion/",
        percent: "10%",
        price: "$14,800.00",
        less: "$17,168.00",
        name_product: "ROTOMARTILLO 750 W",
      },
    ],
    brand: [
      {
        src: "https://www.iusa.com.mx/assets/logos/marcas/iusa.jpg",
      },
      {
        src: "https://www.iusa.com.mx/assets/logos/marcas/iusacobre.jpg",
      },
      {
        src: "https://www.iusa.com.mx/assets/logos/marcas/iusaconduit.jpg",
      },
      {
        src: "https://www.iusa.com.mx/assets/logos/marcas/iusaflow.jpg",
      },
      {
        src: "https://www.iusa.com.mx/assets/logos/marcas/iusagas.jpg",
      },
      {
        src: "https://www.iusa.com.mx/assets/logos/marcas/iusaplus.jpg",
      },
      {
        src: "https://www.iusa.com.mx/assets/logos/marcas/iusapvc.jpg",
      },
      {
        src: "https://www.iusa.com.mx/assets/logos/marcas/iusatek.jpg",
      },
      {
        src: "https://www.iusa.com.mx/assets/logos/marcas/iusasol.jpg",
      },
      {
        src: "https://www.iusa.com.mx/assets/logos/marcas/enerhit.jpg",
      },
      {
        src: "https://www.iusa.com.mx/assets/logos/marcas/kronius.jpg",
      },
      {
        src: "https://www.iusa.com.mx/assets/logos/marcas/precimex.jpg",
      },
    ],
  }),
};
</script>

<style scoped>
.v-sheet.v-card:not(.v-sheet--outlined) {
  box-shadow: none;
}
</style>
