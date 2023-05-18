<script setup lang="ts">
import { Tag, Task } from "@prisma/client";
import draggable from "vuedraggable";

type List = {
  id: number;
  name: string;
  status: string;
  Task: Task[] & { Tag: Tag };
  createdAt: Date;
  updatedAt: Date;
};

const { data, refresh } = await useFetch<List[]>("/api/lists");

const handleAddEmit = (task: Task & { Tag: Tag | null }) => {
  if (data.value) {
    data.value = data?.value?.map((list) => {
      if (list.id === task.listId) {
        list.Task.unshift(task);
      }
      return list;
    });
  }
};
</script>

<template>
  <main class="w-screen h-screen p-10">
    <h1 class="font-black text-4xl">Kanban</h1>
    <section v-if="data" class="flex mt-10">
      <draggable
        v-auto-animate
        :list="data"
        tag="div"
        class="flex"
        item-key="id"
      >
        <template #item="{ element: item }">
          <ItemList
            @refresh="refresh"
            @add="handleAddEmit"
            :key="item.id"
            :list="item"
          />
        </template>
      </draggable>
      <InputItemList @refresh="refresh" />
    </section>
  </main>
</template>

<style scoped></style>
