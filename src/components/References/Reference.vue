<template lang="pug">
  .col-8(v-show="show")
    blockquote.lh-2.text-center
      p.mb-0.midnight-blue.fw3(v-html="reference.reference")
      footer.blockquote-footer.silver(v-html="reference.name")
</template>

<script>
  import { mapGetters } from 'vuex'
  
  export default {
    name: 'reference',
    props: {
      reference: {
        required: true,
        type: Object
      },
      index: {
        required: true,
        type: Number
      }
    },
    computed: {
      ...mapGetters({
        current: 'index'
      }),
      show () {
        return this.current === this.index
      }
    }
  }
</script>
