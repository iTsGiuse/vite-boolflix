<script>

  import { store } from './store.js';
  import axios from 'axios';
  import AppHeader from './components/Header/AppHeader.vue';
  import AppFilm from './components/Main/AppFilm.vue';
  import SingleCardFilm from './components/Main/SingleCardFilm.vue';
  import AppSerie from './components/Main/AppSerie.vue';
  import SingleCardSerie from './components/Main/SingleCardSerie.vue';

  export default {
    components:{
      AppHeader,
      AppFilm,
      SingleCardFilm,
      AppSerie,
      SingleCardSerie
    } 
  }

</script>

<template>

  <AppHeader></AppHeader>

  <main>
    <AppFilm>
      <SingleCardFilm></SingleCardFilm>
    </AppFilm>
    <AppSerie>
        <SingleCardSerie></SingleCardSerie>
    </AppSerie>
  </main>

</template>

<style>


</style>
