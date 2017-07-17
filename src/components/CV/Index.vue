<template lang="pug">
  section#cv
    .container.pt-5
      cv-title(title="Curriculum Vitae",
               subtitle="Hier heb ik mijn ervaringen opgedaan")

      cv-experiences(title="Opleidingen",
                     :experiences="_education")

      cv-experiences(title="Werkervaring",
                     :experiences="_work")
</template>

<script>
  import _ from 'lodash'
  import { mapGetters } from 'vuex'

  import Title from '@/components/Helpers/Title'
  import Experiences from '@/components/Experiences/Index'
  import Button from '@/components/Helpers/Button'

  export default {
    name: 'portfolio-cv',
    components: {
      cvButton: Button,
      cvTitle: Title,
      cvExperiences: Experiences
    },
    computed: {
      ...mapGetters('resume', [
        'work',
        'education'
      ]),
      _work () {
        return _.map(this.work, (work) => {
          return {
            title: work.position,
            subtitle: work.name,
            summary: work.summary,
            start: work.startDate,
            end: work.endDate,
            icon: 'fa-briefcase',
            url: work.url
          }
        })
      },
      _education () {
        return _.map(this.education, (education) => {
          return {
            title: education.area,
            subtitle: education.institution,
            summary: education.studyType,
            start: education.startDate,
            end: education.endDate,
            icon: 'fa-graduation-cap',
            url: null
          }
        })
      }
    }
  }
</script>
