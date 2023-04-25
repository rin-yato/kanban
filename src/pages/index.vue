<script setup lang="ts">
const { $client } = useNuxtApp();

// const { data } = useAsyncData(() => $client.tag.getAll.query());
</script>

<template>
  <main class="w-screen h-screen p-10">
    <h1 class="font-black text-4xl">Kanban</h1>
    <section>
      <ItemList />
    </section>
  </main>
</template>

<style scoped></style>
