export default {
  items: state => {
    return state.items
  },
  active: (state, getters) => {
    return getters.items[state.active]
  }
}
