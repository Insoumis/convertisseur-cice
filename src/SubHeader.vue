<template>
  <div class="c-sub-header">
    <a class="c-sub-header__link" href="https://laec.fr">Consultez le programme en ligne</a>
  </div>
</template>

<style lang="scss">
@import './theme';

.c-sub-header {
  background-color: $red;
  height: 60px;
  padding: 0 60px;
}

.c-sub-header__link {
  align-items: center;
  color: $white;
  display: inline-flex;
  font-family: 'Roboto Slab', sans-serif;
  height: 100%;
  padding: 15px;
  text-decoration: none;

  &:hover {
    background-color: darken($red, 7.5%);
  }
}
</style>
