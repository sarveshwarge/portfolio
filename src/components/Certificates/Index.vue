<template lang="pug">
  section(:id="id",
          v-observe-visibility="setActive")
    .container-fluid.p-5
      .container
        certificates-title(title="Certificaten",
                           subtitle="Lorem ipsum dolor sit amet")

        experiences(v-for="(vocational, index) in vocationals",
                    :title="vocational.issuingAuthority",
                    :experiences="vocational.accreditations",
                    :key="index")
</template>

<script>
  import _ from 'lodash'
  import { mapGetters } from 'vuex'

  import Title from '@/components/Helpers/Title'
  import Experiences from '@/components/Experiences/Index'

  import active from '@/mixins/active'

  export default {
    name: 'portfolio-certificates',
    data () {
      return {
        id: 'certificates'
      }
    },
    components: {
      certificatesTitle: Title,
      experiences: Experiences
    },
    computed: {
      ...mapGetters('resume', [
        'vocational'
      ]),
      vocationals () {
        return _.map(this.vocational, (vocational) => {
          vocational.accreditations = _.map(vocational.accreditations, (accreditations) => {
            return {
              title: accreditations.title,
              subtitle: 'Certificaat',
              summary: null,
              start: accreditations.achievedDate,
              end: accreditations.expireDate,
              icon: 'fa-certificate',
              url: accreditations.verification,
              doesNotExpire: accreditations.doesNotExpire
            }
          })
          return vocational
        })
      }
    },
    mixins: [
      active
    ]
  }
</script>
