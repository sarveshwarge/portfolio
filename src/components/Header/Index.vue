<template lang="pug">
  header.h-100
    .container-fluid.bg-clouds.bg-image.h-75
      .row
        .col
    portfolio-image
</template>

<script>
  import Image from '@/components/Header/Image.vue'

  export default {
    name: 'portfolio-header',
    components: {
      portfolioImage: Image
    }
  }
</script>

<style lang="scss" scoped="scoped">
  .bg-image {
    background: url("../../assets/background.jpeg") no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
</style>
