<template lang="pug">
  section(:id="id",
          v-observe-visibility="setActive")
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

  import active from '@/mixins/active'

  export default {
    name: 'portfolio-skills',
    data () {
      return {
        id: 'skills'
      }
    },
    components: {
      skillsTitle: Title,
      skillsGroup: Group
    },
    computed: {
      ...mapGetters('resume', [
        'skills'
      ])
    },
    mixins: [
      active
    ]
  }
</script>
