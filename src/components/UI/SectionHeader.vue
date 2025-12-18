<template>
  <section>
    <div class="relative">
        <header
      :class="['absolute w-1/2 aspect-16/5 -skew-x-12 rounded-full bg-gradient-to-r from-[#00c6cc] via-[#785ae4] to-secondary blur-[100px] left-10 top-0 hidden md:block',
        isDarkMode ? 'opacity-20 ' : ' opacity-30',
      ]"
    ></header>
    <header
      :class="['absolute w-1/2 aspect-16/5 -skew-x-12 rounded-full bg-linear-to-r from-[#00c6cc] via-[#785ae4] to-secondary blur-[100px] right-10 button-0 hidden md:block',
        isDarkMode ? 'opacity-20' : 'opacity-30',
      ]"
    ></header>
    </div>
    
    <h2 :class="['text-4xl md:text-5xl lg:text-6xl font-bold text-center  stroke-text', isDarkMode ? ' text-secondary  text-stroke-secondary ' : 'text-stroke-primary text-primary']" data-aos="fade-up">
        {{ title }}
    </h2>
  </section>
</template>

<script setup>
import {useDarkMode} from "@/composables/DarkMode"

const {isDarkMode} = useDarkMode()

defineProps({
    title:{
        type:String,
        required:true,
    },
})

</script>
