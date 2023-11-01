<template>
    <v-toolbar class="my-5">
        <v-toolbar-title>FAVORITOS</v-toolbar-title>
    </v-toolbar>
    <v-row>
        <v-col v-for="(func, index) in favStore.favorites" :key="index">
            <v-card>
                <v-card-title> {{ func.name }}</v-card-title>
                <v-card-subtitle> {{ func.email }}</v-card-subtitle>
                <v-card-text> {{ func.id }}</v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>
<script setup>
import { useFavStore } from '@/store/fav';
const favStore = useFavStore();
</script>