<script lang="ts" setup>
import { Task } from '@prisma/client';

const { listId, tasks } = defineProps<{ listId: number; tasks: Task[] }>()
const inputRef = ref<HTMLInputElement>()
const { data: tags, refresh } = await useFetch("/api/tags")

const newTaskName = ref("")
const selectedTag = ref<{ id: number; name: string } | null>(null)

const emit = defineEmits(["refresh", "create", "add"])

const createTask = async () => {
  emit("create")
  let hightestPos = tasks.length === 0 ? 0 : tasks[0].position!
  console.log(tasks)
  emit("add", {
    id: Math.floor(Math.random() * 1000000000),
    name: newTaskName.value,
    listId: listId,
    tagId: selectedTag.value?.id || null,
    position: hightestPos + 80000,
    description: '',
    createdAt: new Date(),
    updatedAt: new Date(),
  })
  // return
  await useFetch("/api/tasks", {
    method: "POST",
    body: {
      name: newTaskName.value,
      listId: listId,
      tagId: selectedTag.value?.id,
      position: hightestPos + 80000,
    },
  })

  newTaskName.value = ""
}

onMounted(() => {
  inputRef.value?.focus()
})

const handleSelectTag = (id: number, name: string) => {
  selectedTag.value = { id, name }
}

</script>

<template>
  <form @submit.prevent="createTask" class="mt-2 bg-white rounded-md px-3 py-3 flex flex-col">
    <input v-model="newTaskName" type="text" ref="inputRef" class="input-sm w-full mb-2 outline-none"
      placeholder="Please input something that you want">
    <div class="flex justify-between">
      <div class="w-1/2">
        <div class="dropdown dropdown-bottom">
          <label tabindex="0" class="btn btn-xs btn-ghost m-1 lowercase">{{ selectedTag?.name || '@tag' }}</label>
          <ul tabindex="0"
            class="dropdown-content menu p-2 shadow-lg bg-base-100 w-fit border border-gray-100 rounded-md">
            <li @click="selectedTag = null" class="btn btn-ghost btn-xs normal-case items-start rounded-md">-</li>
            <li v-for="tag in tags" @click="handleSelectTag(tag.id, tag.name)" :key="tag.id"
              class="btn btn-ghost btn-xs normal-case items-start rounded-md">{{
                tag.name }}</li>
          </ul>
        </div>
      </div>
      <button class="btn btn-xs btn-success mt-1 text-white">
        <!-- <Icon name="uil:smile" size="16px" /> -->
        save
      </button>
    </div>
  </form>
</template>

<style scoped></style>
