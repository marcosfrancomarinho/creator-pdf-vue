<script setup>
import { PlusIcon } from '@heroicons/vue/16/solid';
</script>


<template>
    <main class="grow px-6 py-10 flex flex-col items-center bg-gradient-to-b from-cyan-50 to-white">
        <h1 class="text-6xl font-black text-cyan-950 flex justify-center">PDF <span class="w-22 flex ">
                <PlusIcon />
                <PlusIcon />
            </span>
        </h1>
        <p class="text-gray-700 text-xl font-medium mt-4 text-center">Automatize, crie e compartilhe documentos em
            PDF </p>
        <router-link to="create"
            class="bg-cyan-900 text-center mt-8 w-40 px-5 py-2 flex justify-center items-center text-white rounded-full cursor-pointer hover:bg-cyan-950 transition-all duration-700">
            Criar
        </router-link>
    </main>
</template>