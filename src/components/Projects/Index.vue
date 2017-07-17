<template lang="pug">
  section#projects
    .container-fluid.p-5
      .container
       projects-title(title="Projecten",
                      subtitle="Lorem ipsum dolor sit amet")
</template>

<script>
  import { mapGetters } from 'vuex'
  import Title from '@/components/Helpers/Title'

  export default {
    name: 'portfolio-projects',
    components: {
      projectsTitle: Title
    },
    computed: {
      ...mapGetters('resume', [
        'projects'
      ])
    }
  }
</script>
