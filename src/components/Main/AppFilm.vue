<script>

    import SingleCardFilm from './SingleCardFilm.vue';

    export default {
        name: 'AppFilm',

        components: {
            SingleCardFilm
        }
    }


</script>

<template>

    <section id="film" class="mt-3 container">
        <div class="row">
            <h5>Film</h5>
        </div>
        <div class="row">
            <div class="col d-flex flex-wrap">
               <SingleCardFilm></SingleCardFilm>
            </div>
        </div>
    </section>


</template>

<style scoped lang="scss">

    #film{
        height: 250px;
        border: 5px solid blue;
    }


</style>