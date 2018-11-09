import Vuex from 'vuex';
import Vue from 'vue';

import profile from './modules/profile';

Vue.use(Vuex)


// Export
export default new Vuex.Store({
  modules: {
    profile
  },
  strict: false
})
