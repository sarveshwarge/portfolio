<template lang="pug">
  span
    a.mr-2(v-for="(profile, index) in profiles",
      :key="index")
      i.midnight-blue.fa(:class="icon(profile.network)")
</template>

<script>
  import slugify from 'slugify'
  import resume from '@/resume'

  export default {
    name: 'social',
    computed: {
      profiles () {
        return resume.basics.profiles
      }
    },
    methods: {
      icon (network) {
        return `fa-${slugify(network).toLowerCase()}`
      }
    }
  }
</script>
