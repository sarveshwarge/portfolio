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
  @import "../node_modules/css-font-weight/css/font-weight.min.css";
  @import "../node_modules/css-line-height/css/line-height.min.css";
  @import "../node_modules/css-cursors/css/css-cursors.min.css";
  @import "../node_modules/flat-ui-colors-helper/src/flat-ui-colors";

  // NPM
  @import "../node_modules/typeface-montserrat/index.css";
  @import "../node_modules/bootstrap-vue/dist/bootstrap-vue.css";
  @import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
  @import "../node_modules/font-awesome/css/font-awesome.min.css";
  @import "../node_modules/animate.css/animate.min.css";

  * {
    font-family: 'Montserrat', sans-serif;

    &::selection {
      background: #f1c40f;
      color: #000;
    }
  }
</style>
