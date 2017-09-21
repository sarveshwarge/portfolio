<template lang="pug">
  section#projects
    .container-fluid.px-5.pt-5
      .container
        projects-title(title="Projecten",
                       subtitle="Lorem ipsum dolor sit amet")
        cv-download
</template>

<script>
  import { mapGetters } from 'vuex'

  import Title from '@/components/Helpers/Title'
  import Download from '@/components/Helpers/Download'

  export default {
    name: 'portfolio-projects',
    components: {
      projectsTitle: Title,
      cvDownload: Download
    },
    computed: {
      ...mapGetters('resume', [
        'projects'
      ])
    }
  }
</script>
