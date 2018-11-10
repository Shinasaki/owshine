<template>
  <div class="section landing-section2">
    <div class="container">
      <div class="row m-0">
        <div class="col-12 text-center mb-4 title">
          <span>THAILAND TOP 100</span>
        </div>
        <div class="col-12 text-center">
          <p>ALL DATA: <b class="color-orange1" v-if="countPlayerData">{{ countPlayerData }}</b> PLAYER</p>

        </div>
        <div class="col-12 text-center mb-2">
          <p>HAVE RANK: <b class="color-orange1" v-if="countPlayerRankingData">{{ countPlayerRankingData }}</b> PLAYER</p>

        </div>
        <div class="col-12 mb-4">
          <hr>
        </div>
        <div class="col-12 item" v-for="(items, count) in playerRankingData" :key="items._id" v-if="playerRankingData">
          <div class="row m-0">
            <div class="col-2 col-md-1">
              {{ count + 1 }}
            </div>
            <div class="col-3 col-md-2">
              <img :src="items.portrait">
            </div>
            <div class="col-5 col-md text-left">
              <!-- {{ items.tag.split("#")[0] }} -->
              {{ items.tag }}
            </div>
            <div class="col-2 col-md">
              {{ items.rating }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'section2',
  data() {
    return {

    }
  },
  methods: {
    ...mapActions(['getPlayerRanking', 'countPlayer', 'countPlayerRanking']),
  },
  computed: {
    ...mapGetters(['playerRankingData', 'countPlayerRankingData', 'countPlayerData'])
  },
  mounted() {
    this.getPlayerRanking();
    this.countPlayer();
    this.countPlayerRanking();
  }
}
</script>

<style>
</style>
