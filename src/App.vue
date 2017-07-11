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

  // NPM
  @import "../node_modules/typeface-montserrat/index.css";
  @import "../node_modules/bootstrap/scss/bootstrap.scss";
  @import "../node_modules/font-awesome/css/font-awesome.min.css";

  // Custom
  @import "scss/flat";

  * {
    font-family: 'Montserrat', sans-serif;
  }
</style>
