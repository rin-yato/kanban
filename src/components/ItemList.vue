<script lang="ts" setup>
import { List } from '@prisma/client';
import { FixStupidPrisma } from '@/utils/types/types'

const { list } = defineProps<{
  list: FixStupidPrisma<List>
}>()

const emit = defineEmits(['refresh'])

const deleteById = async (id: number) => {
  await useFetch('/api/lists/' + id, {
    method: 'DELETE',
  })
  emit("refresh")
}

const { data: tasks, refresh } = await useFetch("/api/tasks")
const ownTasks = computed(() => {
  return tasks.value?.filter((task) => task.listId === list.id)

})

console.log(tasks.value)

const ok = ref(false)

</script>

<template>
  <div class="bg-gray-100 rounded-lg py-4 px-3 w-full max-w-sm min-w-[24rem] mr-2 h-fit">
    <div class="flex justify-between items-center mb-2">
      <Icon name="uil:arrow-down" size="24px" />
      <h1 class="text-lg font-bold ml-2">{{ list.name }}</h1>
      <div class="justify-end">
        <div class="w-1/2">
          <div class="dropdown dropdown-bottom">
            <label tabindex="0" class="btn btn-xs btn-ghost m-1 lowercase">
              <Icon name="solar:menu-dots-bold" size="24px" />
            </label>
            <ul tabindex="0"
              class="dropdown-content menu p-2 shadow-lg bg-base-100 w-fit border border-gray-100 rounded-md">
              <li class="btn btn-ghost btn-xs normal-case items-start rounded-md ">Edit</li>
              <li class="btn btn-ghost btn-xs normal-case items-center rounded-md" @click="deleteById(list.id)">
                Delete
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <button class="btn-sm btn btn-secondary mt-1 w-full" @click="ok = !ok">
      <Icon name="ic:round-add-circle-outline" size="24px" class="mr-1" />Add New
    </button>
    <div v-show="ok">
      <Input @refresh="refresh" @create="ok = false" :listId="list.id" />
    </div>
    <div v-auto-animate>
      <Item @refresh="refresh" v-for="task in ownTasks" :key="task.id" :title="task.name" :id="task.id"
        :tag="task.Tag?.name" />
    </div>
  </div>
</template>

<style scoped></style>
