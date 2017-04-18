<template>
  <div class="c-converter-header">
    <h1 class="c-converter-header__title">
      Le convertisseur
      <span class="c--red">CICE</span>
    </h1>
    <div class="c-converter-header__intro">
      <p>Le CICE (Crédit d'Impôt Compétitivité et Emploi) est un avantage fiscal pour les entreprises.</p>

      <p>Il coûte environ <strong>20 milliards d'euros par an, sans contrepartie</strong> exigée. Initialement financé pour créer des emplois, il n'aura réussi qu'à sauvegarder entre 45 000 et 115 000 emplois. Cela représente donc <strong>200 000 euros par emploi protégé</strong>.</p>

      <p>Si le CICE était supprimé, ce sont donc <strong>20 milliards d'euros qui pourraient être investis dans le secteur public</strong> chaque année.</p>
    </div>
    <div class="c-converter-header__down">
      Simulez les emplois permis par sa <strong>suppression</strong>
      <img src="./assets/arrow.down.png" alt="arrow down" height="24" width="24">
    </div>
  </div>
</template>

<style lang="scss">
@import './theme';

.c-converter-header {
  box-shadow: 0 5px 15px transparentize(#000, 0.8);
  padding-top: 10px;
  position: relative;

  .c-converter-header__title {
    color: $flashyBlue;
    font-size: 50px;
    margin: 70px 0 60px;
    padding: 0 10px;
    text-align: center;
  }

  .c-converter-header__intro {
    margin: 60px auto;
    max-width: 700px;
    line-height: 1.5em;
    padding: 0 15px;

    strong {font-size: 1.1em;}
  }

  .c-converter-header__down {
    color: $flashyBlue;
    font-family: Montserrat, serif;
    font-size: 20px;
    padding: 0 15px 30px;
    position: relative;
    text-align: center;
    text-transform: uppercase;

    > strong {
      color: $red;
    }

    > img {
      display: block;
      margin: 20px auto;
    }
  }

  @media (max-width: 767px) {
    .c-converter-header__title {
      font-size: 30px;
      margin: 30px 0;
    }

    .c-converter-header__intro {
      margin: 30px auto 40px;
    }
  }
}
</style>

<script>
import { totalCICE, smicMonth } from './joblist'

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
    },

    ciceMonthHtml() {
      return `${this.$options.filters.bigNumber(this.ciceCost / (smicMonth * 12))}`
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
