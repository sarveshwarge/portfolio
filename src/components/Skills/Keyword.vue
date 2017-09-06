<template lang="pug">
  keyword-icon.wet-asphalt(:icon="icon",
                           :title="title",
                           hover="colored")
</template>

<script>
  import slugify from 'slugify'

  import Icon from '@/components/Helpers/Icon'

  export default {
    name: 'skill-keyword',
    props: {
      keyword: {
        required: true,
        type: String
      }
    },
    components: {
      keywordIcon: Icon
    },
    computed: {
      icon () {
        return `devicon-${slugify(this.keyword).toLowerCase()}-plain`
      },
      title () {
        return this.keyword
      }
    }
  }
</script>

<style lang="scss" scoped="scoped">
  @import "~devicon-2.2/devicon.min.css";
  @import "~devicon-2.2/devicon-colors.css";
</style>
