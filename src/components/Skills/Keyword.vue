<template lang="pug">
  span.d-block
    i.fa.fa-check-circle-o.mr-2.midnight-blue
    span.asbestos.fw2(v-html="keyword")
</template>

<script>
  export default {
    name: 'skill-keyword',
    props: {
      keyword: {
        required: true,
        type: String
      }
    }
  }
</script>
