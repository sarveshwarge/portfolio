<template lang="pug">
  b-navbar.py-2(fixed="top",
                toggle-breakpoint="md",
                :variant="variant",
                :toggleable="true")

    .container
      b-nav-toggle(target="nav_collapse")

      b-link.navbar-brand(v-scroll-to="'#header'")
        span.text-uppercase.text-white.px-3.py-1(v-html="name")

      b-collapse#nav_collapse(is-nav="is-nav")
        b-nav.ml-auto(is-nav-bar="is-nav-bar")
          b-nav-item.mr-2(v-for="(item, index) in items",
                          v-scroll-to="item.section",
                          :key="index")
            span.text-white.text-uppercase(v-html="item.name")
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'portfolio-menu',
    props: {
      variant: {
        required: true,
        type: String
      }
    },
    computed: {
      ...mapGetters('menu', [
        'items'
      ]),
      ...mapGetters('basics', [
        'name'
      ])
    }
  }
</script>

<style lang="scss" scoped="scoped">
  .navbar-brand {
    font-size: 1rem;
    border: solid white 2px;
  }
</style>
