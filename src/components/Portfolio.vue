<template lang="pug">
  #portfolio.h-100
    portfolio-header
    portfolio-introduction
    portfolio-stack-overflow
    portfolio-cv
    portfolio-whatpulse
    portfolio-certificates
    portfolio-internship(v-for="iternship in iternships",
                         :internship="iternship",
                         :key="iternship.type")
    portfolio-skills
    portfolio-interests
    portfolio-references
    portfolio-other
    portfolio-projects
    portfolio-footer
</template>

<script>
  import Header from '@/components/Header/Index'
  import Introduction from '@/components/Introduction/Index'
  import StackOverflow from '@/components/StackOverflow/Index'
  import Internship from '@/components/Internship/Index'
  import CV from '@/components/CV/Index'
  import Whatpulse from '@/components/Whatpulse/Index'
  import Interests from '@/components/Interests/Index'
  import Footer from '@/components/Footer/Index'
  import References from '@/components/References/Index'
  import Other from '@/components/Other/Index'
  import Projects from '@/components/Projects/Index'
  import Skills from '@/components/Skills/Index'
  import Certificates from '@/components/Certificates/Index'

  export default {
    name: 'portfolio-main',
    data () {
      return {
        iternships: [{
          type: 'stage',
          from: new Date('2018-02-05'),
          to: new Date('2018-07-13')
        },
        {
          type: 'afstudeerstage',
          from: new Date('2019-02-05'), // TODO: check if this date is correct.
          to: new Date('2019-07-13') // TODO: check if this date is correct.
        }]
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
      portfolioOther: Other,
      portfolioProjects: Projects,
      portfolioSkills: Skills,
      portfolioCertificates: Certificates,
      portfolioFooter: Footer
    }
  }
</script>
