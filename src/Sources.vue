<template>
  <div class="c-sources">
    <h5 class="c-sources__title">Sources</h5>
    <a class="c-sources__link" href="http://www.fakirpresse.info/cice-la-vraie-france-des-assistes">Fakir</a>
    <a class="c-sources__link" href="http://www.journaldunet.com/business/salaire/classement/metiers/salaires-fonctionnaires">Salaires</a>
    <a class="c-sources__link" href="http://www.liberation.fr/futurs/2016/02/02/chez-sanofi-les-salaries-ont-moins-la-sante-que-les-actionnaires_1430614">Sanofi</a>
    <a class="c-sources__link" href="http://www.strategie.gouv.fr/sites/strategie.gouv.fr/files/atoms/files/rapport_cice2016_28095016_ok.pdf">FranceStratégie</a>
  </div>
</template>

<style lang="scss">
@import './theme';

.c-sources {
  background: lighten($grey, 45%);
  align-items: baseline;
  display: flex;
  flex-direction: row;
  padding: 10px;
}

.c-sources__title {
  color: $grey;
  margin: 0;
}

.c-sources__link {
  color: $blue;
  font-family: 'Roboto Slab', sans-serif;
  margin-left: 5px;
  text-align: right;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}
</style>
