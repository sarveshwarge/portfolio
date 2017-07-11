<template lang="pug">
  a.badge.badge-default.mr-2.px-2(:href="link", target="_blank")
    i.fa.fa-circle.mr-2(:class="rank")
    span.fw4.text-white(v-html="name")
</template>

<script>
  export default {
    props: {
      badge: {
        required: false,
        type: Object
      }
    },
    computed: {
      rank () {
        return this.badge.rank.toLowerCase()
      },
      name () {
        return this.badge.name
      },
      link () {
        return this.badge.link
      }
    }
  }
</script>

<style lang="scss" scoped="scoped">
  .bronze {
    color: rgb(204, 160, 125);
  }

  .silver {
    color: rgb(175, 179, 183);
  }

  .gold {
    color: rgb(254, 203, 9);
  }
</style>
