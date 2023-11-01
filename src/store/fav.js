import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useFavStore = defineStore('fav', () => {

    const favorites = ref([]);

    const add = (item) => {
        // add if not exits in favorites
        if (!favorites.value.some((i) => i.id === item.id))
            favorites.value.push(item);
    };

    const remove = (item) => {
        favorites.value = favorites.value.filter((i) => i.id !== item.id);
    };

    const isFavorite = (item) => {
        return favorites.value.some((i) => i.id == item.id);
    }

    return {
        favorites,
        add,
        remove,
        isFavorite
    };
});