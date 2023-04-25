<script lang="ts" setup>
  defineProps<{
    title: string
  }>()
</script>

<template>
  <div class="w-full bg-white p-3 rounded-md mt-2 hover:ring-1 ring-indigo-400 duration-100 cursor-pointer">
    <h2 class="mb-3" >{{ title }}</h2>
    <Tag />
  </div>
</template>

<style scoped></style>
