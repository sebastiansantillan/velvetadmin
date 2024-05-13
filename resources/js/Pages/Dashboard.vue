<template>
    <AppLayout title="Dashboard">
        <VH1>Nueva película</VH1>
        <div class="mt-6 grid gap-x-6 gap-y-2 grid-cols-12">
            <div class="sm:col-span-12 lg:col-span-6">
                <v-label>Título</v-label>
                <v-input/>
            </div>
            <div class="sm:col-span-12 lg:col-span-6">
                <v-label>Título original</v-label>
                <v-input/>
            </div>
        </div>
        <div class="mt-6 grid gap-x-6 gap-y-2 grid-cols-12">
            <div class="col-span-12">
                <v-label>Comentario</v-label>
                <TinyMCE/>
            </div>
        </div>
        <div class="mt-6">
            <VButtonPrimary>Guardar</VButtonPrimary>
        </div>
    </AppLayout>
</template>
<script setup lang="ts">
import AppLayout from '@/Layouts/AppLayout.vue';
import { VH1, VLabel, VInput, VButtonPrimary } from '@sebastian.santillan/vue3-components';
import TinyMCE from '@/Components/Velvet/TinyMCE.vue';
</script>
