<template>
  <div class="c-aec">
    <h2 class="c-aec__title">Envie d'en savoir <span class="c--red">plus ?</span> </h2>

    <div class="c-aec__content">
      <p>
        Nous remercions l'excellente équipe de Fakir qui nous a donné l'idée de ce convertisseur avec leur article, <a target="_blank" href="http://www.fakirpresse.info/cice-la-vraie-france-des-assistes">CICE : LA (VRAIE) FRANCE DES ASSISTÉS !</a>
      </p>
      <p>
        Vous pouvez trouver des informations sur cette <a href="https://www.facebook.com/FrancoisRuffin80/videos/715943555253851/">vidéo explicative</a> et le rapport de <a href="http://www.strategie.gouv.fr/sites/strategie.gouv.fr/files/atoms/files/rapport_cice2016_28095016_ok.pdf">France Stratégie</a>.
      </p>
      <p>
        Découvrez aussi les propositions de <a href="https://laec.fr">l'Avenir en Commun</a>, le programme de la France Insoumise :
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

  @media (max-width: 767px) {
    .c-aec__title {
      font-size: 20px;
      margin: 40px 0 30px;
    }

    .c-aec__content {
      margin-bottom: 80px;
    }
  }
}
</style>
