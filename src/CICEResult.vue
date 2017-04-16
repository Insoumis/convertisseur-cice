<template>
  <div class="c-cice-result">
    <h2 class="c-cice-result__title">
      Or jusqu'à présent, le cice à créé <div class="c--red">0 emploi</div>
    </h2>
    <p class="c-cice-result__text">
      Parmi les entreprises qui ont profité le plus de cet avantage fiscal, de nombreuses ont même supprimé des emplois.
    </p>
    <div class="c-job-result__details">
      <div class="c-job-result__details__names">
        <h3 class="c-job-result__details__names__title">Entreprise</h3>
        <div v-for="company in cice">{{ company.name }}</div>
      </div>
      <div class="c-job-result__details__separator"></div>
      <div class="c-job-result__details__jobs">
        <h3 class="c-job-result__details__jobs__title">CICE touché</h3>
        <div v-for="company in cice">{{ company.cice / 10e6 }} millions</div>
      </div>
      <div class="c-job-result__details__separator"></div>
      <div class="c-job-result__details__jobs">
        <h3 class="c-job-result__details__jobs__title">Emplois</h3>
        <div v-for="company in cice">{{ company.jobs }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import './theme';

.c-cice-result {
  padding: 100px 0;
}

.c-cice-result__title {
  text-align: center;
}

.c-cice-result__text {
  font-family: 'Roboto Slab', sans-serif;
  margin: 40px auto;
  max-width: 600px;
  text-align: center;
}

.c-job-result__details__names,
.c-job-result__details__jobs,
.c-job-result__details__jobs {
  > div {
    font-weight: 500;

    &:not(:last-child) {
      margin-bottom: 5px;
    }
  }
}

.c-job-result__details__names__title,
.c-job-result__details__jobs__title,
.c-job-result__details__jobs__title {
  color: $blue;
  font-size: 18px;
  text-transform: uppercase;
}
</style>

<script>
import cice from './cice'

export default {
  data() {
    return {
      cice: cice.sort((a, b) => b.cice - a.cice)
    }
  }
}
</script>
