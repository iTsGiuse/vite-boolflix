<script>

    import { store } from '../../store.js';

    export default {
        name: 'SingleCardFilm',
        props: ['film']

    }


</script>

<template>

    <div class="card m-2" style="height: 250px">
        <img :src="film.poster_path" class="card-img-top" alt="...">
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
    width: calc(100% / 4 - 20px)
   }

</style>