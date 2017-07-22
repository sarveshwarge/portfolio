<template lang="pug">
  section(:id="id")
    .container-fluid.p-5(:class="background")
      .container
        section-title(v-if="visible",
                      :title="title",
                      :subtitle="subtitle")
        slot
</template>

<script>
  import Title from '@/components/Helpers/Title'

  export default {
    name: 'portfolio-section',
    props: {
      id: {
        required: true,
        type: String
      },
      backgroundColor: {
        required: false,
        type: String
      },
      title: {
        required: true,
        type: String
      },
      subtitle: {
        required: true,
        type: String
      }
    },
    components: {
      sectionTitle: Title
    },
    computed: {
      background () {
        return `bg-${this.backgroundColor}`
      },
      visible () {
        return this.title && this.subtitle
      }
    }
  }
</script>
