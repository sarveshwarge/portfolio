<template lang="pug">
  b-navbar.p-0(fixed="top",
               toggle-breakpoint="md",
               :variant="variant",
               :toggleable="true")

    .container  
      b-nav-toggle(target="nav_collapse")

      b-link.navbar-brand.my-3(v-scroll-to="'#header'")
        span.text-uppercase.text-white.px-3.py-1(v-html="name")

      b-collapse#nav_collapse(is-nav="is-nav")
        b-nav.ml-auto(is-nav-bar="is-nav-bar")
          b-nav-item(v-for="(item, index) in items",
                     v-scroll-to="item.section",
                     :active="isActive(item)",
                     :key="index",
                     :class="classes(item)")
            span.text-white.text-uppercase(v-html="item.name")
</template>

<script>
  import { mapGetters } from 'vuex'
  import _ from 'lodash'

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
        'items',
        'active'
      ]),
      ...mapGetters('basics', [
        'name'
      ])
    },
    methods: {
      isActive (item) {
        return item === this.active
      },
      classes (item) {
        return {
          'mr-4': !(item === _.last(this.items))
        }
      }
    }
  }
</script>

<style lang="scss">
  .navbar-brand {
    font-size: 1rem;
    border: solid white 2px;
  }
  
  .nav-link {
    padding: 1.25rem 0 !important;

    &.active {
      border-bottom: solid 4px white;
    }
  }
  
</style>
