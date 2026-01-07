<template>
    <section class="mt-32" id="skills">
        <SectionHeader title="Skills" />
        <div class="mt-20 flex justify-center">
            <ul class="flex flex-wrap justify-center items-center">
                <li
                    ref="skillsRefs"
                    v-for="(element, index) in skills" 
                    :key="index"
                    :class="`mx-3.75 rounded-xl mb-7 bg-linear-to-t ${element.bgGradient}`">
                    <div class="rounded-xl bg-primary mt-0.75 p-12 md:p-5 text-center">
                        <h3 class="font-bold text-[35px] text-white flex items-center justify-center">
                            <CountUp 
                                v-if="visibleItems[index]" 
                                :endVal="element.percentage" 
                                :duration="2"
                            /> %
                        </h3>
                        <p class="font-normal text-[16px]" :style="{color:element.textColor}">
                            {{ element.title }}
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import SectionHeader from "@/components/UI/SectionHeader.vue";
import CountUp from "vue-countup-v3"; // Make sure this import is correct

const skills = ref([
    {
        percentage: 88,
        title: 'Figma',
        bgGradient: 'to-[#00a9ff99] from-[#1f1e1c99]',
        textColor: '#00a9ff'
    },
    {
        percentage: 90,
        title: 'Html',
        bgGradient: 'to-[#acac39] from-[#1f1e1c99]',
        textColor: '#ffe600',
    },
    {
        percentage: 85,
        title: 'Css',
        bgGradient: 'to-[#59c37899] from-[#1f1e1c99]',
        textColor: '#59c378',
    },
    {
        percentage: 70,
        title: 'JavaScript',
        bgGradient: 'to-[#00a9ff99] from-[#1f1e1c99]', 
        textColor: '#dd584f'
    },
    {
        percentage: 90,
        title: 'Tailwindcss',
        bgGradient: 'to-[#dd584f99] from-[#1f1e1c99]',
        textColor: '#ffe660'
    },
    {
        percentage: 50,
        title: 'Typescript',
        bgGradient: 'to-[#59c37899] from-[#1f1e1c99]',
        textColor: '#59c378'
    },  
    {
        percentage: 88,
        title: 'ReactJS',
        bgGradient: 'to-[#acac39] from-[#1f1e1c99]',
        textColor: '#00a9ff'
    },
    {
        percentage: 78,
        title: 'Vuejs',
        bgGradient: 'to-[#00a9ff99] from-[#1f1e1c99]',
        textColor: '#00a9ff'
    },
]) 

// Track visibility of items
const visibleItems = ref(skills.value.map(() => false))
const skillsRefs = ref([])

// IntersectionObserver logic
onMounted(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) { 
                    const index = skillsRefs.value.indexOf(entry.target);
                    if (index !== -1) {
                        visibleItems.value[index] = true;  // Mark item as visible
                    }
                }
            })
        },
        { threshold: 0.3 } // Trigger when 30% of element is visible
    );
    
    // Observe all skills elements
    skillsRefs.value.forEach((el) => {
        if (el) observer.observe(el);
    });
});
</script>