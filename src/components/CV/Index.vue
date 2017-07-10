<template lang="pug">
  section.cv
    .container.pt-5
      cv-title(title="Curriculum Vitae",
               subtitle="Hier heb ik mijn werkervaring opgedaan.")
      cv-experiences(title="Opleidingen",
                     :experiences="education")
      cv-experiences(title="Werkervaring",
                     :experiences="work")
</template>

<script>
  import resume from '@/resume'

  import Title from '@/components/Helpers/Title.vue'
  import Experiences from '@/components/CV/Experiences.vue'

  export default {
    name: 'portfolio-cv',
    components: {
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

<style lang="scss" scoped="scoped">

</style>
