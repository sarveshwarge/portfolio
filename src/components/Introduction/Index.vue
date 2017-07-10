<template lang="pug">
  section.introduction
    .container
      introduction-title(:title="name",
                         :subtitle="label")
      .row
        .col
        .col
          introduction-signature(:name="name")
</template>

<script>
  import resume from '@/resume'
  import Title from '@/components/Helpers/Title.vue'
  import Signature from '@/components/Introduction/Signature'

  export default {
    name: 'portfolio-introduction',
    components: {
      IntroductionSignature: Signature,
      introductionTitle: Title
    },
    computed: {
      name () {
        return resume.basics.name
      },
      label () {
        return resume.basics.label
      }
    }
  }
</script>
