<template lang="pug">
  .h-100
    portfolio-header
    portfolio-introduction
    portfolio-stack-overflow
    portfolio-cv
    portfolio-internship(:period="iternship")
    portfolio-interests
    portfolio-whatpulse
    portfolio-references
    portfolio-footer
</template>

<script>
  import moment from 'moment'

  import Header from '@/components/Header/Index'
  import Introduction from '@/components/Introduction/Index'
  import StackOverflow from '@/components/StackOverflow/Index'
  import Internship from '@/components/Internship/Index'
  import CV from '@/components/CV/Index'
  import Whatpulse from '@/components/Whatpulse/Index'
  import Interests from '@/components/Interests/Index'
  import Footer from '@/components/Footer/Index'
  import References from '@/components/References/Index'

  export default {
    name: 'portfolio-main',
    data () {
      return {
        iternship: {
          from: moment('2018-02-05'), // TODO: check if this date is correct.
          to: moment('2018-07-06')    // TODO: check if this date is correct.
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
      portfolioInterests: Interests,
      portfolioReferences: References,
      portfolioFooter: Footer
    }
  }
</script>

<style lang="scss">

</style>
