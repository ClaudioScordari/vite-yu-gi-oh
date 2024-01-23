import { reactive } from 'vue';

export const store = reactive({
    apiYuGiOhCards: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
    apiArchetype: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    arrayArchetype : [],
    valueOption: '', 
    myArrayCards: [] 
});