<script>
import { store } from '../store.js';

export default {
    data(){
        return {
            store
        }
    },
    methods: {
        
    }
}
</script>

<!-- ------------------------------------------------------------------------------- -->

<template>
    <div class="myCard" v-for="(oneCard, i) in store.myArrayCards.data">
        <!-- img card -->
        <div class="img-card">
            <img class="w-100" :src="oneCard.card_images[0].image_url" :alt="oneCard.name">
        </div>

        <!-- info card -->
        <div class="info-card p-4">
            <div class="name text-light fw-bold fs-5">
                {{ oneCard.name }}
            </div>

            <br>

            <div class="type fw-bold">
                {{ oneCard.archetype }}
            </div>
        </div>
    </div>
</template>

<!-- ------------------------------------------------------------------------------- -->

<style lang="scss" scoped>
.myCard{
    width: calc((100% / 5) - 20px);
    background-color: orange;
    margin-left: auto;
    margin-right: auto;
}
</style>
