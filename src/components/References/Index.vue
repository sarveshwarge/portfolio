<template lang="pug">
  section#references
    .container-fluid.p-5
      .container
        references-title(title="Referenties",
                         subtitle="Lorem ipsum dolor sit amet")
        .row
          references-control(direction="left")
          references-reference(v-for="(reference, index) in references",
                               :reference="reference",
                               :visible="visible(index)",
                               :key="index")
          references-control(direction="right")
        .row.mb-4
          references-indicators(:references="references",
                                :current="current")
</template>

<script>
  import resume from '@/resume'
  import Title from '@/components/Helpers/Title'
  import Control from '@/components/References/Control'
  import Reference from '@/components/References/Reference'
  import Indicators from '@/components/References/Indicators'

  export default {
    name: 'portfolio-references',
    data () {
      return {
        current: 0
      }
    },
    components: {
      referencesTitle: Title,
      referencesControl: Control,
      referencesIndicators: Indicators,
      referencesReference: Reference
    },
    computed: {
      references () {
        return resume.references
      },
      reference () {
        return this.references[this.currentReference]
      }
    },
    methods: {
      visible (index) {
        return this.current === index
      }
    }
  }
</script>
