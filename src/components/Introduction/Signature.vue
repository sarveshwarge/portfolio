<template lang="pug">
  span
    p.m-0.silver.fw2.lh-2 Met vriendelijke groet,
    p.m-0.signature.midnight-blue(v-html="signature")
</template>

<script>
  export default {
    name: 'introduction-signature',
    props: {
      name: {
        required: true,
        type: String
      }
    },
    computed: {
      signature () {
        return `${this.name}}`
      }
    }
  }
</script>

<style lang="scss" scoped="scoped">
  @font-face {
    font-family: 'Taken by Vultures';
    src: url('../../assets/fonts/taken-by-vultures.otf');
  }

  .signature {
    font-family: 'Taken by Vultures', fantasy;
    font-size: 5rem;
  }
</style>
