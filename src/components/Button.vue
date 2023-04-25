<template>
  <button
    ref="darath"
    class="bg-black hover:scale-110 duration-300 active:scale-95 text-white px-5 py-3 rounded-md"
  >
    im a button
  </button>
</template>

<script setup lang="ts">
const darath = ref<HTMLButtonElement | null>(null);
onMounted(() => {
  if (darath.value) {
    darath.value.addEventListener("mouseenter", () => {
      darath.value?.classList.toggle("translate-x-[400%]");
    });
  }
});
</script>

<style scoped></style>
