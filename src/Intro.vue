<template>
  <div class="c-converter-header">
    <h1>
      Le convertisseur
      <span class="c--red">CICE</span>
    </h1>
    <div class="intro">
      <p>Le CICE (Crédit d'Impôt Compétitivité et Emploi) est un avantage fiscal pour les entreprises.</p>

      <p>Il coûte environ <strong>20 milliards par an, sans contrepartie</strong> exigée. Initialement financé pour créer des emplois, il n'aura réussi qu'à sauvegarder entre 45 000 et 115 000 emplois. Cela représente donc <strong>200 000€ par emploi protégé</strong>.</p>

      <p class="bigger">Si le CICE était supprimé, <strong>22 milliards pourraient tous les ans être investis dans le secteur public</strong>.</p>
    </div>
    <div class="down">
      Simulez les emplois permis par sa <strong>suppression</strong>
      <i class="fa fa-chevron-circle-down" aria-hidden="true"></i>
    </div>
  </div>
</template>

<style lang="scss">
@import './theme';

.c-converter-header {
  box-shadow: 0 5px 15px transparentize(#000, 0.8);
  padding-top: 10px;
  position: relative;

  h1 {
    color: $flashyBlue;
    font-size: 50px;
    line-height: 54px;
    margin: 70px 0 60px;
    padding: 0 10px;
    text-align: center;
  }

  .intro {
    margin: 60px auto;
    max-width: 700px;
    line-height: 1.5em;

    strong {font-size: 1.1em;}
  }

  .down {
    color: $flashyBlue;
    font-family: Montserrat, serif;
    font-size: 20px;
    padding-bottom: 30px;
    position: relative;
    text-align: center;
    text-transform: uppercase;

    strong {color: $red;}

    i {
      color: $main;
      display: block;
      font-size: 1.2em;
      margin-top: 15px;
    }
  }
}

/*
@media (max-width: 500px) {
  .c-converter-header__title {
    font-size: 28px;
  }
}*/
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
