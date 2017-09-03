export default {
  name: state => {
    return state.name
  },
  label: state => {
    return state.label
  },
  image: state => {
    return state.image
  },
  email: state => {
    return state.email
  },
  mailto: state => {
    return `mailto:${state.email}`
  },
  phone: state => {
    return state.phone
  },
  website: state => {
    return state.website
  },
  summary: state => {
    return state.summary
  },
  location: state => {
    return state.location
  },
  profiles: state => {
    return state.profiles
  }
}
