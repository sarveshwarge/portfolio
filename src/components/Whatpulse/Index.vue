<template lang="pug">
  section.whatpulse
    .container
      .row.pt-5.pb-3.text-center
        whatpulse-stat(type="keys")
        whatpulse-stat(type="clicks")
      whatpulse-text
        p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent convallis turpis quis nulla lobortis tincidunt. Phasellus aliquam odio elit, nec pretium velit dapibus sit amet. Curabitur nec vestibulum lectus. Donec laoreet porta nisl in lobortis. Ut nec metus velit. Sed nec elementum tortor. Quisque ac leo rutrum, congue lectus vitae, rutrum nibh. Donec faucibus elit eu iaculis blandit.
</template>

<script>
  import Text from '@/components/Helpers/Text.vue'
  import Stat from '@/components/Whatpulse/Stat.vue'

  export default {
    name: 'portfolio-whatpulse',
    components: {
      whatpulseText: Text,
      whatpulseStat: Stat
    }
  }
</script>
