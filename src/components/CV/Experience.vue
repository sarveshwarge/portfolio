<template lang="pug">
  .row
    .col-8
      p
        strong.text-uppercase.midnight-blue(v-html="position")
      p
        a.concrete(:href="website", target="_blank")
          i.fa.mr-2(:class="icon")
          span(v-html="company")
      p.text-justify.silver.summary.fw1.lh-2(v-html="summary")
      hr.mt-3.mb-5
    .col-4.text-right.small.silver
      p
        i.fa.fa-calendar.mr-2
        span(v-html="date")
</template>

<script>
  import moment from 'moment'
  export default {
    name: 'cv-experience',
    props: {
      experience: {
        type: Object,
        required: true
      }
    },
    computed: {
      position () {
        return this.experience.position || this.experience.area
      },
      company () {
        return this.experience.company || this.experience.institution
      },
      summary () {
        return this.experience.summary || this.experience.studyType
      },
      website () {
        return this.experience.website
      },
      date () {
        return `${this.start} — ${this.end}`
      },
      start () {
        return moment(this.experience.startDate).format('MMMM YYYY')
      },
      end () {
        return (typeof this.experience.endDate === 'undefined') ? 'Huidig' : moment(this.experience.endDate).format('MMMM YYYY')
      },
      icon () {
        return (typeof this.experience.company !== 'undefined') ? 'fa-briefcase' : 'fa-graduation-cap'
      }
    }
  }
</script>

<style lang="scss" scoped="scoped"></style>
