<template>
    <Head :title="title" />
    <div class="w-full">
        <AppNav @press-button="showMenu"/>
    </div>
    <div class="flex">
        <AppSidebar :show-menu="showAsideMenu" />
        <div class="w-full bg-slate-50">
            <main class=" bg-white min-h-screen border rounded-lg mx-4 my-4 p-6">
                <slot></slot>
            </main>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Head, Link, router } from '@inertiajs/vue3';
import AppNav from './AppNav.vue';
import AppSidebar from './AppSidebar.vue';

defineProps({
    title: String,
});

const showAsideMenu = ref(false)

function showMenu() {
    showAsideMenu.value = !showAsideMenu.value
}


</script>