import { ref } from "vue";

const isDarkMode = ref(localStorage.getItem("theme") === "dark");

export function useDarkMode() {
  const toggleDarkMode = () => {
    const html = document.documentElement;
    if (isDarkMode.value) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    isDarkMode.value = !isDarkMode.value;
  };

  return {
    isDarkMode,
    toggleDarkMode,
  };
}