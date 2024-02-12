<template>
    <AppLayout title="Dashboard">
        <VH1>Nueva película</VH1>
        <div class="mt-6 grid gap-x-6 gap-y-2 sm:grid-cols-6 lg:grid-cols-12">
            <div class="sm:col-span-3 lg:col-span-6">
                <v-label>Título</v-label>
                <v-input/>
            </div>
            <div class="sm:col-span-3 lg:col-span-6">
                <v-label>Subtítulo</v-label>
                <v-input/>
            </div>
        </div>
        <div class="mt-2 grid gap-x-6 gap-y-2 sm:grid-cols-6 lg:grid-cols-12">
            <div class="sm:col-span-2 lg:col-span-4">
                <v-label>Label 1</v-label>
                <v-input/>
            </div>
            <div class="sm:col-span-2 lg:col-span-4">
                <v-label>Label 2</v-label>
                <v-input/>
            </div>
            <div class="sm:col-span-2 lg:col-span-4">
                <v-label>Label 3</v-label>
                <v-input/>
            </div>            
        </div>
        <div class="mt-2 grid gap-x-6 gap-y-2 sm:grid-cols-6 lg:grid-cols-12">
            <div class="sm:col-span-2 lg:col-span-4">
                <v-label>Label 4</v-label>
                <v-select>
                    <option value="">Item 1</option>
                    <option value="">Item 2</option>                    
                </v-select>
            </div>
            <div class="sm:col-span-2 lg:col-span-4">
                <v-label>Label 2</v-label>
                <v-input/>
            </div>
            <div class="sm:col-span-2 lg:col-span-4">
                <v-label>Label 3</v-label>
                <v-input/>
            </div>            
        </div>  
        <div class="mt-2 grid gap-x-6 gap-y-2 sm:grid-cols-6 lg:grid-cols-12">
            <div class="sm:col-span-2 lg:col-span-4">
                <v-label>TextArea 5</v-label>
                <VTextArea v-model="comentario"/>
            </div>                     
        </div>                
        <div class="mt-6">
            <VButtonPrimary>Guardar</VButtonPrimary>
        </div>
    </AppLayout>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import AppLayout from '@/Layouts/AppLayout.vue';
import VH1 from '@/Components/VH1.vue';
import VLabel from '@/Components/VLabel.vue'
import VInput from '@/Components/VInput.vue'
import VSelect from '@/Components/VSelect.vue'
import VTextArea from '@/Components/VTextArea.vue'
import VButtonPrimary from '@/Components/VButtonPrimary.vue'

const comentario = ref('Este es un comentario')
</script>

