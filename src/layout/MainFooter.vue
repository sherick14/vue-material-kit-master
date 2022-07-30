<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="row my-5">
      <div class="row">
        <div class="col-1"></div>
        <!-- MR. GREENIE -->
        <div class="col-2">
          <ul class="list-unstyled mx-auto">
            <li><img src="@/assets/img/Logo_footer.svg" fluid alt="Fluid image"></li>
            <br />
            <li class="footerText"></li> <br>
            <li class="copyright">&copy; 2020 - 2022</li><br>
            <li class="copyright"><a href="#">Aviso de seguridad</a></li>
          </ul>
        </div>
        <!-- information -->
        <div class="col-2">
          <ul class="list-unstyled mx-auto">
            <li class="footerTitle">Información</li>
            <br />
            <li><a href="#" class="footerText">¿Quiénes somos?</a></li>
            <br />
            <li><a href="#" class="footerText">Política de privacidad</a></li>
            <br />
            <li><a href="#" class="footerText">Alta de proveedores</a></li>
            <br />
            <li><a href="#" class="footerText">Ayuda</a></li>
          </ul>
        </div>
        <!-- contact -->
        <div class="col-2">
          <ul class="list-unstyled mx-auto">
            <li class="footerTitle">Información</li>
            <br />
            <li class="footerText">Paseos Vista del Sol 6801, Vista del Sol, 31206Chihuahua, Chih.</li>
            <br />
            <li class="footerText">614 279 1458</li>
            <br />
            <li class="footerText">ayuda@mrgreenie.com</li>
            <br />
          </ul>
        </div>
        <!-- social media -->
        <div class="col-2">
          <ul class="list-unstyled mx-auto">
            <li class="footerTitle">Redes sociales</li>
            <br />
            <li class="footerText"><img src="@/assets/img/Facebook.svg" fluid alt="Fluid image"></li>
            <li class="footerText px-2"> <img src="@/assets/img/Instagram.svg" fluid alt="Fluid image"></li>
            <br /><br>
            <li><u><a href="#" class="footerTextStrong">Ir a modo proveedor</a></u></li>
            <br />
          </ul>
        </div>
        <!-- App Mr.Greenie -->
        <div class="col-2">
          <ul class="list-unstyled mx-auto">
            <li class="footerTitle">App Mr. Greenie</li>
            <br />
            <li class="footerText"><img src="@/assets/img/App.png" fluid alt="Fluid image"></li>
          </ul>
        </div>
        <div class="col-1"></div>
      </div>
    </div>
  </footer>
  <!-- <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  > -->
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String,
  },
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>
<style></style>

