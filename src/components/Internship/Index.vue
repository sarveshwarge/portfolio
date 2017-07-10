<template lang="pug">
  section.internship
    .container-fluid.bg-midnight-blue.text-center.py-5
        h1.h2.text-white Momenteel ben ik op zoek naar een stageplaats.
        p.mt-3.mb-5.silver Van {{ from }} tot en met {{ to }}.
        a.btn.btn-outline-secondary.text-center.m-auto(:href="mailto")
          i.fa.fa-check.mr-2
          span Mail mij
</template>

<script>
  import moment from 'moment'
  import resume from '@/resume'

  export default {
    name: 'portfolio-internship',
    props: {
      period: {
        required: true,
        type: Object
      }
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

<style lang="scss" scoped="scoped">

  @import "../../../node_modules/flat-ui-colors-sass/flat-colors";

  .internship {

    h1 {
      font-weight: 500;
    }

    p {
      font-weight: 200;
    }

    a {
      font-weight: 100;
      text-transform: uppercase;
      background-color: transparent;
      border-color: $flat-silver;
      color: $flat-silver;
      border-radius: 2px;

      &:hover {
        border-color: white;
        color: white;
      }
    }
  }
</style>
