<template lang="pug">
  section.copyright
    .container-fluid.bg-midnight-blue
      .row.text-center
        .col
          p {{ year }}
</template>

<script>
  export default {
    name: 'footer-copyright',
    computed: {
      year () {
        return new Date().getFullYear()
      }
    }
  }
</script>
