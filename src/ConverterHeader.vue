<template>
  <div class="c-converter-header">
    <h1 class="c-converter-header__title">
      Le convertisseur
      <span class="c--red">CICE</span>
    </h1>
    <p class="c-converter-header__intro">
      Le CICE coûte cher (<span class="c--red" v-html="ciceCostHtml"></span> depuis que vous avez ouvert ce site). Voici un convertisseur qui vous permet de réinvestir les fonds du CICE vers des recrutements dans les secteurs publics.
    </p>
  </div>
</template>

<style lang="scss">
@import './theme';

.c-converter-header {
  padding-top: 10px;
}

.c-converter-header__title {
  color: $flashyBlue;
  font-size: 42px;
  line-height: 54px;
  margin-bottom: 0;
  padding: 0 10px;
  text-align: center;
}

.c-converter-header__intro {
  font-family: 'Montserrat', sans-serif;
  margin: 40px auto 40px auto;
  max-width: 500px;
  padding: 0 30px;
}

@media (max-width: 500px) {
  .c-converter-header__title {
    font-size: 22px;
  }

  .c-converter-header__intro {
    margin-top: 0;
  }
}
</style>

<script>
import { totalCICE } from './joblist'

export default {
  data() {
    return {
      ciceCost: 0,
      cicePerSec: totalCICE / (365 * 24 * 60 * 60)
    }
  },

  computed: {
    ciceCostHtml() {
      return `${this.$options.filters.bigNumber(Math.round(this.ciceCost))}€`
    }
  },

  mounted() {
    setTimeout(() => this.updateCiceCost(), 1000)
  },

  methods: {
    updateCiceCost() {
      this.ciceCost += this.cicePerSec

      setTimeout(() => this.updateCiceCost(), 1000)
    }
  }
}
</script>
