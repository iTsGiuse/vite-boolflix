<script>

    import { store } from '../../store.js';

    export default {
        name: 'SingleCardFilm',
        props: ['film'],

        data(){
            return{
                store,
                voto: Math.ceil(Math.ceil(this.film.vote_average) / 2),
                stelline: '',
            }
        },
        methods:{
            
            fixLingua(film){
                store.bandiere.forEach(bandiera => {
                    if (film.original_language === bandiera.lingua) {
                        film.original_language = bandiera.bandiera;
                    }
                });
            },
            
            fixStelline(voto){
                store.stelle.forEach(stella => {
                    if (voto === stella.voto){
                        this.stelline = stella.numeroStelle;
                    } 
                });
                 
            },
        }
    }


</script>

<template>

    <div class="card m-2" style="height: 250px">
        <img :src="film.poster_path" class="card-img-top" alt="...">
        <div class="card-body">
            <p class="card-text text-center mb-3">Titolo: {{ film.name }} </p>
            <p class="card-text text-center mb-3">Titolo Originale: {{ film.original_title }}</p>
            <p class="card-text text-center mb-3" :v-if="fixLingua(film)">Lingua: {{ film.original_language }} </p>
            <p class="card-text text-center mb-3" :v-if="fixStelline(voto)">Voto: {{ stelline }} </p>
        </div>
    </div>

</template>

<style scoped lang="scss">
   .card{
    width: calc(100% / 4 - 20px)
   }

</style>