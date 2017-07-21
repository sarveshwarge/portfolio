<template lang="pug">
  .col-12.text-center
    i.fa.midnight-blue(v-for="(reference, index) in references",
                            :class="classes(index)",
                            @click="click(index)",
                            :key="index")
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'references-indicators',
    props: {
      references: {
        required: true,
        type: Array
      }
    },
    computed: {
      ...mapGetters([
        'index'
      ])
    },
    methods: {
      ...mapActions([
        'specific'
      ]),
      classes (index) {
        return [
          index === this.index ? 'fa-dot-circle-o' : 'fa-circle-o',
          {
            'mr-1': !(index === this.references.length - 1)
          }
        ]
      },
      click (index) {
        this.specific(index)
      }
    }
  }
</script>

<style lang="scss" scoped="scoped">
  i {
    cursor: pointer;
  }
</style>
