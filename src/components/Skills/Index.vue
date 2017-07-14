<template lang="pug">
  section#skills
    .container-fluid.p-5
      .container
        references-title(title="Vaardigheden",
                         subtitle="Lorem ipsum dolor sit amet")
</template>

<script>
  import resume from '@/resume'
  import Title from '@/components/Helpers/Title'

  export default {
    name: 'portfolio-skills',
    components: {
      referencesTitle: Title
    },
    computed: {
      skills () {
        return resume.skills
      }
    }
  }
</script>
