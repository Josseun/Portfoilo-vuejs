<template>
  <div :class="['min-h-screen', isDarkMode ? 'bg-[#080326]' : 'bg-[#d4ebf8]']">
    <Navbar />
    <HeroSection />
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue";
import HeroSection from "./components/layouts/HeroSection.vue";
import { useDarkMode } from "./composables/DarkMode";

const { isDarkMode } = useDarkMode();

const Navbar = defineAsyncComponent(() =>
  import("@/components/layouts/Navbar.vue")
);
</script> 

