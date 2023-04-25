<script setup lang="ts">
const isOpen = ref(false);
const card = ref<HTMLButtonElement | null>(null);
const { isOutside, elementX, elementY, elementHeight, elementWidth } =
  useMouseInElement(card);

const cardTransform = computed(() => {
  const MAX_ROTATION = 13;

  const xRotation = (
    MAX_ROTATION / 2 -
    (elementY.value / elementHeight.value) * MAX_ROTATION
  ).toFixed(2);
  const yRotation = (
    MAX_ROTATION / 2 -
    (elementX.value / elementWidth.value) * MAX_ROTATION
  ).toFixed(2);

  return isOutside.value
    ? ""
    : `perspective(${elementWidth.value}px) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
});
</script>

<template>
  <div class="h-screen w-screen flex justify-center items-start">
    <button
      :style="{ transform: cardTransform }"
      ref="card"
      v-auto-animate
      @click="isOpen = !isOpen"
      class="bg-black duration-500 ease-out rounded-md mt-[45vh] w-full max-w-md p-5 flex justify-start flex-col"
    >
      <h1 class="text-2xl font-bold text-white">SETTINGS</h1>
      <p v-if="isOpen" class="mt-5 text-lg text-white text-left">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ad iure
        rem eius possimus adipisci maxime officia cum, suscipit aspernatur ea
        iusto distinctio impedit nobis! Deserunt amet eius aliquam nesciunt!
      </p>
    </button>
  </div>
</template>

<style scoped></style>
