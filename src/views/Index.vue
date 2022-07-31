<template>
  <div class="wrapper">
    <parallax class="page-header header-filter" :style="headerStyle">
      <div class="mt-5 space-110" />
      <div class="mt-5 space-110" />
      <div class="space-50" />
      <div class="row" style="width: 100%">
        <div class="col-1" />
        <div class="col-11">
          <div class="row">
            <h1 class="headerTitle">
              TODO LISTO PARA <br />
              NUTRIR BIEN TU CUERPO
            </h1>
          </div>
        </div>
      </div>

      <div class="row" style="width: 100%">
        <div class="col-1" />
        <div class="col-6">
          <p class="headerText">
            Encuentra opciones deliciosas cercanas sin importar tu tipo de
            dieta.
          </p>
        </div>
      </div>
      <div class="space-50" />
      <div class="row my-5" style="margin: 0 10rem">
        <div
          class="col-3 py-3 px-4 bg-white"
          style="border-radius: 15px 0px 0px 15px"
        >
          <div class="componentLabel">Tipo de comida</div>
          <div>
            <input
              type="text"
              id=""
              placeholder="Ej. Desayuno"
              class="componentInput"
            />
          </div>
        </div>
        <div class="col-3 py-3 px-4 bg-white">
          <div class="componentLabel">Dieta</div>
          <div>
            <input
              type="text"
              id=""
              placeholder="Ej. Vegana"
              class="componentInput"
            />
          </div>
        </div>
        <div class="col-2 bg-white py-3" style="border-radius: 0px 0px 0px 0px">
          <div class="componentLabel">Ubicación</div>
          <div>
            <input
              type="text"
              id=""
              placeholder="Ej. Chihuahua"
              class="componentInput"
            />
          </div>
        </div>
        <div
          class="col-2 bg-white py-3"
          style="border-radius: 0px 15px 15px 0px"
        >
          <div class="componentLabel"></div>
          <div>
            <button class="mainButton ml-auto" style="">Buscar</button>
          </div>
        </div>
      </div>
    </parallax>

    <div class="main main-raised">
      <div class="section section-basic" style="background: #f5f5f5">
        <div class="container">
          <div class="title center">
            <h2 class="mainTitle">Proveedores Greenies</h2>
            <label for="" class="subtitleText space-100">
              Conoce los proveedores más solicitados</label
            >
          </div>

          <div class="row">
            <!-- card 1 -->
            <div class="col-3">
              <div class="card">
                <img
                  src="@/assets/img/Frenchtoast.png"
                  class="card-img-top"
                  alt="..."
                />
                <div
                  class="card-body"
                  style="box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)"
                >
                  <p style="margin: 0px 0px 0px 0px" class="cardTitle mt-2">
                    Oui Oui Breakfast
                  </p>
                  <p style="margin: 0px 0px 0px 0px" class="cardSubtitle mt-1">
                    Juárez, Chihuahua
                  </p>
                  <div class="space-50">
                    <img src="@/assets/img/Estrella.svg" />
                    <img src="@/assets/img/Estrella.svg" class="px-1" />
                    <img src="@/assets/img/Estrella.svg" />
                    <label for="" class="cardReviewText">(3 reseñas)</label>
                  </div>
                  <div class="mt-2">
                    <a href="#" class="cardShowMore" style="color: #000"
                      >Ver más ></a
                    >
                  </div>
                </div>
              </div>
            </div>
            <!-- card 2 -->
            <div class="col-3">
              <div class="card">
                <img
                  src="@/assets/img/Donas.png"
                  class="card-img-top"
                  alt="..."
                />
                <div
                  class="card-body"
                  style="box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)"
                >
                  <p style="margin: 0px 0px 0px 0px" class="cardTitle mt-2">
                    La Dona Keto
                  </p>
                  <p style="margin: 0px 0px 0px 0px" class="cardSubtitle mt-1">
                    Chihuahua, Chihuahua
                  </p>
                  <div class="space-50">
                    <img src="@/assets/img/Estrella.svg" />
                    <img src="@/assets/img/Estrella.svg" class="px-1" />
                    <img src="@/assets/img/Estrella.svg" />
                    <label for="" class="cardReviewText">(10 reseñas)</label>
                  </div>
                  <div class="mt-2">
                    <a href="#" class="cardShowMore" style="color: #000"
                      >Ver más ></a
                    >
                  </div>
                </div>
              </div>
            </div>
            <!-- card 3 -->
            <div class="col-3">
              <div class="card">
                <img
                  src="@/assets/img/Paletas.png"
                  class="card-img-top"
                  alt="..."
                />
                <div
                  class="card-body"
                  style="box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)"
                >
                  <p style="margin: 0px 0px 0px 0px" class="cardTitle mt-2">
                    Green Pop
                  </p>
                  <p style="margin: 0px 0px 0px 0px" class="cardSubtitle mt-1">
                    Delicias, Chihuahua
                  </p>
                  <div class="space-50">
                    <img src="@/assets/img/Estrella.svg" />
                    <img src="@/assets/img/Estrella.svg" class="px-1" />
                    <img src="@/assets/img/Estrella.svg" />
                    <img src="@/assets/img/Estrella.svg" class="px-1" />
                    <label for="" class="cardReviewText">(10 reseñas)</label>
                  </div>
                  <div class="mt-2">
                    <a href="#" class="cardShowMore" style="color: #000"
                      >Ver más ></a
                    >
                  </div>
                </div>
              </div>
            </div>
            <!-- card 4 -->
            <div class="col-3">
              <div class="card">
                <img
                  src="@/assets/img/Avotoast.png"
                  class="card-img-top"
                  alt="..."
                />
                <div
                  class="card-body"
                  style="box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)"
                >
                  <p style="margin: 0px 0px 0px 0px" class="cardTitle mt-2">
                    Avo Place
                  </p>
                  <p style="margin: 0px 0px 0px 0px" class="cardSubtitle mt-1">
                    Chihuahua, Chihuahua
                  </p>
                  <div class="space-50">
                    <img src="@/assets/img/Estrella.svg" />
                    <img src="@/assets/img/Estrella.svg" class="px-1" />
                    <label for="" class="cardReviewText">(12 reseñas)</label>
                  </div>
                  <div class="mt-2">
                    <a href="#" class="cardShowMore" style="color: #000"
                      >Ver más ></a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="center mt-5 subtitleText">
            <a href="#" style="color: #000">Ver más ></a>
          </div>
        </div>
      </div>
    </div>

    <!-- Lugares para todo tipos de dietas -->

    <div class="section section-navbars">
      <div class="container">
        <div class="title center">
          <h2 class="mainTitle">Lugares para todo tipo de dietas</h2>
          <br />
        </div>

        <!-- icons -->
        <div class="row">
          <div class="col-2" />
          <div class="col-2 center">
            <div>
              <img src="@/assets/img/Meat.svg" fluid alt="Fluid image" />
            </div>
            <div>
              <label for="">Protéica</label>
            </div>
          </div>
          <div class="col-2 center">
            <div>
              <img src="@/assets/img/Carrot.svg" fluid alt="Fluid image" />
            </div>
            <div>
              <label for="">Vegetariana</label>
            </div>
          </div>
          <div class="col-2 center">
            <div>
              <img src="@/assets/img/Fish.svg" fluid alt="Fluid image" />
            </div>
            <div>
              <label for="">Pescetariana</label>
            </div>
          </div>
          <div class="col-2 center">
            <div>
              <img src="@/assets/img/Egg.svg" fluid alt="Fluid image" />
            </div>
            <div>
              <label for="">Keto</label>
            </div>
          </div>
          <div class="col-2" />
        </div>
        <div class="space-50"></div>
        <hr />
        <div class="space-50"></div>
        <!-- social media -->
        <div class="center">
          <div>
            <label for="" class="subtitleText"
              >¡Siguenos en nuestras redes sociales!</label
            >
          </div>

          <div class="mt-4">
            <img
              src="@/assets/img/Facebook_grande.svg"
              fluid
              alt="Fluid image"
            />
            <img
              src="@/assets/img/Instagram_grande.svg"
              fluid
              alt="Fluid image"
              class="px-2"
            />
          </div>
        </div>

        <div class="space-100"></div>
      </div>
    </div>
    <!-- jumbotron -->
    <div class="section section-javascript">
      <div class="">
        <div>
          <b-jumbotron class="jumbotronImage page-header" :style="jumboStyle">
            <div class="container">
              <div class="space-100" />
              <div class="space-30" />
              <h2 class="jumbotronTitle">Únete a la red de Mr. Greenie</h2>
              <div class="space-70" />
              
              <div class="row">
                <div class="col-6">
                  <p class="jumboText700">
                    Se parte del directorio de Mr. Greenie y deja que más
                    comensales lleguen a ti.
                  </p>
                  <p class="jumboText400 mt-5">
                    Estar registrado en nuestra red es gratuito.
                  </p>
                  <div class="space-50"></div>
                  <div class="center">
                    <button class="jumboButton">Unirme</button>
                  </div>
                </div>
                <div class="col-6 center">
                  <div class="space-30"></div>
                  <img
                    src="@/assets/img/Greenie_grande.png"
                    fluid
                    alt="Fluid image"
                  />
                </div>
              </div>
            </div>
          </b-jumbotron>
        </div>
      </div>
    </div>

    <div class="section section-navbars">
      <div class="container">
        <div class="title center">
          <h2 class="mainTitle">Cobertura Mr Greenie</h2>
          <br />
          <label for="" class="subtitleText">¡Estamos en todo México!</label>
          
        </div>
        <!-- <small-navigation></small-navigation> -->
      </div>
      <small-navigation class="mt-5"></small-navigation>
      <navigation></navigation>
      
    </div>
    <button @click="greet">Greet</button>
  </div>
  
</template>

<script>
import SmallNavigation from "./components/SmallNavigationSection";
import TypographyImages from "./components/TypographyImagesSection";
import { LoginCard } from "@/components";
import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import axios from "axios"

Vue.use(BootstrapVue);

export default {
  components: {
    SmallNavigation,
    //LoginCard,
  },
  name: "index",
  bodyClass: "index-page",
  props: {
    image: {
      type: String,
      default: require("@/assets/img/fondo_1.png"),
    },
    leaf4: {
      type: String,
      default: require("@/assets/img/leaf4.png"),
    },
    leaf3: {
      type: String,
      default: require("@/assets/img/leaf3.png"),
    },
    leaf2: {
      type: String,
      default: require("@/assets/img/leaf2.png"),
    },
    leaf1: {
      type: String,
      default: require("@/assets/img/leaf1.png"),
    },
    signup: {
      type: String,
      default: require("@/assets/img/city.jpg"),
    },
    landing: {
      type: String,
      default: require("@/assets/img/landing.jpg"),
    },
    profile: {
      type: String,
      default: require("@/assets/img/profile.jpg"),
    },
    picture: {
      type: String,
      default: require("@/assets/img/Fondo_2.png"),
    },
  },
  data() {
    return {
      login2: {
        email: "prueba@correo.com",
        password: "Alex123#@",
      },

      firstname: null,
      email: null,
      password: null,
      leafShow: false,
    };
  },
  methods: {
  greet(event) {
    var perro = "holiwi"
    alert(`diste clic`)
    alert(this.login2.email)
    console.log(this.login2)
    console.log('ania')
    axios.post("http://localhost:3000/login" , this.login2).then((res) => {
      console.log(res);
    }).catch((e)=> {
      console.log('error')
      console.log(e)
    });
    // `event` is the native DOM event
  }
  },
  // methods: {
  //   leafActive() {
  //     if (window.innerWidth < 768) {
  //       this.leafShow = false;
  //     } else {
  //       this.leafShow = true;
  //     }
  //   }, 
    
  //   login(event) {
  //     console.log("diste clic")
  //     //console.log(this.login2)
  //     // axios.post("http://localhost:3000/login)", this.login2).then((res) => {
  //     //   console.log("entraste")
  //     //   console.log(res)
  //     // }).catch((e) => {
  //     //   console.log("error")
  //     //   console.log(e)
  //     // })
  //   }
    
  // },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.image})`,
      };
    },
    jumboStyle() {
      return {
        backgroundImage: `url(${this.picture})`,
      };
    },
    signupImage() {
      return {
        backgroundImage: `url(${this.signup})`,
      };
    },
  },
  mounted() {
    
  },
  beforeDestroy() {
    
  },
};
</script>
<style lang="scss">
.section-download {
  .md-button + .md-button {
    margin-left: 5px;
  }
}

@media all and (min-width: 991px) {
  .btn-container {
    display: flex;
  }
}
</style>
