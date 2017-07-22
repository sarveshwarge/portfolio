import { mapGetters, mapActions } from 'vuex'
import _ from 'lodash'

export default {
  computed: {
    ...mapGetters('menu', [
      'items'
    ])
  },
  methods: {
    ...mapActions('menu', [
      'active'
    ]),
    setActive (isVisible, entry) {
      if (isVisible) {
        this.active(_.indexOf(
          this.items, _.find(this.items, (item) => {
            return item.section === `#${this.id}`
          })
        ))
      }
    }
  }
}
