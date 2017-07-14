<template lang="pug">
  section#cv
    .container.pt-5
      cv-title(title="Curriculum Vitae",
               subtitle="Hier heb ik mijn ervaringen opgedaan")

      cv-experiences(title="Opleidingen",
                     :experiences="education")

      cv-experiences(title="Werkervaring",
                     :experiences="work")
</template>

<script>
  import _ from 'lodash'
  import resume from '@/resume'

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
      work () {
        return _.map(resume.work, (work) => {
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
      education () {
        return _.map(resume.education, (education) => {
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
