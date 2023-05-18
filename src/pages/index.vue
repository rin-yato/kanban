<script setup lang="ts">
import { List, Task } from "@prisma/client";
import draggable from "vuedraggable"

type idk = {
  id: number;
  name: string;
  status: string;
  Task: Task[];
  createdAt: Date;
  updatedAt: Date;
}
const { data, refresh } = await useFetch<idk[]>("/api/lists");

watch(data, () => {
  console.log('data changed')
})

const handleRefresh = () => {
  refresh();
  // alert('refresh');
}

const handleAddEmit = (task: Task) => {
  if (data.value) {
    data.value = data?.value?.map((list: idk) => {
      if (list.id === task.listId) {
        list.Task.unshift(task);
      }
      return list;
    });
  }
}

</script>

<template>
  <main class="w-screen h-screen p-10">
    <h1 class="font-black text-4xl">Kanban</h1>
    <section v-if="data" class="flex mt-10">
      <draggable :list="data" tag="div" class="flex" item-key="id">
        <template #item="{ element: item }">
          <ItemList @refresh="handleRefresh" @add="handleAddEmit" :key="item.id" :list="item" />
        </template>
      </draggable>
      <InputItemList @refresh="refresh" />
    </section>

    <!-- <ProfileCard /> -->

  </main>
</template>

<style scoped></style>
