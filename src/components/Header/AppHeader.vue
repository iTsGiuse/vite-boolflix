<script>

    import { store } from '../../store.js';

    export default {
        name: 'AppHeader',

        data(){
            return{
                store
            }
        }
    }


</script>

<template>

    <header>
        <div class="container">
            <div class="row justify-content-between align-items-center">
                <div class="col d-flex align-items-center ">
                    <img src="#" alt="Logo">
                    <h1 class="ms-2">Bool Flix</h1>
                </div>
                <div class="col text-end">
                    <input type="text" class="p-2" placeholder="Inserisci il titolo di un film o di una serie" v-model="store.titleSearched">
                    <button type="button" class="ms-2 p-2" @click="$emit('getTitle')">CERCA</button>
                </div>
            </div>
        </div>
    </header>

</template>

<style scoped lang="scss">

    header{
        height: 70px;
        
        .container{
            border: 5px solid red;
        }
        input{
        width: 250px;
        }
    }

    

</style>