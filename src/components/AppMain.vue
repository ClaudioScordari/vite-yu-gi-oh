<script>
import { store } from '../store.js';
import AppMyCard from './AppMyCard.vue';

export default {
    data(){
        return {
            store
        }
    },
    components: {
        AppMyCard
    },
    methods: {
        
    }
}
</script>

<!-- ------------------------------------------------------------------------------- -->

<template>
    <main>
        <div class="my-bg">
            <div class="my-container">
                <div class="py-4">
                    <select name="" id="">
                        <option value="1">Alien</option>
                    </select>
                </div>
    
                <div class="main-box p-5">
                    <header class="header-main bg-dark text-light p-4">
                        Found {{ store.myArrayCards.data.length }} cards
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
    .my-bg{
        background-color: orange;
        .my-container{
            width: 80%;
            margin: 0 auto;

            .main-box{
                background-color: white;
            }

            .cards-box{
                gap: 20px;
            }
        }
    }
}

</style>
