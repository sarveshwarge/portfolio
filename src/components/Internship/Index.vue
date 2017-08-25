<template lang="pug">
  internship-section(id="internship",
                     background-color="midnight-blue",
                     v-show="show")
    .row
      .col.text-center
        h1.h2.text-white Momenteel ben ik op zoek naar een {{ internship.type }}.
        p.mt-3.mb-5.silver.fw2 Van {{ from }} tot en met {{ to }}.
        internship-button(:href="mailto")
          i.fa.fa-check.mr-2
          span.fw1 Mail mij
</template>

<script>
  import moment from 'moment'
  import _ from 'lodash'
  import { mapGetters } from 'vuex'

  import Section from '@/components/Helpers/Section'
  import Button from '@/components/Helpers/Button'

  export default {
    name: 'portfolio-internship',
    props: {
      internship: {
        required: true,
        type: Object
      }
    },
    components: {
      internshipSection: Section,
      internshipButton: Button
    },
    computed: {
      ...mapGetters('basics', [
        'email'
      ]),
      from () {
        return moment(this.internship.from).format('D MMMM')
      },
      to () {
        return moment(this.internship.to).format('D MMMM YYYY')
      },
      mailto () {
        return `mailto:${this.email}?subject=${_.upperFirst(this.internship.type)}`
      },
      show () {
        const inThird = moment().isBetween(moment('2017-07-17'), moment('2018-07-16'))
        const inFourth = moment().isBetween(moment('2018-07-16'), moment('2019-07-15'))
        return this.visible(inThird, 'stage') || this.visible(inFourth, 'afstudeerstage')
      }
    },
    methods: {
      visible (inPeriod, type) {
        return inPeriod && moment().isBefore(this.internship.from) && this.internship.type === type
      }
    },
    created () {
      moment.locale('nl')
    }
  }
</script>
