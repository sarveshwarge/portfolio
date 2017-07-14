<template lang="pug">
  section#introduction
    .container-fluid
      .container.my-5
        introduction-title(:title="name",
                           :subtitle="label")
        .row.my-5
          .col
            introduction-information(label="Functie", :value="label")

            introduction-information(label="E-mailadres")
              a.silver.lh-2(:href="`mailto:${email}`", v-html="email")

            introduction-information(label="Mobiel")
              a.silver.lh-2(:href="`tel:${mobile}`", v-html="mobile")

            introduction-information(label="talen")
              introduction-languages

            introduction-information(label="Adres")
              p.mb-0.silver.lh-2
                span.d-block(v-html="location.address")
                span.d-block(v-html="`${location.postalCode} ${location.city}`")
                span.d-block(v-html="location.region")


            <!--introduction-information(label="social")-->
              <!--introduction-social-->

          .col
            p.silver.fw2.lh-2(v-html="summary")
            introduction-signature(:name="name")
</template>

<script>
  import resume from '@/resume'

  import Title from '@/components/Helpers/Title'
  import Signature from '@/components/Introduction/Signature'
  import Information from '@/components/Introduction/Information'
  import Languages from '@/components/Introduction/Languages'
  import Social from '@/components/Introduction/Social'

  export default {
    name: 'portfolio-introduction',
    components: {
      IntroductionInformation: Information,
      IntroductionSignature: Signature,
      introductionTitle: Title,
      introductionLanguages: Languages,
      introductionSocial: Social
    },
    computed: {
      name () {
        return resume.basics.name
      },
      label () {
        return resume.basics.label
      },
      summary () {
        return resume.basics.summary
      },
      email () {
        return resume.basics.email
      },
      mobile () {
        return resume.basics.phone
      },
      location () {
        return resume.basics.location
      },
      languages () {
        return resume.languages
      }
    }
  }
</script>

<style lang="scss" scoped="scoped">

</style>
