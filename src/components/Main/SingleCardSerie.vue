<script>

    import { store } from '../../store.js';

    export default {
        name: 'SingleCardSerie',
        props: ['serie']

    }


</script>

<template>

<div class="card m-2" style="height: 250px">
        <img :src="serie.poster_path" class="card-img-top" alt="...">
        <div class="card-body">
            <p class="card-text text-center mb-3">Titolo: {{ serie.name }} </p>
            <p class="card-text text-center mb-3">Titolo Originale: {{ serie.original_title }}</p>
            <p class="card-text text-center mb-3">Lingua: {{ serie.original_language }} </p>
            <p class="card-text text-center mb-3">Voto: {{ serie.vote_average }} </p>
        </div>
    </div>

</template>

<style scoped lang="scss">

    .card{
        width: calc(100% / 4 - 20px)
    }

</style>