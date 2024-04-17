<script>

    export default {
        name: 'AppFilm'
    }


</script>

<template>

    <section id="film" class="mt-3 container">
        <div class="row">
            <h5>Film</h5>
        </div>
        <div class="row">
            <div class="col d-flex flex-wrap">
                <div class="card" style="height: 200px">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text mb-3">Titolo: </p>
                        <p class="card-text mb-3">Titolo Originale: </p>
                        <p class="card-text mb-3">Lingua: </p>
                        <p class="card-text mb-3">Voto: </p>
                    </div>
                </div>
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