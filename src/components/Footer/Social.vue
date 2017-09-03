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
  import _ from 'lodash'
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
      id (network) {
        return _.camelCase(network)
      },
      icon (network) {
        return `fa-${slugify(network).toLowerCase()}`
      }
    }
  }
</script>
