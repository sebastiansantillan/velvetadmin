<template>
    <nav class="w-full bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div class="flex flex-wrap items-center justify-between mx-auto p-4">
            <div class="flex items-center">
                <button type="button"
                    class="p-2 mr-4 justify-center text-gray-500 rounded-lg border border-white hover:border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-dropdown" aria-expanded="false"
                    @click="$emit('pressButton')"
                    >
                    <IconHamburger class="items-center text-slate-600" />
                </button>
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                     <span class="font-medium text-slate-900">Velvet</span> <span class="text-slate-400"> Admin</span>
                </span>
            </div>


            <div class="block w-auto">
                <ul class="flex font-medium p-0 flex-row space-x-8 mt-0 border-0 dark:bg-gray-800 dark:border-gray-700">

                    <li>
                        <button @click="menuOpen = !menuOpen"
                            class="flex items-center justify-between pl-3 pr-4 text-gray-900 border-0 p-0 w-auto dark:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                            {{ page.props.auth.user.name }}
                            <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m1 1 4 4 4-4" />
                            </svg>
                        </button>
                        <!-- Dropdown menu -->
                        <div v-if="menuOpen"
                            class="z-50 absolute font-normal mt-1 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                            <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                <li v-for="item in menu" :key="item.titulo">
                                    <a :href="item.link"
                                        class="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"><component :is="item.icon" class="w-4 h-4 mr-2" :class="item.iconColor"></component><span>{{ item.titulo }}</span></a>
                                </li>
                            </ul>
                            <div class="py-1"> 
                                <Link href="/logout" method="post" as="button" type="button" class="flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"><IconLogout class="w-4 h-4 mr-2"/> Salir</Link>                       
                            </div>                            
                        </div>
                    </li>


                </ul>
            </div>
        </div>
    </nav>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { Link, router, usePage } from '@inertiajs/vue3';
import type { PageProps } from '@inertiajs/core';
import type { MenuItem } from '@/Interfaces/Menu';
import IconHamburger from '@/Components/Velvet/Icons/IconHamburger.vue';
import IconLogout from '@/Components/Velvet/Icons/IconLogout.vue'

interface AuthUser {
    name: string;
}

interface MyPageProps extends PageProps {
    auth: {
        user: AuthUser;
    };
}

const page = usePage<MyPageProps>();

const menuOpen = ref(false)

const menu:MenuItem[] = [
   {
      titulo: 'Menu1',
      link : '/menu1',  
   },
   {
      titulo: 'Configuración',
      link : '/configuracion'
   },
   {
      titulo: 'Mis preferencias',
      link : '/preferencias'
   }
];

const logout = () => {
    router.post('logout');
};

</script> 