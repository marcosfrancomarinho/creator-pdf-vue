<script setup></script>
<template>
    <footer class="flex flex-col items-center w-full px-2 py-4 text-white bg-cyan-950">
        <div class="flex flex-col w-full space-y-5 font-semibold sm:flex-row sm:justify-evenly">
            <nav class='flex flex-col items-center space-y-2'>
                <a href='/privacy'>Privacy Policy</a>
                <a href='/terms'>Terms of Use</a>
                <a href='/about'>About Us</a>
            </nav>
            <nav class="flex flex-col items-center space-y-2">
                <a href="#">
                    <span class="flex items-center gap-1">
                        <img class="w-5" src="/icons/instagram.svg" alt="instagram" />
                        Instagram
                    </span>
                </a>
                <a href="#">
                    <span class="flex items-center gap-1">
                        <img class="w-5" src="/icons/linkedIn.svg" alt="linkedIn" />
                        LinkedIn
                    </span>
                </a>
                <a href="#">
                    <span class="flex items-center gap-1">
                        <img class="w-5" src="/icons/github.svg" alt="github" />
                        Github
                    </span>
                </a>
            </nav>
        </div>
        <p class='px-10 py-2 mt-5 text-sm italic text-center text-gray-500 border-t border-gray-700'>
            {{ new Date().getFullYear() }} &copy;
            <span>Todos os direitos reservados. </span>PDF <span class='font-black'>++</span>
        </p>
    </footer>
</template>