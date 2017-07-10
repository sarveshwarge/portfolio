<template lang="pug">
  section.whatpulse
    .container
      .row.py-5.text-center
        whatpulse-stat(type="keys")
        whatpulse-stat(type="clicks")
</template>

<script>
  import Stat from '@/components/Whatpulse/Stat.vue'

  export default {
    name: 'portfolio-whatpulse',
    components: {
      whatpulseStat: Stat
    }
  }
</script>
