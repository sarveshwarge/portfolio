<template lang="pug">
  footer.footer
    .container-fluid
    footer-copyright
</template>

<script>
  import Copyright from '@/components/Footer/Copyright.vue'

  export default {
    name: 'portfolio-footer',
    components: {
      footerCopyright: Copyright
    }
  }
</script>
