import Vue from 'vue'
import Vuex from 'vuex'

import basics from './modules/basics'
import resume from './modules/resume'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    basics,
    resume
  }
})
