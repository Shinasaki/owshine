import Vue from 'vue';
const state = {

}

const getters = {

}

const mutations = {

}

const actions = {
  getProfileByTag({
    commit
  }, data) {
    return new Promise((resolve, reject) => {

      // request
      Vue.http.get(`https://ow-api.com/v1/stats/pc/us/${data}/complete`).then((resp) => {
        return resolve(resp);
      }, err => {
        return reject(err);
      });

    })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
