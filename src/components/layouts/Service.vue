<template>
    <section class="relative text-white mt-32"  id="services">
        <SectionHeader title="My Service" />
        <div class="mt-20 py-8 xl:px-16 px-4 sm:py-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-10 md:grid-cols-3">
            <article class="px-[12px] mb-24px" v-for="element in services" :key="element.id">
<div :class="['mt-[30px] relative flex flex-col justify-center text-center rounded-[30px] border border-secondary', isDarkMode ? 'bg-[#ffffff29]' : 'bg-primary'] " data-aos="fade-up" :data-aos-delay="element.id*100">
    <div class="mt-[-30px] flex justify-center relative">
        <div class="mt-[-7px] p-[20px] bg-primary relative rounded-[50%]">
            <span class="h-[60px] w-[60px] m-auto border-[1px] border-solid border-secondary absolute top-[8px] left-[8px] rounded-[50%] inline-block z-[5]"></span>
            <img :src="element.Icon" alt="services" class="h-[35px] w-[35px] relative z-[1]" />
        </div>
    </div>
    <div class="p-[30px]">
        <h3 class="uppercase font-semibold text-secondary text-base">
            {{ element.name }}
        </h3>
        <p class="text-[14px] leading-[20px] text-white tracking-[0.03rem]">{{ element.description }}</p>
    </div>
</div>
            </article>
        </div>
    </section>
</template>

<script setup>
import SectionHeader from "@/components/UI/SectionHeader.vue";
import { ref } from "vue";
import { useDarkMode } from "@/composables/DarkMode";

const { isDarkMode } = useDarkMode();

const services =ref([
    {
        id:1,
        Icon:'https://img.icons8.com/ios-filled/100/daed1a/google-code.png',
        name:'Web Development',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto libero quibusdam neque reiciendis non rerum animi quas, cum a obcaecati, ratione corrupti atque autem quis, unde architecto eaque nobis fugiat.',
    },
     {
        id:2,
        Icon:'https://img.icons8.com/external-vectorslab-glyph-vectorslab/100/daed1a/external-Technical-Writing-mobile-app-development-vectorslab-glyph-vectorslab.png',
        name:'Technical-Writing',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto libero quibusdam neque reiciendis non rerum animi quas, cum a obcaecati, ratione corrupti atque autem quis, unde architecto eaque nobis fugiat.',
    },
     {
        id:3,
         Icon:'https://img.icons8.com/ios-filled/100/daedla/email-open.png',
        name:'Web Development',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto libero quibusdam neque reiciendis non rerum animi quas, cum a obcaecati, ratione corrupti atque autem quis, unde architecto eaque nobis fugiat.',
    },
     {
        id:4,
        Icon:'https://img.icons8.com/ios-filled/100/daedla/email-open.png',
        name:'Web Development',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto libero quibusdam neque reiciendis non rerum animi quas, cum a obcaecati, ratione corrupti atque autem quis, unde architecto eaque nobis fugiat.',
    },
     {
        id:5,
        Icon:'https://img.icons8.com/ios-filled/100/daedla/windows10-personalization.png',
        name:'Web Development',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto libero quibusdam neque reiciendis non rerum animi quas, cum a obcaecati, ratione corrupti atque autem quis, unde architecto eaque nobis fugiat.',
    },
     {
        id:6,
        Icon:'https://img.icons8.com/ios-filled/100/daed1a/web-design.png',
        name:'Web Development',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto libero quibusdam neque reiciendis non rerum animi quas, cum a obcaecati, ratione corrupti atque autem quis, unde architecto eaque nobis fugiat.',
    }
])

</script>
