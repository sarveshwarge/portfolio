<template lang="pug">
  a.btn.btn-outline-secondary.text-center.m-auto(:href="href")
    slot
</template>

<script>
  export default {
    name: 'portfolio-button',
    props: {
      href: {
        required: false,
        value: String
      }
    }
  }
</script>

<style lang="scss" scoped="scoped">

  // Flat Colors
  @import "../../../node_modules/flat-ui-colors-sass/flat-colors";

  a {
    text-transform: uppercase;
    background-color: transparent;
    border-color: $flat-silver;
    color: $flat-silver;
    border-radius: 2px;
  }
</style>
