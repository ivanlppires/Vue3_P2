<template>
    <v-row>
        <v-col v-for="(func, index) in funcionarios" :key="index">
            <v-card>
                <v-card-title> {{ func.name }}</v-card-title>
                <v-card-subtitle> {{ func.email }}</v-card-subtitle>
                <v-card-text> {{ func.id }} </v-card-text>
                <v-card-actions>
                    <v-spacer />
                    <v-btn icon @click="favStore.add(func)" :color="(favStore.isFavorite(func))? 'red' : 'white'">
                        <v-icon>mdi-heart</v-icon>
                    </v-btn>
                    <v-btn color="primary" to="/edit">Editar</v-btn>
                    <v-btn color="error">Excluir</v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useFavStore } from '@/store/fav';
import axios from 'axios'
const funcionarios = ref([])
const favStore = useFavStore();
onMounted(() => {
    axios.get('funcionarios.json')
        .then(response => {
            console.log(response)
            const data = response.data
            const array = []
            for (let key in data) {
                array.push({
                    id: key,
                    name: data[key].name,
                    email: data[key].email
                })
            }
            funcionarios.value = array
        })
        .catch(error => {
            console.log(error)
        })
});


</script>