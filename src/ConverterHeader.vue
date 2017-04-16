<template>
  <div class="c-converter-header">
    <h1 class="c-converter-header__title">
      Le convertisseur
      <span class="c--red">CICE</span>
    </h1>
    <div class="c--two-columns">
      <p class="c-converter-header__intro">
        Le CICE (Crédit d'Impôt Compétitivité et Emploi) est un avantage fiscal pour les entreprises. Il coûte environ 20 milliards par an, sans contrepartie exigée. Initialement financé pour créer des emplois, il n'aura réussi qu'à <em>sauvegarder</em> entre 45 000 et 115 000 emplois. Cela représente donc 200 000€ par emploi protégé. Le CICE a surtout permis d'augmenter les marges des entreprises, et n'a eu aucun effet sur l'emploi. Plus d'informations avec <a href="https://www.facebook.com/FrancoisRuffin80/videos/715943555253851/">une vidéo explicative</a>, et <a href="http://www.strategie.gouv.fr/sites/strategie.gouv.fr/files/atoms/files/rapport_cice2016_28095016_ok.pdf">le rapport complet de France Stratégie</a>.
      </p>
      <div class="c-converter-header__cost">
        <div class="c--red" v-html="ciceCostHtml"></div>
        C'est le coût du CICE depuis votre arrivée.<br/>
        Cela représente <span class="c--red" v-html="ciceMonthHtml"></span> smics annuels; charges patronales comprises.
      </div>
    </div>
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

.c-converter-header__intro, .c-converter-header__cost {
  font-family: 'Montserrat', sans-serif;
  margin: 40px 0;
  max-width: 500px;
  padding: 0 30px;

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
    font-size: 22px;
  }

  .c-converter-header__intro {
    margin-top: 0;
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
