<script>

  import { store } from './store.js';
  import axios from 'axios';
  import AppHeader from './components/Header/AppHeader.vue';
  import AppFilm from './components/Main/AppFilm.vue';
  import AppSerie from './components/Main/AppSerie.vue';


  export default {
    components:{
      AppHeader,
      AppFilm,
      AppSerie
    },

    data(){
      return{
        store, 
        apiFilmUrl: 'https://api.themoviedb.org/3/search/movie',
        apiSerieUrl: 'https://api.themoviedb.org/3/search/tv',
        parametri: { 
          api_key: '1b223db3fec4c01c747fb6d1d36c5387',
         }
        
      }
    },
    methods: {

      getFromApi(){

        if(store.titleSearched !== ''){
          this.parametri.query = store.titleSearched
        } else {
          delete this.parametri.query
        }

        axios.get(this.apiFilmUrl, { params: this.parametri })
          .then(response => {
            store.films = response.data.results;
            console.log(store.films)
          })

          axios.get(this.apiSerieUrl, { params: this.parametri })
          .then(response => {
            store.series = response.data.results;
            console.log(store.series)
          })
      }

    },

   
  }

</script>

<template>

  <AppHeader @getTitle="getFromApi"></AppHeader>
  
  <main>
    <AppFilm></AppFilm>
    <AppSerie></AppSerie>
  </main>

</template>

<style>


</style>
