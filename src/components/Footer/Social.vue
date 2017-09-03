<template lang="pug">
  .row
    .col.text-center
      span(v-for="(profile, index) in profiles",
           :key="index")
        b-tooltip(:target="id(profile.network)",
                  :title="profile.network")
        a.mr-2.concrete.hover-clouds(:href="profile.url",
                                     target="_blank",
                                     rel="noopener",
                                     :id="id(profile.network)")
          i.fa.fa-lg(:class="icon(profile.network)")
</template>

<script>
  import slugify from 'slugify'
  import camelcase from 'camelcase'
  import { mapGetters } from 'vuex'

  export default {
    name: 'footer-social',
    computed: {
      ...mapGetters('basics', [
        'profiles'
      ])
    },
    methods: {
      id (network) {
        return camelcase(network)
      },
      icon (network) {
        return `fa-${slugify(network).toLowerCase()}`
      }
    }
  }
</script>
