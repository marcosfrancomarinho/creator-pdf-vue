<script setup>
import { Bars3Icon, XMarkIcon, PlusIcon } from '@heroicons/vue/16/solid';
import { ref } from 'vue';
const open = ref(false)

</script>

<template>
    <header class="bg-cyan-900 text-white py-4 px-2 flex flex-col sm:flex-row sm:justify-between">
        <div class="flex items-center justify-between">
            <router-link to="/" class="font-extrabold text-4xl flex gap-2 cursor-pointer">PDF <span class="flex w-15">
                    <PlusIcon />
                    <PlusIcon />
                </span> </router-link>
            <span class="w-10 sm:hidden" @click="open = !open">
                <component :is="open ? XMarkIcon : Bars3Icon" />
            </span>
        </div>
        <nav
            :class="['flex-col text-md font-medium space-y-3 mt-7', open ? 'flex' : 'hidden', 'sm:flex sm:flex-row sm:mt-0 sm:space-y-0 sm:items-center sm:space-x-6 sm:mr-4']">

            <router-link to="/"
                class="sm:opacity-90 sm:transition-all sm:hover:opacity-100 duration-75 cursor-pointer">Início</router-link>

            <router-link to="/create"
                class="sm:opacity-90 sm:transition-all sm:hover:opacity-100 duration-75 cursor-pointer">Criar</router-link>
        </nav>
    </header>
</template>