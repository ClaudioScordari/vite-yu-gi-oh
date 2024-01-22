<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";
import axios from "axios";
import { store } from './store.js';

export default {
    data(){
        return {
            apiYuGiOh: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
            store // in questo caso il nome della chiave, e il nome del valore della chiave coincidono... quindi si può lasciare store
        }
    },
    components: {
        AppHeader,
        AppMain,
        AppFooter
    },
    methods: {},
    mounted(){
        axios
            .get(this.apiYuGiOh)
            .then((response) => {
                console.log(response.data);

                this.store.myArrayCards = response.data;
                console.log(this.store.myArrayCards);
            });
    }
}
</script>

<!-- ------------------------------------------------------------------------------- -->

<template>

    <AppHeader/>

    <AppMain/>

    <AppFooter/>

</template>

<!-- ------------------------------------------------------------------------------- -->

<style lang="scss">
// RESET DI BOOTSTRAP
@use './assets/scss/main.scss' as *;
</style>
