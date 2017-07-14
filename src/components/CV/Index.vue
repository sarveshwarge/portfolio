<template lang="pug">
  section#cv
    .container.pt-5
      cv-title(title="Curriculum Vitae",
               subtitle="Hier heb ik mijn ervaringen opgedaan")
      cv-experiences(title="Opleidingen",
                     :experiences="education")
      cv-experiences(title="Werkervaring",
                     :experiences="work")
      //.row
      //  .col
      //    cv-button
      //      span.fw2 Download mijn CV
</template>

<script>
  import resume from '@/resume'

  import Title from '@/components/Helpers/Title'
  import Experiences from '@/components/CV/Experiences'
  import Button from '@/components/Helpers/Button'

  export default {
    name: 'portfolio-cv',
    components: {
      cvButton: Button,
      cvTitle: Title,
      cvExperiences: Experiences
    },
    computed: {
      work () {
        return resume.work
      },
      education () {
        return resume.education
      }
    }
  }
</script>
