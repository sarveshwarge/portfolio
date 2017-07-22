<template lang="pug">
  other-section(id="other",
                background-color="clouds")
</template>

<script>
  import Section from '@/components/Helpers/Section'

  export default {
    name: 'portfolio-other',
    components: {
      otherSection: Section
    }
  }
</script>
