<template lang="pug">
  footer.footer
    .container-fluid.p-5.bg-midnight-blue
      .container
    footer-copyright
</template>

<script>
  import Copyright from '@/components/Footer/Copyright.vue'
  import ScrollToTop from '@/components/Helpers/ScrollToTop.vue'

  export default {
    name: 'portfolio-footer',
    components: {
      footerScrollToTop: ScrollToTop,
      footerCopyright: Copyright
    }
  }
</script>
