<template>
  <div>
    <md-toolbar
      id="toolbar"
      md-elevation="0"
      class="md-transparent md-absolute"
      :class="extraNavClasses"
      :color-on-scroll="colorOnScroll"
    >
      <div class="md-toolbar-row ">
        <!-- logo -->
        <div class="md-toolbar-section-start">
          <img src="@/assets/img/Greenie_grande.png" height="42" width="53" />
          <h3 class="md-title px-3">MR. GREENIE</h3>
          <md-list-item
            href="https://demos.creative-tim.com/vue-material-kit/documentation/"
            target="_blank"
            v-if="showDownload"
          >
            <p>Inicio</p>
          </md-list-item>

          <md-list-item
            href="javascript:void(0)"
            @click="scrollToElement()"
            v-if="showDownload"
          >
            <p>Provedores</p>
          </md-list-item>
          <md-list-item
            href="javascript:void(0)"
            @click="scrollToElement()"
            v-if="showDownload"
          >
            <p>Servicios</p>
          </md-list-item>
        </div>

        <div class="md-toolbar-section-end">
          <div class="md-collapse">
            <div class="md-collapse-wrapper">
              <mobile-menu nav-mobile-section-start="true">
                <!-- Here you can add your items from the section-start of your toolbar -->
              </mobile-menu>
              <md-list>
                <div clas></div>

                <md-list-item
                  href="javascript:void(0)"
                  @click="scrollToElement()"
                  v-if="showDownload"
                >
                </md-list-item>

                <md-list-item
                  href="javascript:void(0)"
                  @click="scrollToElement()"
                  v-if="showDownload"
                >
                  <p>
                    <strong v-if="this.status == false"
                      >Ir a modo proveedor</strong
                    >
                    <strong v-if="this.status == true">Modo proveedor</strong>
                  </p>
                </md-list-item>
                <md-list-item>
                  <button
                    class="btnLogin"
                    @click="greet"
                    v-if="this.status == false"
                  >
                    Iniciar sesión
                  </button>
                  <img
                    src="@/assets/img/Avatar.png"
                    height="34"
                    width="34"
                    v-if="this.status == true"
                  />
                  <label for="" class="px-3" v-if="this.status == true"
                    >Erick Silva</label
                  >
                </md-list-item>
              </md-list>
            </div>
          </div>
        </div>
      </div>
      <br><br>
      <div class="bg-white">xd</div>
    </md-toolbar> 
    <div class="bg-white">xd</div>
  </div>
  
</template>

<script>
let resizeTimeout;
function resizeThrottler(actualResizeHandler) {
  // ignore resize events as long as an actualResizeHandler execution is in the queue
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null;
      actualResizeHandler();

      // The actualResizeHandler will execute at a rate of 15fps
    }, 66);
  }
}

import MobileMenu from "@/layout/MobileMenu";
import axios from "axios";
export default {
  components: {
    MobileMenu,
  },
  props: {
    type: {
      type: String,
      default: "white",
      validator(value) {
        return [
          "white",
          "default",
          "primary",
          "danger",
          "success",
          "warning",
          "info",
        ].includes(value);
      },
    },
    colorOnScroll: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      extraNavClasses: "",
      toggledClass: false,
      status: true,
      login2: {
        email: "prueba@correo.com",
        password: "Alex123#@",
      },
    };
  },
  computed: {
    showDownload() {
      const excludedRoutes = ["login", "landing", "profile"];
      return excludedRoutes.every((r) => r !== this.$route.name);
    },
  },
  methods: {
    greet(event) {
      alert(`diste clic`);
      alert(this.login2.email);
      console.log(this.login2);
      console.log("ania");
      axios
        .post("http://localhost:3000/login", this.login2)
        .then((res) => {
          console.log(res);
        })
        .catch((e) => {
          console.log("error");
          console.log(e);
        });
      // `event` is the native DOM event
    },
    modal(event) {
      alert(`diste clic`);
      alert(this.login2.email);
      console.log(this.login2);
      console.log("ania");
      axios
        .post("http://localhost:3000/login", this.login2)
        .then((res) => {
          console.log(res);
        })
        .catch((e) => {
          console.log("error");
          console.log(e);
        });
      // `event` is the native DOM event
    },
    bodyClick() {
      let bodyClick = document.getElementById("bodyClick");

      if (bodyClick === null) {
        let body = document.querySelector("body");
        let elem = document.createElement("div");
        elem.setAttribute("id", "bodyClick");
        body.appendChild(elem);

        let bodyClick = document.getElementById("bodyClick");
        bodyClick.addEventListener("click", this.toggleNavbarMobile);
      } else {
        bodyClick.remove();
      }
    },
    toggleNavbarMobile() {
      this.NavbarStore.showNavbar = !this.NavbarStore.showNavbar;
      this.toggledClass = !this.toggledClass;
      this.bodyClick();
    },
    handleScroll() {
      let scrollValue =
        document.body.scrollTop || document.documentElement.scrollTop;
      let navbarColor = document.getElementById("toolbar");
      this.currentScrollValue = scrollValue;
      if (this.colorOnScroll > 0 && scrollValue > this.colorOnScroll) {
        this.extraNavClasses = `md-${this.type}`;
        navbarColor.classList.remove("md-transparent");
      } else {
        if (this.extraNavClasses) {
          this.extraNavClasses = "";
          navbarColor.classList.add("md-transparent");
        }
      }
    },
    scrollListener() {
      resizeThrottler(this.handleScroll);
    },
    scrollToElement() {
      let element_id = document.getElementById("downloadSection");
      if (element_id) {
        element_id.scrollIntoView({ block: "end", behavior: "smooth" });
      }
    },
  },
  mounted() {
    document.addEventListener("scroll", this.scrollListener);
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.scrollListener);
  },
};
</script>
