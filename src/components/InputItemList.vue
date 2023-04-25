<template>
    <div v-auto-animate class="rounded-lg px-3 w-full h-fit max-w-sm ml-5">
        <div v-if="!ok" class="w-sm max-w-sm flex-row flex items-center">
            <button @click="ok = !ok" class="btn no-animation btn-sm  w-full mb-2">
                <Icon name="ic:round-add-circle-outline" size="24px" class="mr-1"/> Add</button>
        </div>
        <div v-if="ok" class="w-sm bg-gray-100 py-1 px-2 rounded-md max-w-sm flex-row flex items-center">
            <button @click="ok = false" class="btn btn-xs btn-square btn-ghost text-gray-700">
                <icon name="iconoir:cancel" size="24px" />
            </button>
            <input type="text" ref="inputRef" class="input-sm w-full outline-none bg-transparent rounded-md"
                placeholder="Please input title">
            <button class="btn btn-xs btn-ghost text-gray-700">
                save
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
const ok = ref(false)
const inputRef = ref<HTMLInputElement>()

watch(() => ok.value, (value) => {
    if (value) {
        nextTick(() => {
            inputRef.value?.focus()
        })
    }
})

</script>

<style scoped></style>