<template>
    <AppLayout title="Dashboard">
        <VH1>Nueva película</VH1>
        <div class="mt-6 grid gap-x-6 gap-y-2 sm:grid-cols-6 lg:grid-cols-12">
            <div class="sm:col-span-3 lg:col-span-6">
                <v-label>Título</v-label>
                <v-input v-model="pelicula.titulo"/>
            </div>
            <div class="sm:col-span-3 lg:col-span-6">
                <v-label>Título original</v-label>
                <v-input v-model="pelicula.titulo_original"/>
            </div>
        </div>
        <div class="mt-2 grid gap-x-6 gap-y-2 sm:grid-cols-6 lg:grid-cols-12">
            <div class="sm:col-span-2 lg:col-span-2">
                <v-label>Año</v-label>
                <v-input v-model="pelicula.ano"/>
            </div>
            <div class="sm:col-span-2 lg:col-span-4">
                <v-label>Origen</v-label>
                <v-select v-model="pelicula.origen" :options="paises" :reduce="paises => paises.value" label="label" multiple/>
            </div>
            <div class="sm:col-span-2 lg:col-span-2">
                <v-label>Duración</v-label>
                <v-input v-model="pelicula.duracion"/>
            </div>            
        </div>
        <div class="mt-2 grid gap-x-6 gap-y-2 sm:grid-cols-6 lg:grid-cols-12">
            <div class="sm:col-span-2 lg:col-span-4">
                <v-label>Etiquetas</v-label>
                <v-select v-model="selectedItem" :options="selectItems" label="label" taggable multiple/>
            </div>
            <div class="sm:col-span-2 lg:col-span-4">
                <v-label>Label 2</v-label>
                <VSelectCustom v-model="selectedItem" :reduce="(selectItems) => selectItems.value" :options="selectItems" label="label"/>
            </div>
            <div class="sm:col-span-2 lg:col-span-4">
                <v-label>Label 3</v-label>
                <v-input/>
            </div>            
        </div>  
        <div class="mt-2 grid gap-x-6 gap-y-2 sm:grid-cols-6 lg:grid-cols-12">
            <div class="col-span-12">
                <v-label>TextArea 5</v-label>
                <VTextArea />
            </div>           
        </div>
        <div class="mt-2 grid gap-x-6 gap-y-2 sm:grid-cols-6 lg:grid-cols-12">
            <div class="col-span-12">
                <v-label>TextArea 5</v-label>
                <TinyMCE v-model="comentario"/>
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
import VSelectCustom from '@/Components/VSelectCustom.vue'
import VTextArea from '@/Components/VTextArea.vue'
import VButtonPrimary from '@/Components/VButtonPrimary.vue'
import TinyMCE from '@/Components/TinyMCE.vue';

const paises = [
  { value: 1, label: 'EE.UU' },
  { value: 2, label: 'Argentina' },
  { value: 3, label: 'Francia' },
  { value: 4, label: 'Alemania' },
  { value: 5, label: 'Suecia' }
]

const generos = [
  { value: 1, label: 'Comedia' },
  { value: 2, label: 'Drama' },
  { value: 3, label: 'Romance' },
  { value: 4, label: 'Ciencia Ficción' },
  { value: 5, label: 'Terror' }
]



const pelicula = ref({
    'titulo' : 'Intriga internacional',
    'titulo_original' : 'North by Northwest',
    'ano' : '1959',    
    'origen' :[3,4],
    'duracion' : ''
})

const comentario = ref('')
const selectedItem = ref<string | number | readonly string[]>()
const selectItems = [
  { value: '1', label: 'DVD' },
  { value: '2', label: 'Blu-Ray' },
]
</script>

