<template lang="pug">
  .row.mb-5
    .col-2
      strong.text-uppercase.midnight-blue(v-html="title")
    .col
      .row
        .col-12(v-for="experience in experiences")
          cv-experience(:experience="experience")
</template>

<script>
  import Experience from '@/components/CV/Experience'

  export default {
    name: 'cv-experiences',
    props: {
      title: {
        required: true,
        type: String
      },
      experiences: {
        required: true,
        type: Array
      }
    },
    components: {
      cvExperience: Experience
    }
  }
</script>
