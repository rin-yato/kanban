<script lang="ts" setup>
import { List, Task } from "@prisma/client";
import { FixStupidPrisma } from "@/utils/types/types";
import draggable from "vuedraggable";

type CustomList = List & {
  Task: Task[];
};

const { list } = defineProps<{
  list: FixStupidPrisma<CustomList>;
}>();

const emit = defineEmits(["refresh", "add"]);

const deleteById = async (id: number) => {
  await useFetch("/api/lists/" + id, {
    method: "DELETE",
  });
  emit("refresh");
};

const ok = ref(false);

const log = (e: any) => {
  if (e.added) {
    const task = e.added.element;
    let newPosition: number;
    const newIndex = e.added.newIndex;

    if (list.Task[newIndex + 1] && list.Task[newIndex - 1]) {
      newPosition =
        (list.Task[newIndex + 1].position! +
          list.Task[newIndex - 1].position!) /
        2;
    } else if (newIndex === 0) {
      newPosition = (list.Task[1]?.position || 0) + 80000;
    } else {
      newPosition = list.Task[newIndex - 1].position! / 2;
    }

    useFetch("/api/tasks/" + task.id, {
      method: "PUT",
      body: {
        listId: list.id,
        position: newPosition!,
      },
    });
  }

  if (e.moved) {
    const task = e.moved.element;
    let newPosition: number;
    const newIndex = e.moved.newIndex;

    if (list.Task[newIndex + 1] && list.Task[newIndex - 1]) {
      newPosition =
        (list.Task[newIndex + 1].position! +
          list.Task[newIndex - 1].position!) /
        2;
    } else if (newIndex === 0) {
      newPosition = list.Task[1].position! + 80000;
    } else {
      newPosition = list.Task[newIndex - 1].position! / 2;
    }

    useFetch("/api/tasks/" + task.id, {
      method: "PUT",
      body: {
        position: newPosition!,
      },
    });
  }
};
</script>

<template>
  <div
    class="bg-gray-100 rounded-lg py-4 px-3 w-full max-w-sm min-w-[24rem] mr-2 h-fit"
  >
    <div class="flex justify-between items-center mb-2">
      <Icon name="uil:arrow-down" size="24px" />
      <h1 class="text-lg font-bold ml-2">{{ list.name }}</h1>
      <div class="justify-end">
        <div class="w-1/2">
          <div class="dropdown dropdown-bottom">
            <label tabindex="0" class="btn btn-xs btn-ghost m-1 lowercase">
              <Icon name="solar:menu-dots-bold" size="24px" />
            </label>
            <ul
              tabindex="0"
              class="dropdown-content menu p-2 shadow-lg bg-base-100 w-fit border border-gray-100 rounded-md"
            >
              <li
                class="btn btn-ghost btn-xs normal-case items-start rounded-md"
              >
                Edit
              </li>
              <li
                class="btn btn-ghost btn-xs normal-case items-center rounded-md"
                @click="deleteById(list.id)"
              >
                Delete
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <button class="btn-sm btn btn-secondary mt-1 w-full" @click="ok = !ok">
      <Icon name="ic:round-add-circle-outline" size="24px" class="mr-1" />Add
      New
    </button>
    <div v-show="ok">
      <Input
        @refresh="emit('refresh')"
        @add="(data) => emit('add', data)"
        @create="ok = false"
        :listId="list.id"
        :tasks="list.Task"
      />
    </div>
    <div>
      <draggable
        @change="log"
        :list="list.Task"
        tag="div"
        group="tasks"
        :itemKey="list.name"
        :key="list.id"
      >
        <template #item="{ element: task }">
          <Item
            @refresh="emit('refresh')"
            :key="task.id"
            :title="task.name"
            :id="task.id"
            :tag="task.Tag?.name"
          />
        </template>
      </draggable>
    </div>
  </div>
</template>

<style scoped></style>
