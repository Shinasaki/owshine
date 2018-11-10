import Vue from "vue";
const state = {
  profile: null,
  playerRanking: null,
  countPlayer: 0,
  countPlayerRanking: 0
};

const getters = {
  profileData: state => {
    return state.profile;
  },
  playerRankingData: state => {
    return state.playerRanking;
  },
  countPlayerData: state => {
    return state.countPlayer;
  },
  countPlayerRankingData: state => {
    return state.countPlayerRanking;
  }
};

const mutations = {
  profileUpdate(state, data) {
    state.profile = data;
  },
  playerRankingUpdate(state, data) {
    state.playerRanking = data;
  },
  countPlayerRakingUpdate(state, data) {
    state.countPlayerRanking = data;
  },
  countPlayerUpdate(state, data) {
    state.countPlayer = data;
  }
};

const actions = {
  getProfileByTag({ commit }, data) {
    return new Promise((resolve, reject) => {
      // clear profile data
      commit("profileUpdate", null);

      // request
      Vue.http
        .post(`http://localhost:5000/v1/player`, {
          payload: data
        })
        .then(
          resp => {
            commit("profileUpdate", resp.body.message);
            return resolve(resp);
          },
          err => {
            commit("profileUpdate", null);
            return reject(err);
          }
        );
    });
  },

  getPlayerRanking({ commit }, data) {
    return new Promise((resolve, reject) => {
      // clear profile data
      commit("playerRankingUpdate", null);

      // request
      Vue.http.get(`http://localhost:5000/v1/player`).then(
        resp => {
          commit("playerRankingUpdate", resp.body.message);
          return resolve(resp);
        },
        err => {
          commit("playerRankingUpdate", null);
          return reject(err);
        }
      );
    });
  },
  countPlayer({ commit }) {
    commit("countPlayerUpdate", 0);

    Vue.http.get("http://localhost:5000/v1/player/count").then(
      resp => {
        commit("countPlayerUpdate", resp.body.message);
        return resolve(resp);
      },
      err => {
        commit("countPlayerUpdate", 0);
        return reject(err);
      }
    );
  },
  countPlayerRanking({ commit }) {
    commit("countPlayerRankingUpdate", 0);

    Vue.http.get("http://localhost:5000/v1/player/count/rank").then(
      resp => {
        commit("countPlayerRakingUpdate", resp.body.message);
        return resolve(resp);
      },
      err => {
        commit("countPlayerRankingUpdate", 0);
        return reject(err);
      }
    );
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
