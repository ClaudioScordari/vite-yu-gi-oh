<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";
import axios from "axios";
import { store } from './store.js';

export default {
    data() {
        return {
            store // in questo caso il nome della chiave, e il nome del valore della chiave coincidono... quindi si può lasciare store
        }
    },
    components: {
        AppHeader,
        AppMain,
        AppFooter
    },
    methods: {
        getApiArchetypeFiltred() {

            // chiamata Api per tutte le carte
            if (store.valueOption.length == 0) {
                axios
                    .get(this.store.apiYuGiOhCards)
                    .then((response) => {
                        this.store.myArrayCards = response.data;
                    });
            }
            // chiamata api sugli archetipi filtrati
            else if (store.valueOption.length > 0) {
                axios
                    .get(this.store.apiYuGiOhCards, {
                        params: {
                            archetype: this.store.valueOption
                        }
                    })
                    .then((response) => {
                        this.store.myArrayCards = response.data;
                    });
            }
        }
    },
    created() {
        this.getApiArchetypeFiltred()
    }
}
</script>

<!-- ------------------------------------------------------------------------------- -->

<template>
    <AppHeader />

    <AppMain @sendEvent="getApiArchetypeFiltred()" />

    <AppFooter />
</template>

<!-- ------------------------------------------------------------------------------- -->

<style lang="scss">
// RESET DI BOOTSTRAP
@use './assets/scss/main.scss' as *;
</style>
