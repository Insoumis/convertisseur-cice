<template>
  <div class="c-aec">
    <h2 class="c-aec__title">Envie d'en savoir <span class="c--red">plus ?</span> </h2>

    <div class="c-aec__content">
      <p>
        Selon un <a href="https://www.humanite.fr/sondage-exclusif-ce-qui-preoccupe-reellement-les-francais-706890" title="Sondage exclusif : ce qui préoccupe réellement les français">sondage IFOP</a> réalisé pour le journal <i>l'Humanité</i> en mai 2021, <strong>78% des Français·e·s sont favorables au rétablissement de l'ISF</strong>. Cette mesure fait partie du <strong>programme de l'Union Populaire</strong>, représentée par la candidature de Jean-Luc Mélenchon à l'élection présidentielle de 2022.
      </p>
      <p>
        Découvrez les propositions de <a href="https://laec.fr" title="Programme de Mélenchon pour la France Insoumise">l'Avenir en Commun</a>, <strong>le programme de l'Union Populaire</strong>, pour opérer la <strong>révolution fiscale</strong>&nbsp;:
      </p>
      <ul>
        <li>Rendre <strong>l'impôt sur le revenu plus progressif</strong> avec un barème à 14 tranches contre 5 aujourd'hui.</li>
        <li><strong>Rétablir et renforcer l'ISF</strong>, en incluant un volet climatique visant à taxer les gros pollueurs.</li>
        <li><strong>Supprimer la flat tax</strong> et imposer les revenus du capital comme ceux du travail.</li>
        <li>Rendre la <strong>CSG progressive</strong> avec 14 tranches. </li>
        <li>Augmenter les droits de succession <strong>sur les plus hauts patrimoines</strong> et créer un <strong>héritage maximal de 12 millions d'euros</strong> (soit 100 fois le patrimoine net médian).</li>
        <li><strong>Réduire la TVA sur les produits de première nécessité</strong> et réinstaurer une <strong>"TVA grand luxe"</strong> pour la financer.</li>
        <li>Et bien plus encore à découvrir dans <a href="https://laec.fr" title="Programme de Mélenchon pour la France Insoumise">l'Avenir en Commun</a> !</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
@import './theme';

.c-aec {
  h2 {
    color: $blue;
    margin: 80px 0 60px;
    text-align: center;
  }

  .c-aec__content {
    line-height: 1.5em;
    margin: 0 auto 150px;
    max-width: 700px;
    padding: 0 15px;
    text-align: justify;

    a {
      color: $blue;
    }
  }

  .c-aec__content__video {
    margin: 20px auto;
    min-height: 480px;
    position: relative;

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: 767px) {
    .c-aec__title {
      font-size: 20px;
      margin: 40px 0 30px;
    }

    .c-aec__content {
      margin-bottom: 80px;
    }

    .c-aec__content__video {
      min-height: 260px;
    }
  }
}
</style>

<script>
export default {
  mounted() {
    this.$refs.video1.src = this.$refs.video1.dataset.src
    this.$refs.video2.src = this.$refs.video2.dataset.src
  }
}
</script>
