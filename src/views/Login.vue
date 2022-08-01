<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto"
          >
            <login-card header-color="orange">
              <h4 slot="title" class="card-title">Iniciar sesión</h4>
              <md-button
                slot="buttons"
                href="javascript:void(0)"
                class="md-just-icon md-simple md-white"
              >
                <i class="fab fa-facebook-square"></i>
              </md-button>
              <md-button
                slot="buttons"
                href="javascript:void(0)"
                class="md-just-icon md-simple md-white"
              >
                <i class="fab fa-twitter"></i>
              </md-button>
              <md-button
                slot="buttons"
                href="javascript:void(0)"
                class="md-just-icon md-simple md-white"
              >
                <i class="fab fa-google-plus-g"></i>
              </md-button>
              <p slot="description" class="description">O sé clásico</p>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>face</md-icon>
                <label>Usuario</label>
                <md-input v-model="loginData.email"></md-input>
              </md-field>
              
              <md-field class="md-form-group" slot="inputs">
                <md-icon>lock_outline</md-icon>
                <label>Contraseña</label>
                <md-input v-model="loginData.password" type="password" ></md-input>
              </md-field>
              
              <button slot="footer" class="mainButton" @click="login">Iniciar sesión

              </button>
            </login-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { LoginCard } from "@/components";
import axios from "axios";

export default {
  components: {
    LoginCard
  },
  bodyClass: "login-page",
  data() {
    return {

      loginData: {
        email: "prueba@correo.com",
        password: "Alex123#@!",
      },
      
    };
  },
  methods: {
    login(event) {
      alert(`diste clic`);
      alert(this.loginData.email);
      console.log(this.loginData);
      console.log("ania");
      //this.$router.replace({ name:"login" })
      axios
        .post("http://localhost:3000/login", this.loginData)
        .then((res) => {
          console.log(res);
          this.$router.replace({ name:"index" })
        })
        .catch((e) => {
          console.log("error");
          console.log(e);
        });
      
    },
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/profile_city.jpg")
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  }
};
</script>

<style lang="css"></style>
