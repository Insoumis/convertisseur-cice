<template>
  <div class="c-cice-cost">
      <h2 class="c-cice-cost__title" v-html="ciceCost"></h2>
      <p class="c-cice-cost__text">
        C'est le coût du CICE depuis votre arrivée sur le site.
        <br/>
        Cela représente <span class="c--red" v-html="ciceMonth"></span> smics annuels, cotisations patronales comprises.
      </p>
  </div>
</template>

<style lang="scss">
@import './theme';

.c-cice-cost {
  background: $red;
  box-shadow: 0 5px 10px transparentize(#000, 0.8);
  color: $white;
  padding: 80px 0;
  text-align: center;
  z-index: -1;

  .c--red {
    color: darken($red, 15%);
  }
}

.c-cice-cost__title {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0,0,0,.12);
  color: $flashyBlue;
  display: inline-block;
  min-width: 230px;
  padding: 18px;
}

.c-cice-cost__text {
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  line-height: 1.5em;
  margin-top: 30px;
  text-align: center;

  > .c--red {
    font-weight: bold;
    font-size: 120%;
  }
}

@media (max-width: 767px) {
  .c-cice-cost {
    padding: 30px 15px;
  }

  .c-cice-cost__title {
    font-size: 20px;
  }

  .c-cice-cost__text {
    margin-top: 15px;
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
      return `${this.$options.filters.bigNumber(Math.round(this.cost))}€`
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
