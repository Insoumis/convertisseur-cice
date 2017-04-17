<template>
  <div class="c-sources">
    <h5 class="c-sources__title">Sources</h5>
    <a class="c-sources__link" href="http://www.fakirpresse.info/cice-la-vraie-france-des-assistes">Fakir</a>
    <a class="c-sources__link" href="http://www.journaldunet.com/business/salaire/classement/metiers/salaires-fonctionnaires">Salaires</a>
    <a class="c-sources__link" href="http://www.liberation.fr/futurs/2016/02/02/chez-sanofi-les-salaries-ont-moins-la-sante-que-les-actionnaires_1430614">Sanofi</a>
    <a class="c-sources__link" href="http://www.strategie.gouv.fr/sites/strategie.gouv.fr/files/atoms/files/rapport_cice2016_28095016_ok.pdf">France Stratégie</a>
  </div>
</template>

<style lang="scss">
@import './theme';

.c-sources {
  background: lighten($grey, 45%);
  padding: 10px;

  h5 {padding: 0;}
}

.c-sources__title {
  color: $grey;
  display: inline-block;
  margin: 0;
}

.c-sources__link {
  color: $blue;
  margin-left: 20px;
  text-align: right;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

@media (max-width: 767px) {
  .c-sources__link {
    margin-left: 8px;
  }
}
</style>
