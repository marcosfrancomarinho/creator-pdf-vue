<script setup>
import { provide } from 'vue';
import { Container } from '../shared/container/Container.js';
provide('creatorPdf', Container.dependencies().creatorPdfHandler)
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <router-view />
  </div>
</template>
