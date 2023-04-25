<template>
  <div>
    <h1>Home Page</h1>
  </div>
</template>

<script setup lang="ts">
const { $client } = useNuxtApp();

const data = $client.download.query({
  url: "https://youtu.be/H9KESr_ceJs",
});
</script>

<style scoped></style>
