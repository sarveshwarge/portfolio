<template lang="pug">
  .col-8(v-show="visible")
    blockquote.lh-2.text-center
      p.mb-0.midnight-blue.fw3(v-html="reference.reference")
      footer.blockquote-footer.silver(v-html="reference.name")
</template>

<script>
  export default {
    name: 'reference',
    props: {
      reference: {
        required: true,
        type: Object
      },
      visible: {
        required: true,
        type: Boolean
      }
    }
  }
</script>
