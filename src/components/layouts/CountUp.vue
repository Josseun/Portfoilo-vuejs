<template>
    <section class="mt-30 lg:mt-0 w-full relative text-white flex justify-center">
            <header :class="['absolute w-1/2 aspect-16/5 -skew-x-12 rounded-full bg-gradient-to-r from-[#00c6cc] via-[#785ae4] to-secondary blur-[100px] left-10 top-0 hidden md:block',
        isDarkMode ? 'opacity-20 ' : ' opacity-30',
      ]"
    ></header>
    <header :class="['absolute w-1/2 aspect-16/5 -skew-x-12 rounded-full bg-linear-to-r from-[#00c6cc] via-[#785ae4] to-secondary blur-[100px] right-10 button-0 hidden md:block',
        isDarkMode ? 'opacity-20' : 'opacity-30',
      ]"
    ></header>

    <ul 
    ref="statsSection"
     :class="['relative z-1 p-6 mx-auto w-11/12 lg:mx-0 rounded-3xl border shadow-lg md:divide-x grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 lg:gap-12 border-secondary divide-secondary', isDarkMode ? 'bg-[#ffffff29]' : 'bg-primary']">
<li class="text-center" v-for="element in numbers" :key="element.id">
<h2 class="font-semibold flex justify-center text-xl sm:text-2xl md:text-4xl w-full">
+ <countUp v-if="hasIntersected" :endVal="element.number"/>
</h2>
<p class="mt-2">{{ element.title }}</p>
</li>
    </ul>
    </section>
</template>
<script setup>
import { useDarkMode } from "../../composables/DarkMode";
import { ref,onMounted } from "vue";

const { isDarkMode } = useDarkMode();

const numbers =ref([
    {id:1, number:0, title:'created projects',},
    {id:2, number:50, title:'projects',},
    {id:3, number:0, title:'Happy clients',},
    {id:4, number:2, title:'years',}
])

const statsSection= ref(null);
const hasIntersected =ref(false);

onMounted(()=>{
    const observer = new IntersectionObserver(
        ([entry])=>{
            if (entry.isIntersecting) {
                    hasIntersected.value=true;
            observer.disconnect(); //stop observing once it has intersected
            }        
        },
        {threshold: 0.5} // trigger when 50%v of the section are visible 
    );   
    if (statsSection.value) {
        observer.observe(statsSection.value)
    }
})
</script>
