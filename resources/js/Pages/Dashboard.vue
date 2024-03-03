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
                <VTextArea v-model="comentario"/>
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


const comentario = ref( `<p>I’m running Tiptap with Vue.js. 🎉</p>
    <ul>
<li><strong>El Humanoide</strong>&nbsp;por Eduardo A. Azcuy</li>
<li><strong>Mac Cain</strong>&nbsp;por Juan-Jacobo Bajarlía</li>
<li><strong>El Prisionero</strong>&nbsp;por Ernesto Bayma</li>
<li><strong>El Trasplante</strong>&nbsp;por Carlos María Caron</li>
<li><strong>Boroboboo</strong>&nbsp;por Marco Denevi</li>
<li><strong>Las Fábulas</strong> por Osvaldo Ellijf</li>
<li><strong>El Espía</strong>&nbsp;por Eduardo Goligorsky</li>
<li><strong>Los Herederos</strong>&nbsp;por Alfredo Grassi</li>
<li><strong>Dos Muertes</strong>&nbsp;por Héctor Oesterheld</li>
<li><strong>Oliverio</strong>&nbsp;por Víctor Pronzato</li>
<li><strong>Una medusa en la playa</strong>&nbsp;por Alejandro Vignati</li>
</ul>`)
const selectedItem = ref<string | number | readonly string[]>()
const selectItems = [
  { value: '1', label: 'DVD' },
  { value: '2', label: 'Blu-Ray' },
  // Puedes agregar más elementos aquí según sea necesario
]
</script>

