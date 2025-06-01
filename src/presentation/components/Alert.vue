<script setup>
const { message } = defineProps({
    message: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="bg-red-500 px-3 py-1 fixed top-21 right-1 rounded text-white animate-bounce capitalize font-medium ">
        {{ message }}
    </div>
</template>