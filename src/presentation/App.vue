<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>
