<template lang="pug">
  .row.my-5
    .col.text-center
      h1.h3.midnight-blue(v-html="title")
      h2.h6.silver(v-html="subtitle")
      border
</template>

<script>
  import Border from '@/components/Helpers/Border.vue'

  export default {
    name: 'portfolio-title',
    props: {
      title: {
        type: String,
        required: true
      },
      subtitle: {
        type: String,
        required: true
      }
    },
    components: {
      border: Border
    }
  }
</script>

<style lang="scss" scoped="scoped">
  h1 {
    text-transform: uppercase;
    font-weight: bold;
  }

  h2 {
    line-height: 2rem;
  }
</style>
