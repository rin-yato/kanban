<script lang="ts" setup>
const items = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  }
]
const ok = ref(false)

</script>

<template>
  <div class="bg-gray-100 rounded-lg py-4 px-3 w-sm max-w-sm mt-10">
    <div class="flex items-center mb-2">
      <Icon name="uil:arrow-down" size="24px" />
      <h1 class="text-lg font-bold ml-2">To do</h1>
    </div>
    <button class="btn-sm btn btn-secondary mt-1 w-full" @click="ok = !ok">Add New + </button>
    <div v-if="ok" > <Input/></div>
   

    <Item v-for="(item, index) in items" :key="item.id" :title="item.title" />
  </div>
</template>

<style scoped></style>
