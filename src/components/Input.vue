<script lang="ts" setup>
const ok = ref(false)
const inputRef = ref<HTMLInputElement>()

onMounted(() => {
  inputRef.value?.focus()
})

</script>

<template>
  <div class="mt-2 bg-white rounded-md px-3 py-3 flex flex-col">
    <input type="text" ref="inputRef" class="input-sm w-full mb-2 outline-none"
      placeholder="Please input something that you want">
    <div class="flex justify-between">
      <div class="w-1/2">
        <div class="dropdown dropdown-bottom">
          <label tabindex="0" class="btn btn-xs btn-ghost m-1 lowercase">@tag</label>
          <ul tabindex="0" class="dropdown-content menu p-2 shadow-lg bg-base-100 w-fit border border-gray-100 rounded-md">
            <li class="btn btn-ghost btn-xs normal-case items-start rounded-md">Backend</li>
            <li class="btn btn-ghost btn-xs normal-case items-start rounded-md">Frontend</li>
          </ul>
        </div>
      </div>
      <button class="btn btn-xs btn-success mt-1 text-white">
        <!-- <Icon name="uil:smile" size="16px" /> -->
        save
      </button>
    </div>
  </div>
</template>

<style scoped></style>
