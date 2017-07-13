<template lang="pug">
  section.references
    .container-fluid.p-5
      .container
        references-title(title="Projecten",
                         subtitle="Lorem ipsum dolor sit amet")
</template>

<script>
  import resume from '@/resume'
  import Title from '@/components/Helpers/Title'

  export default {
    name: 'portfolio-projects',
    components: {
      referencesTitle: Title
    },
    computed: {
      projects () {
        return resume.projects
      }
    }
  }
</script>
