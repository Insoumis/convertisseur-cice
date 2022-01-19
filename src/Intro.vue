<template>
  <div class="c-converter-header">
    <h1 class="c-converter-header__title">
      Le convertisseur
      <span class="c--red">ISF</span>
    </h1>
    <div class="c-converter-header__intro">
      <p>En 2017, le président Emmanuel Macron décide de <strong>supprimer l'ISF (Impôt de Solidarité sur la Fortune)</strong>, un impôt progressif s'appliquant aux foyers français les plus aisés, et de le remplacer par l'IFI (Impôt sur la Fortune Immobilière).</p>

      <p>Là où l'ISF prenait en compte les biens immobiliers et les actifs financiers, l'IFI ne concerne <strong>que les biens immobiliers</strong> et s'applique donc à beaucoup moins de patrimoine.</p>

      <p>Au-delà du caractère injuste de la suppression de <strong>cet impôt de redistribution</strong>, cette réforme a aussi constitué <strong>une perte importante de revenu pour l'Etat</strong>. En effet, en 2007, l'ISF représentait 1,6% des recettes fiscales nettes de l'Etat !</p>

      <p>Entre 2012 et 2017, l'ISF a rapporté environ <strong>5 milliards d'euros par an à l'Etat</strong>. Découvrez quelles réformes ces recettes auraient pu financer si l'ISF n'avait pas été supprimé&nbsp;!</p>
    </div>
    <div class="c-converter-header__down">
      Simulez ce que financerait le <strong>rétablissement de l'ISF</strong>
      <img src="/dist/arrow_down.png" alt="arrow down" height="24" width="24">
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
    color: $blue;
    font-size: 50px;
    margin: 40px 0 30px;
    padding: 0 10px;
    text-align: center;
  }

  .c-converter-header__intro {
    margin: 30px auto;
    max-width: 700px;
    line-height: 1.5em;
    padding: 0 15px;
    text-align: justify;

    strong {font-size: 1.1em;}
  }

  .c-converter-header__down {
    color: $blue;
    font-family: Inter, sans-serif;
    font-size: 25px;
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
import { totalISF, smicMonth } from './dataISF'

export default {
  data() {
    return {
      ciceCost: 0,
      cicePerSec: totalISF / (365 * 24 * 60 * 60)
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
