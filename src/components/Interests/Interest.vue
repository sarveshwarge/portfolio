<template lang="pug">
  .col.text-center
    i.fa.fa-2x.mb-3.midnight-blue(:class="icon(index)")
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
      }
    },
    computed: {
      name () {
        return this.interest.name
      }
    },
    methods: {
      icon (index) {
        return [
          'fa-code',
          'fa-apple',
          'fa-film',
          'fa-gamepad',
          'fa-music',
          'fa-child',
          'fa-coffee',
          'fa-plane'
        ][index]
      }
    }
  }
</script>
