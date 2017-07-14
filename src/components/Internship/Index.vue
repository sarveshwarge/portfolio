<template lang="pug">
  section#internship
    .container-fluid.bg-midnight-blue.p-5
      .container.text-center
        h1.h2.text-white.fw5 Momenteel ben ik op zoek naar een stageplaats.
        p.mt-3.mb-5.silver.fw2 Van {{ from }} tot en met {{ to }}.
        portfolio-button(:href="mailto")
          i.fa.fa-check.mr-2
          span.fw1 Mail mij
</template>

<script>
  import moment from 'moment'

  import resume from '@/resume'
  import Button from '@/components/Helpers/Button'

  export default {
    name: 'portfolio-internship',
    props: {
      period: {
        required: true,
        type: Object
      }
    },
    components: {
      PortfolioButton: Button
    },
    computed: {
      from () {
        return moment(this.period.from).format('D MMMM')
      },
      to () {
        return moment(this.period.to).format('D MMMM')
      },
      mailto () {
        return `mailto:${resume.basics.email}?subject=Stageplaats`
      }
    },
    created () {
      moment.locale('nl')
    }
  }
</script>
