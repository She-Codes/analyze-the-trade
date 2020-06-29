const app = new Vue({
  el: '#app',
  data: {
    entry: '',
    atr: '',
    sellers: '',
    maxLoss: '',
    timeIn: '',
    speedOut: '',
    visits: '',
    oddsRatio: '',
  },
  computed: {
    stop: function () {
      return Number(this.entry) - Number(this.atr) * 0.2;
    },
    reward: function () {
      return Number(this.sellers) - Number(this.entry);
    },
    risk: function () {
      return Number(this.entry) - this.stop;
    },
    ratio: function () {
      return this.reward / this.risk;
    },
    quantity: function () {
      return Number(this.maxLoss) / this.risk;
    },
    oddsTotal: function () {
      return (
        Number(this.timeIn) +
        Number(this.speedOut) +
        Number(this.visits) +
        Number(this.oddsRatio)
      );
    },
    emoji: function () {
      if (this.oddsTotal === 7 || this.oddsTotal === 8) {
        return '😀';
      }

      if (this.oddsTotal === 5 || this.oddsTotal === 6) {
        return '😏';
      }

      if (this.oddsTotal <= 4) {
        return '😐';
      }
    },
  },
});
