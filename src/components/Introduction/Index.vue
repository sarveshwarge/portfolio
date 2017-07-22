<template lang="pug">
  section(:id="id", 
          v-observe-visibility="setActive")
    .container-fluid.p-5
      .container
        introduction-title(:title="name",
                           :subtitle="label")
        .row.my-5
          .col
            introduction-information(label="Functie",
                                     :value="label")

            introduction-information(label="E-mailadres")
              a.silver.lh-2(:href="`mailto:${email}`",
                            v-html="email")

            introduction-information(label="Mobiel")
              a.silver.lh-2(:href="`tel:${phone}`",
                            v-html="phone")

            introduction-information(label="talen")
              introduction-languages

            introduction-information(label="Adres")
              p.mb-0.silver.lh-2
                span.d-block(v-html="location.address")
                span.d-block(v-html="`${location.postalCode} ${location.city}`")
                span.d-block(v-html="location.region")

          .col
            p.silver.fw2.lh-2(v-html="summary")
            introduction-signature(:name="name")
</template>

<script>
  import { mapGetters } from 'vuex'

  import Title from '@/components/Helpers/Title'
  import Signature from '@/components/Introduction/Signature'
  import Information from '@/components/Introduction/Information'
  import Languages from '@/components/Introduction/Languages'

  import active from '@/mixins/active'

  export default {
    name: 'portfolio-introduction',
    data () {
      return {
        id: 'introduction'
      }
    },
    components: {
      IntroductionInformation: Information,
      IntroductionSignature: Signature,
      introductionTitle: Title,
      introductionLanguages: Languages
    },
    computed: {
      ...mapGetters('basics', [
        'name',
        'label',
        'summary',
        'email',
        'phone',
        'location'
      ])
    },
    mixins: [
      active
    ]
  }
</script>
