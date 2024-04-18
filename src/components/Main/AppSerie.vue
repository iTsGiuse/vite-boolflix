<script>

    import { store } from '../../store.js';
    import SingleCardSerie from './SingleCardSerie.vue';

    export default {
        name: 'AppSerie',

        components: {
            SingleCardSerie
        },

        data(){
            return{
                store
            }
        }
    }


</script>

<template>

    <section id="serie" class="mt-3 container">
        <div class="row">
            <h5>Serie ({{ store.series.length }}) </h5>
        </div>
        <div class="row">
            <div class="col d-flex flex-wrap">
                <SingleCardSerie  v-for="serie in store.series" :key="serie.id" :serie="serie"></SingleCardSerie>
            </div>
        </div>
    </section>

</template>

<style scoped lang="scss">

    #serie{
        border: 5px solid yellow;
    }

</style>