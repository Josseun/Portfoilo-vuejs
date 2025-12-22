<template>
    <button :class="['fixed bottom-4 right-4 bg-gradient-to-r text-white rounded-full w-12 h-12 flex justify-center items-center text-xl cursor-pointer transition-opacity duration-300 hover:bg-blue-600', isDarkMode ? 'bg-secondary' : 'bg-primary']">
        
    </button>
</template>
<script setup>
import { useDarkMode } from "@/composables/DarkMode";

const { isDarkMode } = useDarkMode();
</script>
