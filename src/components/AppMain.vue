<script>
import { store } from '../store.js';
import AppMyCard from './AppMyCard.vue';
import axios from "axios";

export default {
    data() {
        return {
            store
        }
    },
    components: {
        AppMyCard
    },
    methods: {

    },
    mounted() {
        // si deve riempire l'array degli archetipi per stampare le options
        axios
            .get(this.store.apiArchetype)
            .then((response) => {
                this.store.arrayArchetype = response.data;
            });
    }
}
</script>

<!-- ------------------------------------------------------------------------------- -->

<template>
    <main>
        <div class="my-bg">
            <div class="my-container">

                <div class="py-4">
                    <select @change="$emit('sendEvent')" v-model="store.valueOption">
                        <option selected disabled value="">Seleziona l'archetipo</option>

                        <option v-for="(elem, i) in store.arrayArchetype" :value="elem.archetype_name" :key="i">
                            {{ elem.archetype_name }}
                        </option>
                    </select>
                </div>

                <div class="main-box p-5">
                    <header class="header-main bg-dark text-light p-4">
                        Found {{ store.myArrayCards.length }} cards
                    </header>

                    <div class="cards-box d-flex flex-wrap">

                        <AppMyCard />

                    </div>
                </div>

            </div>
        </div>
    </main>
</template>

<!-- ------------------------------------------------------------------------------- -->

<style lang="scss" scoped>
main {
    .my-bg {
        background-color: orange;

        .my-container {
            width: 80%;
            margin: 0 auto;

            .main-box {
                background-color: white;
            }

            .cards-box {
                gap: 20px;
            }
        }
    }
}
</style>
