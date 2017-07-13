<template lang="pug">
  .col.text-center
    i.fa.fa-2x.mb-3.midnight-blue(:class="icon")
    p.concrete.text-uppercase.small(v-html="name")
</template>

<script>
  export default {
    name: 'interest',
    props: {
      interest: {
        required: true,
        type: Object
      },
      index: {
        required: true,
        type: Number
      },
      icon: {
        required: true,
        type: String
      }
    },
    computed: {
      name () {
        return this.interest.name
      }
    }
  }
</script>
