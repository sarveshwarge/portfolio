<template lang="pug">
  .col-12.text-center
    i.fa.mr-2.midnight-blue(v-for="(reference, index) in references",
                            :class="icon(index)"
                            :key="index")
</template>

<script>
  export default {
    name: 'references-indicators',
    props: {
      references: {
        required: true,
        type: Array
      },
      current: {
        required: true,
        type: Number
      }
    },
    methods: {
      icon (index) {
        return index === this.current ? 'fa-dot-circle-o' : 'fa-circle-o'
      }
    }
  }
</script>

<style lang="scss" scoped="scoped">
  i {
    cursor: pointer;
  }
</style>
