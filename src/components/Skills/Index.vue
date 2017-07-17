<template lang="pug">
  section#skills
    .container-fluid.p-5
      .container.mb-3
        skills-title(title="Vaardigheden",
                     subtitle="Lorem ipsum dolor sit amet")
        .row
          skills-group(v-for="(skill, index) in skills",
                       :key="index",
                       :skill="skill")
</template>

<script>
  import { mapGetters } from 'vuex'
  
  import Title from '@/components/Helpers/Title'
  import Group from '@/components/Skills/Group'

  export default {
    name: 'portfolio-skills',
    components: {
      skillsTitle: Title,
      skillsGroup: Group
    },
    computed: {
      ...mapGetters('resume', [
        'skills'
      ])
    }
  }
</script>
