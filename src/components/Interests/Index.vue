<template lang="pug">
  section.interests
    .container-fluid.bg-clouds.p-5
      .container.mb-3
        interests-title(title="Interesses",
                        subtitle="Zo vul ik het liefst mijn dag")
        .row
          interest(v-for="(interest, index) in interests",
                   :interest="interest",
                   :key="index",
                   :index="index")
</template>

<script>
  import resume from '@/resume'

  import Title from '@/components/Helpers/Title.vue'
  import Interest from '@/components/Interests/Interest.vue'

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
    }
  }
</script>
