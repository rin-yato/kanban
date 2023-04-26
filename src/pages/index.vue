<script setup lang="ts">

const { data: lists, refresh } = await useFetch("/api/lists")

</script>

<template>
  <main class="w-screen h-screen p-10">
    <h1 class="font-black text-4xl">Kanban</h1>
    <section v-auto-animate class="flex-row flex mt-10">
      <ItemList @refresh="refresh" v-for="item in lists" :key="item.id" :list="item" />
      <InputItemList @refresh="refresh" />
    </section>
  </main>
</template>

<style scoped></style>
