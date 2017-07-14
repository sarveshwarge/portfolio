<template lang="pug">
  section#references
    .container-fluid.p-5
      .container
        references-title(title="Referenties",
                         subtitle="Lorem ipsum dolor sit amet")
</template>

<script>
  import resume from '@/resume'
  import Title from '@/components/Helpers/Title'

  export default {
    name: 'portfolio-references',
    components: {
      referencesTitle: Title
    },
    computed: {
      references () {
        return resume.references
      }
    }
  }
</script>
