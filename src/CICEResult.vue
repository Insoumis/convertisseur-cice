<template>
  <div class="c-cice-result">
    <h2 class="c-cice-result__title">
      Or jusqu'à présent, le cice n'a fait que "sauvegarder"<br />
      <span class="c--red">115 000 emplois</span>
    </h2>
    <div class="c-cice-result__text">
      <p>Et il s'agit là d'une fourchette haute ...</p>
      <p>
        Parmi les entreprises qui ont profité le plus de cet avantage fiscal, de nombreuses ont même <strong>supprimé des emplois</strong>.
      </p>
    </div>
    <div class="c-job-result__details">
      <div class="c-job-result__details__names">
        <h3 class="c-job-result__details__names__title">Entreprise</h3>
        <div v-for="company in cice"><strong>{{ company.name }}</strong></div>
      </div>
      <div class="c-job-result__details__cice">
        <h3 class="c-job-result__details__cice__title">CICE <span>touché</span></h3>
        <div v-for="company in cice">{{ company.cice / 10e6 }} millions</div>
      </div>
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
  box-shadow: 0 5px 10px transparentize(#000, 0.8);
}

.c-cice-result__title {
  color: $flashyBlue;
  margin: 80px 0 50px;
  text-align: center;

  .c--red {
    border: 1px solid rgba(0,0,0,.06);
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0,0,0,.12);
    color: $red;
    display: inline-block;
    margin-top: 25px;
    padding: 18px;
  }
}

.c-cice-result__text {
  line-height: 1.5em;
  margin: 40px auto;
  max-width: 700px;
  padding: 0 15px;
}

.c-job-result__details {
  display: flex;
  border: 1px solid rgba(0,0,0,.06);
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0,0,0,.12);
  margin: 30px auto 80px;
  max-width: 720px;
  text-align: center;
}

.c-job-result__details__names,
.c-job-result__details__cice,
.c-job-result__details__jobs, {
  width: calc(100% / 3);

  > div {
    border-top: 1px solid transparentize(#000, 0.8);
    padding: 10px 15px;
  }
}

.c-job-result__details__names__title,
.c-job-result__details__cice__title,
.c-job-result__details__jobs__title {
  color: $flashyBlue;
  font-size: 18px;
  margin: 0;
  padding: 15px;
  text-transform: uppercase;
}

@media (max-width: 767px) {
  .c-cice-result__title {
    font-size: 20px;
    margin: 50px 0 20px;
  }

  .c-job-result__details {
    margin: 40px 15px;
  }

  .c-job-result__details__names__title,
  .c-job-result__details__cice__title,
  .c-job-result__details__jobs__title {
    font-size: 14px;
    margin: 0;
    text-transform: uppercase;
  }

  .c-job-result__details__cice__title span {display: none;}

  .c-job-result__details__names,
  .c-job-result__details__cice,
  .c-job-result__details__jobs, {
    >div {padding: 10px;}
  }

  .c-job-result__details__names {
    text-align: left;
    width: 30%;
  }

  .c-job-result__details__cice {width: 40%;}

  .c-job-result__details__jobs {width: 30%;}
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
