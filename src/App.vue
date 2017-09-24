<template lang="pug">
  #app.h-100
    router-view
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
  // Helpers
  @import "~css-font-weight/css/font-weight.min.css";
  @import "~css-line-height/css/line-height.min.css";
  @import "~css-cursors/css/css-cursors.min.css";
  @import "~flat-ui-colors-helper/src/flat-ui-colors";

  // NPM
  @import "~typeface-montserrat/index.css";
  @import "~bootstrap-vue/dist/bootstrap-vue.css";
  @import "~bootstrap/dist/css/bootstrap.min.css";
  @import "~font-awesome/css/font-awesome.min.css";
  @import "~animate.css/animate.min.css";

  // Custom
  @import "./assets/scss/main";
  @import "./assets/scss/skills";
  @import "./assets/scss/hovered";

  * {
    font-family: 'Montserrat', sans-serif;

    &::selection {
      background: #f1c40f;
      color: #000;
    }
  }
</style>
