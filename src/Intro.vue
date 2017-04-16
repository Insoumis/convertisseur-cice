<template>
  <div class="c-converter-header">
    <h1 class="c-converter-header__title">
      Le convertisseur
      <span class="c--red">CICE</span>
    </h1>
      <p class="c-converter-header__intro">
        Le CICE (Crédit d'Impôt Compétitivité et Emploi) est un avantage fiscal pour les entreprises.
        <br/>
        <br/>
        <strong>Il coûte environ 20 milliards par an, sans contrepartie exigée. Initialement financé pour créer des emplois, il n'aura réussi qu'à <em>sauvegarder</em> entre 45 000 et 115 000 emplois.</strong> Cela représente donc 200 000€ par emploi protégé.
        <br/>
        <br/>
        Si le CICE était supprimé, 22 milliards pourraient tous les ans être investis dans le secteur public.
        <br/>
        <br/>
        <br/>
        <br/>
        <strong>Simulez les emplois permis par sa suppresion.</strong>
      </p>
  </div>
</template>

<style lang="scss">
@import './theme';

.c-converter-header {
  box-shadow: 0px 10px 20px 0px rgba($darkGrey, 0.2);
  padding-top: 10px;
  position: relative;
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
  font-size: 18px;
  letter-spacing: 0.5px;
  margin: 100px auto;
  max-width: 700px;
  padding: 0 30px;

  > strong {
    font-weight: 500;
  }

  > strong:last-child {
    display: block;
    position: relative;
    text-align: center;

    &:after {
      bottom: -35px;
      content: '↓';
      font-size: 32px;
      left: 50%;
      position: absolute;
      transform: translateX(-50%);
    }
  }

  > div.c--red {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 20px;
    text-align: center;
  }

  > span.c--red {
    display: inline-block;
    width: 40px;
  }

  &.c-converter-header__cost {
    text-align: center;
  }
}

@media (max-width: 500px) {
  .c-converter-header__title {
    font-size: 28px;
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
