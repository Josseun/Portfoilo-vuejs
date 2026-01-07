<template>
  <section>
    <h2
      class="text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-center text-[C9B59C]"
      data-aos="fade-up"
    >
      {{ title }}
    </h2>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
