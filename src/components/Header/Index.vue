<template lang="pug">
  header#header.h-100
    portfolio-menu
    .container-fluid.bg-clouds.bg-image.h-75
    portfolio-image
</template>

<script>
  import Image from '@/components/Header/Image'
  import Menu from '@/components/Menu/Index'

  export default {
    name: 'portfolio-header',
    components: {
      portfolioImage: Image,
      portfolioMenu: Menu
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
