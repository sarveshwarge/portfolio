<template lang="pug">
  .row
    .col.text-center
      a.mr-2.concrete.hover-clouds(v-for="(profile, index) in profiles",
                                   :key="index",
                                   :href="profile.url",
                                   target="_blank",
                                   rel="noopener")
        i.fa.fa-lg(:class="icon(profile.network)")
</template>

<script>
  import slugify from 'slugify'
  import { mapGetters } from 'vuex'

  export default {
    name: 'footer-social',
    computed: {
      ...mapGetters('basics', [
        'profiles'
      ])
    },
    methods: {
      icon (network) {
        return `fa-${slugify(network).toLowerCase()}`
      }
    }
  }
</script>
