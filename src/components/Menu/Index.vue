<template lang="pug">
  b-navbar(fixed="top",
           toggle-breakpoint="md",
           :toggleable="true")

    .container
      b-nav-toggle(target="nav_collapse")

      b-link.navbar-brand(to="#")
        span.text-uppercase.text-white.px-3.py-1(v-html="name")

      b-collapse#nav_collapse(is-nav="is-nav")
        b-nav.ml-auto(is-nav-bar="is-nav-bar")
          b-nav-item(v-for="(item, index) in items",
                     :key="index",
                      :to="item.link")
            span.text-white.text-uppercase(v-html="item.name")
</template>

<script>
  import resume from '@/resume'

  export default {
    name: 'portfolio-menu',
    data () {
      return {
        items: [
          {
            name: 'Over mij',
            link: '#introduction'
          }
        ]
      }
    },
    computed: {
      name () {
        return resume.basics.name
      }
    }
  }
</script>

<style lang="scss" scoped="scoped">
  .navbar-brand {
    font-size: 1rem;
    border: solid white 2px;
  }
</style>
