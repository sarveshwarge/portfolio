<template lang="pug">
  .container-fluid.h-25
    .row.h-100
      .col.text-center
        vue-gravatar(:email="email",
                     :size="200",
                     class="img-fluid")
</template>

<script>
  import Gravatar from 'vue-gravatar'
  import resume from '@/resume'

  export default {
    name: 'portfolio-image',
    components: {
      vueGravatar: Gravatar
    },
    computed: {
      email () {
        return resume.basics.email
      }
    }
  }
</script>

<style lang="scss" scoped="scoped">
  .container-fluid {
    margin-top: -100px;

    img {
      border-radius: 100%;
      border: 5px white solid;
    }
  }
</style>
