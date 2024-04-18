<script>

    import { store } from '../../store.js';
    import SingleCardFilm from './SingleCardFilm.vue';

    export default {
        name: 'AppFilm',

        components: {
            SingleCardFilm
        },

        data(){
            return{
                store
            }
        },

    }


</script>

<template>

    <section id="film" class="mt-3 container">
        <div class="row">
            <h5>Film ({{ store.films.length }}) </h5>
        </div>
        <div class="row">
            <div class="col d-flex flex-wrap">
               <SingleCardFilm v-for="film in store.films" :key="film.id" :film="film"></SingleCardFilm>
            </div>
        </div>
    </section>


</template>

<style scoped lang="scss">

    #film{
        border: 5px solid blue;
    }


</style>