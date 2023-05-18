<script lang="ts" setup>
defineProps<{
  id: number;
  title: string;
  tag?: string;
}>();

const emit = defineEmits(["refresh"]);

const deleteTask = async (id: number) => {
  await useFetch("/api/tasks/" + id, {
    method: "DELETE",
  });

  emit("refresh");
};
</script>

<template>
  <div
    class="w-full bg-white p-3 rounded-md mt-2 hover:ring-1 ring-indigo-400 duration-100 cursor-pointer"
  >
    <div class="flex-row flex justify-between">
      <h2 class="mb-3">{{ title }}</h2>
      <button @click="deleteTask(id)">
        <icon name="iconoir:cancel" size="24px" />
      </button>
    </div>
    <div class="px-2 py-1 w-fit rounded-md bg-orange-200">
      <p class="text-sm">{{ tag }}</p>
    </div>
  </div>
</template>

<style scoped></style>
