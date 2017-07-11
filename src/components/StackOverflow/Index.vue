<template lang="pug">
  section.stack-overflow(v-if="badges")
    .container-fluid.bg-clouds.p-5
      .container
        stack-overflow-title(title="Stack Overflow",
                             subtitle="Ervaring delen is kennis vermenigvuldigen")
        .row
          .col-8.offset-2.text-center
            stack-overflow-badge(v-for="(badge, index) in badges",
                                 :badge="badge",
                                 :key="index")
</template>

<script>
  import axios from 'axios'

  import Title from '@/components/Helpers/Title.vue'
  import Badge from '@/components/StackOverflow/Badge.vue'

  export default {
    name: 'portfolio-stack-overflow',
    data () {
      return {
        badges: []
      }
    },
    components: {
      stackOverflowTitle: Title,
      stackOverflowBadge: Badge
    },
    created () {
      axios.get('https://api.stackexchange.com/2.2/users/2940668/badges?site=stackoverflow&order=desc&sort=rank&filter=default')
        .then((response) => {
          this.badges = response.data.items
        })
    }
  }
</script>
