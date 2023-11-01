<template>
    <v-app>
        <v-card class="w-100 mx-auto">
            <v-toolbar color="transparent" class="px-5">
                <v-icon>mdi-account</v-icon>
                <v-toolbar-title>Funcionários</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon to="/add">
                    <v-icon>mdi-account-plus</v-icon>
                </v-btn>
                <v-btn icon to="/list">
                    <v-icon>mdi-account-multiple</v-icon>
                </v-btn>
                <v-btn icon to="/report">
                    <v-icon>mdi-file-account</v-icon>
                </v-btn>
            </v-toolbar>
        </v-card>
        <v-main class="pa-5 text-center">
            <router-view />
        </v-main>
    </v-app>
</template>
  
<script setup>
import { ref } from 'vue'

const tabs = ref(null)
</script>
  