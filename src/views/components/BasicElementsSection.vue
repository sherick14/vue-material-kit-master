<template>
  <div class="wrapper">
    <div id="buttons">
      <div class="title">
        <h3>
          Buttons <br />
          <small>Pick your style</small>
        </h3>
      </div>
      <div class="md-layout">
        <div class="md-layout-item md-size-66 mx-auto">
          <md-button class="md-primary">Default</md-button>
          <md-button class="md-primary md-round">Round</md-button>
          <md-button class="md-primary"
            ><md-icon>favorite</md-icon> With Icon</md-button
          >
          <md-button class="md-primary md-just-icon md-round"
            ><md-icon>favorite</md-icon></md-button
          >
          <md-button class="md-primary md-simple">Simple</md-button>
        </div>
      </div>
    </div>
    <!-- end buttons -->

    <div class="space-50"></div>

    <div class="space-70"></div>

  </div>
</template>

<script>
//import { Pagination } from "@/components";
//import { Slider } from "@/components";
//import { Badge } from "@/components";

export default {
  components: {
    //Pagination,
    //Slider,
    //Badge
  },
  data() {
    return {
      defaultPagination: 3,
      infoPagination: 3,
      initial: null,
      floatingLabel: null,
      success: null,
      error: null,
      withMIcon: null,
      withFaIcon: null,
      checkbox1: true,
      checkbox2: null,
      checkbox3: true,
      checkbox4: null,
      radio1: true,
      radio2: false,
      switch1: true,
      switch2: null,
      amount: 30,
      amount2: 60,
      buffer: 40,
      sliders: {
        simple: 40,
        rangeSlider: [20, 60]
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.vertical-center {
  display: flex;
  align-items: center;
}
.flex-column {
  display: flex;
  flex-direction: column;
}
.md-checkbox,
.md-radio {
  display: flex;
  margin: 0;
  margin-bottom: 0.5rem;
}
</style>
