<script setup lang="ts">
import draggable from "vuedraggable";
const foods = ref([
  "Bay Cha",
  "Num Banh Chok",
  "Kuy Teav",
  "Bai Sach Chrouk",
  "Kralan",
]);
</script>

<template>
  <main class="w-screen h-screen p-10">
    <h1 class="font-black text-4xl">Kanban</h1>
    <section>
      <ItemList />
    </section>
    <!-- <draggable v-model="foods" tag="ul">
      <template #item="{ element: meal }">
        <li>{{ meal }}</li>
      </template>
    </draggable> -->
  </main>
</template>

<style scoped></style>
