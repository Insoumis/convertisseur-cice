<template>
  <div class="c-sources">
    <h5 class="c-sources__title">Sources</h5>
    <a class="c-sources__link" href="http://www.fakirpresse.info/cice-la-vraie-france-des-assistes">Fakir</a>
    <a class="c-sources__link" href="http://www.journaldunet.com/business/salaire/classement/metiers/salaires-fonctionnaires">Salaires</a>
    <a class="c-sources__link" href="http://www.liberation.fr/futurs/2016/02/02/chez-sanofi-les-salaries-ont-moins-la-sante-que-les-actionnaires_1430614">Sanofi</a>
  </div>
</template>

<style lang="scss">
@import './theme';

.c-sources {
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 15px;
  top: 0;
}

.c-sources__title {
  color: $grey;
  margin: 0 0 5px 0;
}

.c-sources__link {
  color: $blue;
  text-decoration: none;
  font-family: 'Roboto Slab', sans-serif;
  text-align: right;
}

@media(max-width: 500px) {
  .c-sources {
    opacity: 0.6;
    right: 10px;
    top: 70px;
  }

  .c-sources__title, .c-sources__link {
    font-size: 12px;
  }
}
</style>
