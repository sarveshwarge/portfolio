<template lang="pug">
  span
    b-tooltip(v-for="(language, index) in languages",
              :debounce="0",
              :content="language.fluency",
              :key="index")
      span.mr-1.mt-1.flag-icon(:class="flag(language.language)")
</template>

<script>
  import resume from '@/resume'

  export default {
    name: 'introduction-languages',
    computed: {
      languages () {
        return resume.languages
      }
    },
    methods: {
      flag (language) {
        return {
          nederlands: 'flag-icon-nl',
          engels: 'flag-icon-us'
        }[language.toLowerCase()]
      }
    }
  }
</script>

<style lang="scss" scoped="scoped">
  @import "../../../node_modules/flag-icon-css/css/flag-icon.min.css";
</style>
