<template lang="pug">
  portfolio-button(@click="scrollToTop()")
    i.fa.fa-arrow-up
</template>

<script>
  import smoothscroll from 'smoothscroll-polyfill'

  import Button from '@/components/Helpers/Button'

  export default {
    components: {
      portfolioButton: Button
    },
    name: 'scroll-to-top',
    methods: {
      scrollToTop () {
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        })
      }
    },
    created () {
      smoothscroll.polyfill()
    }
  }
</script>
