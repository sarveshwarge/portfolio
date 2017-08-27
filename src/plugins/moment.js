import moment from 'moment'

export default {
  install (Vue, name = '$moment') {
    moment.locale('nl')
    Vue.prototype[name] = moment
  }
}
