<template lang="pug">
  section#copyright
    .container-fluid.bg-wet-asphalt
      .container
        .row.text-center
          .col
            p.m-2.small.midnight-blue
              i.fa.fa-copyright.mr-2
              span.mr-2.b(v-html="name")
              span(v-html="year")
</template>

<script>
  import resume from '@/resume'

  export default {
    name: 'footer-copyright',
    computed: {
      name () {
        return resume.basics.name
      },
      year () {
        return new Date().getFullYear()
      }
    }
  }
</script>
