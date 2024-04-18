<script>

    import { store } from '../../store.js';

    export default {
        name: 'SingleCardSerie',
        props: ['serie'],

        data(){
            return{
                store,
                voto: Math.ceil(Math.ceil(this.serie.vote_average) / 2),
                stelline: '',
            }
        },
        methods:{
            
            fixLingua(serie){
                store.bandiere.forEach(bandiera => {
                    if (serie.original_language === bandiera.lingua) {
                        serie.original_language = bandiera.bandiera;
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
        <img :src="serie.poster_path" class="card-img-top" alt="...">
        <div class="card-body">
            <p class="card-text text-center mb-3">Titolo: {{ serie.name }} </p>
            <p class="card-text text-center mb-3">Titolo Originale: {{ serie.original_title }}</p>
            <p class="card-text text-center mb-3" :v-if="fixLingua(serie)">Lingua: {{ serie.original_language }} </p>
            <p class="card-text text-center mb-3" :v-if="fixStelline(voto)">Voto: {{ stelline }} </p>
        </div>
    </div>

</template>

<style scoped lang="scss">

    .card{
        width: calc(100% / 4 - 20px)
    }

</style>