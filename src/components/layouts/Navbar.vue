<template>
  <header>
    <div class="flex justify-between items-center p-8 lg:px-12 relative z-20">
       <div :class="['text-3xl font-black',isDarkMode ? 'text-white' : 'text-primary']">LOGO</div>

      <div class="md:hidden z-30">
        <button
          class="block focus:outline-none bg-red-700"
          @click="isMenuOpen = !isMenuOpen"
        >
          <span
            v-if="isMenuOpen"
            class="text-5xl md:text-primary text-white"
          >
            <Icon class="material-symbols:close-rounded" />
          </span>
          <span
            v-else
            class="text-5xl md:text-primary text-white"
          >
            <Icon icon="material-symbols:menu-rounded" />
          </span>
        </button>
      </div>

      <nav
        :class="[
          `fixed inset-0 z-20 flex flex-col items-center justify-center bg-primary md:relative md:bg-transparent md:flex md:justify-between md:flex-row ${
            isMenuOpen ? 'block' : 'hidden'
          }`,
        ]"
      >
        <ul
          class="flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0"
        >
          <li v-for="(item, index) in Menu" :key="index">
            <a
              :href="item.href"
        :class="['block transition ease-linear md:text-lg lg:text-xl font-bold text-primary hover:text-secondary',isDarkMode ? 'text-white' : ' text-white lg:text-primary md:text-primary']"
              @click="ScrollToSection(item.href)"
            >
              {{ item.name }}
            </a>
          </li>
        </ul>
        <button
          @click="toggleDarkMode"
          :class="['text-white ml-20 z-20 hidden md:block', isDarkMode ? 'bg-blue-900' : 'bg-red-700']"
        >
          <Icon
            v-if="!isDarkMode"
            icon="line-md:moon-filled"
            class="text-5xl text-primary"
          />
          <Icon
            v-else
            icon="line-md:sunny-outline"
            class="text-5xl text-secondary"
          />
        </button>
      </nav>
    </div>
  </header>
</template>
<script setup>
import { Icon } from "@iconify/vue";
import { ref } from "vue";
import { useDarkMode } from "@/composables/DarkMode";
const isMenuOpen = ref(false);
const Menu = ref([
  { name: "Services", href: "#services" },
  { name: "Skills", href: "#skills" },
  { name: "Why me", href: "#whyme" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]);

const ScrollToSection = (href) => {
  isMenuOpen.value = false;
  const section = document.querySelector(href);
  if (section) {
    section.ScrollIntoView({ behavior: "smooth " });
  }
};

const { isDarkMode, toggleDarkMode } = useDarkMode();

</script>