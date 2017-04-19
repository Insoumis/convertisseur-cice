<template>
  <div class="c-aec">
    <h2 class="c-aec__title">Envie d'en savoir <span class="c--red">plus ?</span> </h2>

    <div class="c-aec__content">
      <p>
        Nous remercions l'excellente équipe de Fakir qui nous a donné l'idée de ce convertisseur avec leur article, <a target="_blank" href="http://www.fakirpresse.info/cice-la-vraie-france-des-assistes">CICE : LA (VRAIE) FRANCE DES ASSISTÉS !</a>
      </p>
      <p>
        Vous pouvez trouver des informations sur le rapport de <a href="http://www.strategie.gouv.fr/sites/strategie.gouv.fr/files/atoms/files/rapport_cice2016_28095016_ok.pdf">France Stratégie</a> ou sur les deux vidéos ci-dessous :
      </p>
      <div class="c-aec__content__video">
        <iframe ref="video1" data-src="https://www.youtube.com/embed/TETFhY3eAsE?start=278&end=469" frameborder="0" allowfullscreen></iframe>
      </div>
      <div class="c-aec__content__video">
        <iframe ref="video2" data-src="https://www.youtube.com/embed/56hLRvsWbCA" frameborder="0" allowfullscreen></iframe>
      </div>
      <p>
        Découvrez aussi les propositions de <a href="https://laec.fr" title="Programme de Mélenchon pour la France Insoumise">l'Avenir en Commun</a>, le programme de la France Insoumise :
      </p>
      <ul>
        <li><strong>Suppression du CICE</strong> et des autres niches fiscales.</li>
        <li>Recrutement de <strong>fonctionnaires</strong>.</li>
        <li>Plan de relance de 100 milliards pour la <strong>planification écologique</strong> et l'<strong>économie de la mer</strong>.</li>
        <li>Réforme de l'impôt sur les sociétés pour que les <strong>PME paient moins</strong> et que le <strong>CAC40 n'y échappe plus</strong>.</li>
        <li>Favorisation de l'<strong>investissement</strong> plutôt que les dividendes aux actionnaires.</li>
        <li>Instauration d'un <strong>fonds de solidarité inter-entreprises</strong> au profit des PME et des sous-traitants.</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
@import './theme';

.c-aec {
  h2 {
    color: $flashyBlue;
    margin: 80px 0 60px;
    text-align: center;
  }

  .c-aec__content {
    line-height: 1.5em;
    margin: 0 auto 150px;
    max-width: 700px;
    padding: 0 15px;

    a {
      color: $flashyBlue;
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
