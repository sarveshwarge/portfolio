<template lang="pug">
  .col-12
    .row
      .col-2
        strong.text-uppercase.midnight-blue(v-html="skill.name")
      .col-10
        .row.mt-3.mb-4
          keyword(v-for="(keyword, index) in keywords",
                  :keyword="keyword",
                  :key="index")
</template>

<script>
  import Keyword from '@/components/Skills/Keyword'

  export default {
    name: 'skill-group',
    props: {
      skill: {
        required: true,
        type: Object
      }
    },
    components: {
      keyword: Keyword
    },
    computed: {
      keywords () {
        return this.skill.keywords.sort((a, b) => {
          return a.localeCompare(b)
        })
      }
    }
  }
</script>
