<template lang="pug">
  .row.mt-5
    .col-8.offset-2.text-center
      span.small.silver.lh-2
        slot
</template>

<script>
  export default {
    name: 'portfolio-text'
  }
</script>
