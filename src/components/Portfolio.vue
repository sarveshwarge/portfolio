<template lang="pug">
  .h-100
    portfolio-header
    portfolio-introduction
    portfolio-stack-overflow
    portfolio-internship(:period="period")
    portfolio-cv
    portfolio-whatpulse
    portfolio-footer
</template>

<script>
  import Header from '@/components/Header/Index.vue'
  import Introduction from '@/components/Introduction/Index.vue'
  import StackOverflow from '@/components/StackOverflow/Index.vue'
  import Internship from '@/components/Internship/Index.vue'
  import CV from '@/components/CV/Index.vue'
  import Whatpulse from '@/components/Whatpulse/Index.vue'
  import Footer from '@/components/Footer/Index.vue'

  export default {
    name: 'portfolio-main',
    data () {
      return {
        period: {
          from: new Date(),
          to: new Date()
        }
      }
    },
    components: {
      portfolioHeader: Header,
      portfolioIntroduction: Introduction,
      portfolioStackOverflow: StackOverflow,
      portfolioInternship: Internship,
      portfolioCv: CV,
      portfolioWhatpulse: Whatpulse,
      portfolioFooter: Footer
    }
  }
</script>

<style lang="scss">

</style>
