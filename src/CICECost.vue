<template>
  <div class="c-cice-cost">
      <h1 class="c-cice-cost__title c--red" v-html="ciceCost"></h1>
      <p class="c-cice-cost__text">
        C'est le coût du CICE depuis votre arrivée.
        <br/>
        Cela représente <span class="c--red" v-html="ciceMonth"></span> smics annuels; cotisations patronales comprises.
      </p>
  </div>
</template>

<style lang="scss">
@import './theme';

.c-cice-cost {
  background: $flashyBlue;
  box-shadow: 0px 10px 20px 0px rgba($darkGrey, 0.2);
  color: $white;
  padding: 100px 0;

  .c--red {
    color: darken($red, 15%);
  }
}

.c-cice-cost__title {
  font-size: 42px;
  text-align: center;
}

.c-cice-cost__text {
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  margin-top: 40px;
  text-align: center;

  > .c--red {
    font-weight: bold;
    font-size: 120%;
  }
}
</style>

<script>
import { totalCICE, smicMonth } from './joblist'

export default {
  data() {
    return {
      cost: 0
    }
  },

  computed: {
    ciceCost() {
      return `${this.$options.filters.bigNumber(this.cost)}€`
    },

    ciceMonth() {
      return this.$options.filters.bigNumber(this.cost / (smicMonth * 12))
    }
  },

  mounted() {
    setTimeout(() => this.updateCost(), 1000)
  },

  methods: {
    updateCost() {
      this.cost += totalCICE / (365 * 24 * 60 * 60)

      setTimeout(() => this.updateCost(), 1000)
    }
  }
}
</script>
