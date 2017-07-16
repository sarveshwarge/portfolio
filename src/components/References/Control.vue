<template lang="pug">
  .col-2.text-center
    i.fa.fa-3x.midnight-blue(:class="icon")
</template>

<script>
  export default {
    name: 'reference-control',
    props: {
      direction: {
        type: String,
        required: true
      }
    },
    computed: {
      icon () {
        return `fa-angle-${this.direction}`
      }
    }
  }
</script>

<style lang="scss" scoped="scoped">
  i {
    cursor: pointer;
  }
</style>
