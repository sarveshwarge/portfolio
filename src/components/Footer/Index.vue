<template lang="pug">
  footer.footer
    .container-fluid
      .row
        .col.text-center
          //footer-scroll-to-top
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
