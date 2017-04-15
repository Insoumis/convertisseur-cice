<template>
  <div class="c-converter-header">
    <h1 class="c-converter-header__title">
      Le convertisseur
      <span class="c--red">CICE</span>
    </h1>
    <p class="c-converter-header__intro">
      Le CICE (Crédit d'Impôt Compétitivité et Emploi) est un avantage fiscal pour les entreprises. Il coûte environ 20 milliards par an, sans contrepartie exigée. Initialement financé pour créer des emplois, il n'aura réussi qu'à <em>sauvegarder</em> entre 45 000 et 115 000 emplois. Cela représente donc 200 000€ par emploi protégé. Le CICE a surtout permis d'augmenter les marges des entreprises, et n'a eu aucun effet sur l'emploi. Plus d'informations avec <a href="https://www.facebook.com/FrancoisRuffin80/videos/715943555253851/">une vidéo explicative</a>, et <a href="http://www.strategie.gouv.fr/sites/strategie.gouv.fr/files/atoms/files/rapport_cice2016_28095016_ok.pdf">le rapport complet de France Stratégie</a>.
      <br/>
      <br/>
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
