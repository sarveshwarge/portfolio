<template lang="pug">
  footer#footer
    .container-fluid.p-5.bg-midnight-blue
      .container
        footer-social
    footer-copyright
</template>

<script>
  import Copyright from '@/components/Footer/Copyright'
  import Social from '@/components/Footer/Social'

  export default {
    name: 'portfolio-footer',
    components: {
      footerSocial: Social,
      footerCopyright: Copyright
    }
  }
</script>
