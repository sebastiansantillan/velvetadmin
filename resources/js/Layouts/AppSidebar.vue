<template>
   <aside
      class="bg-zinc-100 border-r   border-gray-200 w-64 absolute md:block md:static  h-screen transition-transform" :class="{'hidden' : !props.showMenu, 'md:hidden':props.showMenu}">
      <div class="w-full h-full px-3 py-4 overflow-y-auto dark:bg-gray-800">
         <ul class="space-y-2 text-md">

            <li v-for="item in menu" :key="item.titulo">
               
               <a v-if="!item.subgroup" :href="item.link">
               <button @click="item.subGroupOpen = !item.subGroupOpen" type="button"
                  class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">  
                  <component :is="item.icon" class="w-6 h-6" :class="item.iconColor"></component>                  
                  <span class="flex-1 ml-3 text-left whitespace-nowrap">{{ item.titulo }}</span>
               </button>
               </a>               

               <button v-else @click="item.subGroupOpen = !item.subGroupOpen" type="button"
                  class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">  
                  <component :is="item.icon" class="w-6 h-6" :class="item.iconColor"></component>                  
                  <span class="flex-1 ml-3 text-left whitespace-nowrap">{{ item.titulo }}</span>
                  <IconMenuOpen v-if="item.subgroup" />
               </button>
               <ul v-if="item.subGroupOpen && item.subgroup" class="py-2 space-y-2 text-sm">
                  <li v-for="subitem in item.subgroup" :key="subitem.titulo">
                     <a :href="subitem.link"
                        class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">{{
                           subitem.titulo }}</a>
                  </li>
               </ul>
            </li>
         </ul>
      </div>
   </aside>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import menuItems from '@/Config/Menu'
import IconMenuOpen from '@/Components/Velvet/Icons/IconMenuOpen.vue';

const props = defineProps(['showMenu'])
const menu = ref(menuItems)

</script>