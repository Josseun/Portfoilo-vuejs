<template>
  <button
    @click="onClick"
    :class="[
      'relative overflow-hidden rounded-full text-white w-[180px] h-[65px] text-lg font-semibold flex justify-center items-center transition-all duration-300',
      isDarkMode ? 'bg-white' : 'bg-gray-700',
    ]"
  >
    <div
      class="absolute inset-0 scale-[1.06] blur-lg transition-transform duration-300"
    >
      <div
        class="absolute top-1/2 left-1/2 w-[110%] aspect-square rounded-full bg-linear-to-r from-[#00c6cc] via-[#785ae4] to-secondary animate-rotate"
      ></div>
    </div>
    <div
      class="relative w-[156px] h-[45px] flex justify-center items-center rounded-full bg-secondary text-primary border border-primary"
    >
      {{ label }}
    </div>
  </button>  
</template>

<script setup>
import { useDarkMode } from "@/composables/DarkMode";

const props = defineProps({
  label: {
    type: String,
    default: "Button",
  },
  onClick: {
    type: Function,
    default: () => {},
  },
});

const { isDarkMode } = useDarkMode();
</script>

<style scoped>
@keyframes rotate {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

.animate-rotate {
  animation: rotate 2s linear infinite;
}
</style>