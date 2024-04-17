<script>

    import { store } from '../../store.js';

    export default {
        name: 'SingleCardFilm',

        data(){
            return{
                store
            }
        }


    }


</script>

<template>

    <div class="card m-2" style="height: 250px" v-for="film in store.films">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <p class="card-text text-center mb-3">Titolo: {{ film.name }} </p>
            <p class="card-text text-center mb-3">Titolo Originale: {{ film.original_title }}</p>
            <p class="card-text text-center mb-3">Lingua: {{ film.original_language }} </p>
            <p class="card-text text-center mb-3">Voto: {{ film.vote_average }} </p>
        </div>
    </div>

</template>

<style scoped lang="scss">
   .card{
    width: calc(100% / 3 - 20px)
   }

</style>