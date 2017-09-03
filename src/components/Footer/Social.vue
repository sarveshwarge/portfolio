<template lang="pug">
  .row
    .col.text-center
      span(v-for="(profile, index) in profiles",
           :key="index")
        b-tooltip(:target="profile.network.toLowerCase()",
                  :title="profile.network")
        a.mr-2.concrete.hover-clouds(:href="profile.url",
                                     target="_blank",
                                     rel="noopener",
                                     :id="profile.network.toLowerCase()")
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
