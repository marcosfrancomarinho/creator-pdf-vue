<script setup>
import { ref } from 'vue';
import { Container } from '../../shared/container/Container.js';
import Alert from '../components/Alert.vue';
const errorHandler = ref(null);
const show = ref(false)
const { creatorPdfController } = Container.dependencies()

/** @param e {SubmitEvent} */
const handleSubmit = async (e) => {
    try {
        e.preventDefault();
        show.value = false
        const { title, content } = Object.fromEntries(new FormData(e.target))
        await creatorPdfController.save({ title, content })
    } catch (error) {
        errorHandler.value = error.message
        show.value = true
        setTimeout(() => show.value = false, 3000)
    }
}
</script>

<template>
    <main class="grow px-6 py-10 flex flex-col items-center bg-gray-50 text-gray-800">
        <h2 class="text-3xl font-extrabold text-cyan-900 tracking-tight text-center mb-8">
            Crie e baixe seu próprio PDF
        </h2>
        <component :message="errorHandler" :is="errorHandler && show && Alert" />
        <form @submit="handleSubmit"
            class="w-full max-w-4xl space-y-6 bg-white p-8 rounded-xl shadow-lg flex flex-col border border-gray-200">
            <div class="flex flex-col">
                <label for="title" class="mb-2 font-medium text-gray-700">
                    Título do texto:
                </label>
                <input type="text" name="title" id="title"
                    class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600"
                    placeholder="Digite o título" />
            </div>
            <div class="flex flex-col">
                <label for="content" class="mb-2 font-medium text-gray-700">
                    Conteúdo do texto:
                </label>
                <textarea name="content" id="content" rows="10" placeholder="Insira o texto"
                    class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600 resize-none"></textarea>
            </div>
            <button type="submit"
                class="bg-cyan-900 w-40 h-10 px-5 flex justify-center items-center text-white rounded-full cursor-pointer hover:bg-cyan-950 transition-all duration-200 self-center sm:self-start">
                Criar
            </button>
        </form>
    </main>
</template>
