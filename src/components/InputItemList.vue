<template>
    <div v-auto-animate class="rounded-lg px-3 w-full h-fit min-w-[24rem] max-w-sm ml-5">
        <div v-if="!ok" class="w-sm max-w-sm flex-row flex items-center">
            <button @click="ok = !ok" class="btn no-animation btn-sm  w-full mb-2">
                <Icon name="ic:round-add-circle-outline" size="24px" class="mr-1" /> Add
            </button>
        </div>
        <form @submit.prevent="createNewList" v-if="ok"
            class="w-sm bg-gray-100 py-1 px-2 rounded-md max-w-sm flex-row flex items-center">
            <button @click="ok = false" type="button" class="btn btn-xs btn-square btn-ghost text-gray-700">
                <icon name="iconoir:cancel" size="24px" />
            </button>
            <input v-model="newListName" type="text" ref="inputRef"
                class="input-sm w-full outline-none bg-transparent rounded-md" placeholder="Please input title">
            <button class="btn btn-xs btn-ghost text-gray-700">
                save
            </button>
        </form>
    </div>
</template>

<script setup lang="ts">
const ok = ref(false)
const inputRef = ref<HTMLInputElement>()

const emit = defineEmits(["refresh"])

const newListName = ref("")

const router = useRouter()

watch(() => ok.value, (value) => {
    if (value) {
        nextTick(() => {
            inputRef.value?.focus()
        })
    }
})

const createNewList = async () => {
    // alert(newListName.value)
    await useFetch("/api/lists", {
        method: "POST",
        body: {
            name: newListName.value
        }
    })
    newListName.value  = ""
    ok.value = false
    emit("refresh")

}

</script>

<style scoped></style>