<template lang="pug">
  b-button.text-uppercase(:variant="classes",
                          :href="href")
    slot
</template>

<script>
  export default {
    name: 'portfolio-button',
    props: {
      href: {
        required: false,
        value: String
      },
      variant: {
        required: false,
        value: String,
        default: 'dark'
      }
    },
    data () {
      return {
        variants: {
          dark: 'btn-outline-secondary bg-transparent border-asbestos asbestos hover-white border-hover-white',
          light: 'btn-secondary bg-midnight-blue border-midnight-blue white hover-midnight-blue bg-hover-transparent'
        }
      }
    },
    computed: {
      classes () {
        return this.variants[this.variant]
      }
    }
  }
</script>

<style lang="scss" scoped="scoped">
  .bg-hover-transparent {
    &:hover {
      background-color: transparent;
    }
  }
</style>
