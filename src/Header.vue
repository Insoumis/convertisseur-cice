<template>
  <div class="c-header">
    <img src="./assets/logo.png" height="60">
    <button class="c-header__cice" @click="toggleCICE">Le CICE</button>

    <div class="c-header__cice-box" v-if="isCICEOpened">
      <h3 class="c-header__cice-box__title">CICE</h3>
      <p class="c-header__cice-box__text">
        Le CICE (Crédit d'Impôt Compétitivité et Emploi) est un avantage fiscal pour les entreprises. Il coûte environ 20 milliards par an, sans contrepartie exigée. Initialement financé pour créer des emplois, il n'aura réussi qu'à sauvegarder entre 45 000 et 115 000 emplois. Cela représente donc 200 000€ par emploi protégé. Le CICE a surtout permis d'augmenter les marges des entreprises, et n'a eu aucun effet sur l'emploi. Plus d'informations avec <a href="https://www.facebook.com/FrancoisRuffin80/videos/715943555253851/">une vidéo explicative</a>, et <a href="http://www.strategie.gouv.fr/sites/strategie.gouv.fr/files/atoms/files/rapport_cice2016_28095016_ok.pdf">le rapport complet de France Stratégie</a>
      </p>
    </div>
  </div>
</template>

<style lang="scss">
@import './theme';

.c-header {
  align-items: center;
  background-color: $red;
  display: flex;
  height: 80px;
  justify-content: center;
  padding: 0 40px;
}

.c-header__cice {
  background-color: rgba(0, 0, 0, 0.15);
  border-radius: 3px;
  border: 1px solid rgba(255, 255, 255, 0.55);
  color: $white;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  padding: 5px 10px;
  position: absolute;
  right: 10px;
  text-transform: uppercase;
}

.c-header__cice-box {
  background-color: $white;
  border-radius: 3px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
  font-family: 'Roboto Slab', sans-serif;
  padding: 10px;
  position: absolute;
  right: 10px;
  top: 70px;
  width: 380px;
  z-index: 4;
}

.c-header__cice-box__title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  margin: 0;
  text-transform: uppercase;
}

.c-header__cice-box__text {
  font-family: 'Roboto Slab', sans-serif;
  letter-spacing: 0.1px;
  font-size: 14px;
  color: rgba($darkGrey, 0.7);
}

@media(max-width: 500px) {
  .c-header__cice-box {
    height: auto;
    max-height: 280px;
    right: 0;
    top: 80px;
    width: 100%;
  }
}
</style>

<script>
export default {
  data() {
    return {
      isCICEOpened: false
    }
  },

  methods: {
    toggleCICE() {
      this.isCICEOpened = !this.isCICEOpened
    }
  }
}
</script>
