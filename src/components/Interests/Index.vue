<template lang="pug">
  section#interests
    .container-fluid.bg-clouds.p-5
      .container.mb-3
        interests-title(title="Interesses",
                        subtitle="Zo vul ik het liefst mijn dag")
        .row
          interest(v-for="(interest, index) in interests",
                   :key="index",
                   :interest="interest",
                   :icon="icon(interest.name)")
</template>

<script>
  import { mapGetters } from 'vuex'
  import _ from 'lodash'
  import slugify from 'slugify'

  import Title from '@/components/Helpers/Title'
  import Interest from '@/components/Interests/Interest'

  export default {
    name: 'portfolio-interests',
    components: {
      interestsTitle: Title,
      interest: Interest
    },
    computed: {
      ...mapGetters('resume', {
        _interests: 'interests'
      }),
      interests () {
        return _.sortBy(this._interests, (interest) => {
          return interest.name
        })
      }
    },
    methods: {
      icon (name) {
        return {
          'apple': 'fa-apple',
          'films-and-series': 'fa-film',
          'games': 'fa-gamepad',
          'gitaar-spelen': 'fa-child',
          'koffie': 'fa-coffee',
          'muziek': 'fa-music',
          'programmeren': 'fa-code',
          'reizen': 'fa-plane'
        }[slugify(name.toLowerCase())]
      }
    }
  }
</script>
