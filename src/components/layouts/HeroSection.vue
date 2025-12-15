<template>
<section class="flex items-center justify-center min-h-screen mt-20 lg:mt-0">
<header :class="['absolute w-1/2 aspect-16/5 -skew-x-12 rounded-full bg-linear-to-r from-[#00c6cc] via-[#785ae4] to-secondary blur-[100p] left-10 top-0 hidden md:block', isDarkMode ? 'opacity-20 ' : ' opacity-30']"></header>
<header :class="['absolute w-1/2 aspect-16/5 -skew-x-12 rounded-full bg-linear-to-r from-[#00c6cc] via-[#785ae4] to-secondary blur-[100p] right-10 button-0 hidden md:block', isDarkMode ?'opacity-20': 'opacity-30']"></header>
<main class="absolute grid lg:grid-cols-2 grid-cols-1 items-center p-2 lg:p-8">
<header class="text-center lg:text-left">
    <h1 class="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold">
        👋 Hi, I'm <span :class="['text-secondary stroke-text ',isDarkMode ? 'text-stroke-secondary' : 'text-stroke-primary']">Joshua Oluwaseun</span>
    </h1>
</header>
</main>
</section>
</template>


<script>
import { useDarkMode } from "../../composables/DarkMode";

const  isDarkMode  = useDarkMode();
</script>
