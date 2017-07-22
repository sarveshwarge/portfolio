<template lang="pug">
  section(:id="id")
    .container-fluid.p-5
      .container
        references-title(title="Referenties",
                         subtitle="Wat vinden mensen van mij?")
        .row
          references-control(direction="previous")
          references-reference(v-for="(reference, index) in references",
                               :reference="reference",
                               :index="index",
                               :key="index")
          references-control(direction="next")
        .row.mb-4
          references-indicators(:references="references")
</template>

<script>
  import { mapGetters } from 'vuex'
  
  import Title from '@/components/Helpers/Title'
  import Control from '@/components/References/Control'
  import Reference from '@/components/References/Reference'
  import Indicators from '@/components/References/Indicators'

  export default {
    name: 'portfolio-references',
    data () {
      return {
        id: 'references'
      }
    },
    components: {
      referencesTitle: Title,
      referencesControl: Control,
      referencesIndicators: Indicators,
      referencesReference: Reference
    },
    computed: {
      ...mapGetters('resume', [
        'references'
      ])
    }
  }
</script>
