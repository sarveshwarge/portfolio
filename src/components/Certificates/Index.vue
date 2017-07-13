<template lang="pug">
  section.references
    .container-fluid.p-5
      .container
        references-title(title="Certificaten",
                         subtitle="Lorem ipsum dolor sit amet")
</template>

<script>
  import resume from '@/resume'
  import Title from '@/components/Helpers/Title'

  export default {
    name: 'portfolio-certificates',
    components: {
      referencesTitle: Title
    },
    computed: {
      certificates () {
        return resume.projects
      }
    }
  }
</script>
