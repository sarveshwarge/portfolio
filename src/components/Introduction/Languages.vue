<template lang="pug">

</template>

<script>
  import resume from '@/resume'

  export default {
    name: 'introduction-languages',
    computed: {
      languages () {
        return resume.languages
      }
    }
  }
</script>
