<script>

    import SingleCardSerie from './SingleCardSerie.vue';

    export default {
        name: 'AppSerie',

        components: {
            SingleCardSerie
        }
    }


</script>

<template>

    <section id="serie" class="mt-3 container">
        <div class="row">
            <h5>Serie</h5>
        </div>
        <div class="row">
            <div class="col d-flex flex-wrap">
                <SingleCardSerie></SingleCardSerie>
            </div>
        </div>
    </section>

</template>

<style scoped lang="scss">

    #serie{
        height: 250px;
        border: 5px solid yellow;
    }

</style>