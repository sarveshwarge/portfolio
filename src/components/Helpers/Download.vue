<template lang="pug">
  .row
    .col.mb-5
      download(:href="cv",
               target="_blank",
               rel="noopener")
        span.fw1 download mijn cv
</template>

<script>
  import Button from '@/components/Helpers/Button'

  export default {
    name: 'download-cv',
    components: {
      download: Button
    },
    computed: {
      cv () {
        return '#' // TODO: CV download link
      }
    }
  }
</script>
