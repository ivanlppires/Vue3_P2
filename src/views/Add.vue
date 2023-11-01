<template>
    <v-card class="w-50 ma-auto">
        <v-card-title>Adicionar Funcionário</v-card-title>
        <v-card-text>
            <v-form>
                <v-text-field label="Nome" v-model="name"></v-text-field>
                <v-text-field label="E-mail" v-model="email"></v-text-field>
            </v-form>
        </v-card-text>
        <v-card-actions>
            <v-spacer />
            <v-btn to="/list">Cancelar</v-btn>
            <v-btn color="success" @click="salvar()">Salvar</v-btn>
        </v-card-actions>
    </v-card>
</template>
<script setup>
import { ref } from 'vue'
import axios from 'axios'
const name = ref('')
const email = ref('')
const salvar = () => {
    const funcionario = {
        name: name.value,
        email: email.value
    }
    /* send funcionario to realtime database using axios */
    axios.post('funcionarios.json', funcionario)
        .then(response => {
            name.value = ''
            email.value = ''
        })
        .catch(error => {
            console.log(error)
        })
}
</script>