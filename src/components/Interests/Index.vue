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
                   :icon="icon(index)")
</template>

<script>
  import resume from '@/resume'

  import Title from '@/components/Helpers/Title'
  import Interest from '@/components/Interests/Interest'

  export default {
    name: 'portfolio-interests',
    components: {
      interestsTitle: Title,
      interest: Interest
    },
    computed: {
      interests () {
        return resume.interests
      }
    },
    methods: {
      icon (index) {
        return [
          'fa-code',
          'fa-apple',
          'fa-film',
          'fa-gamepad',
          'fa-music',
          'fa-child',
          'fa-coffee',
          'fa-plane'
        ][index]
      }
    }
  }
</script>
