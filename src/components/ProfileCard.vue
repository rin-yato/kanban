<template>
    <div ref="target" :style="{
        transform: cardTransform,
        transition: 'transform 0.1s ease-in-out'

    }" class=" mt-4">
        <ProfileCardSkeleton v-if="!(datas.length)" />
        <div v-for="data in datas" class="">
            <div class="card card-compact bg-black w-[50%] shadow-xl">
                <div class="card-body">
                    <figure>
                        <img src="https://featuredanimation.com/wp-content/uploads/2022/05/Inosuke-flexing-with-his-boar-mask-on.jpeg"
                            alt="">
                    </figure>
                    <h2 class="card-title">{{ data.name }}</h2>
                    <p>{{ data.description }}</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-sm btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));


const getData = async () => {
    await sleep(1000);
    return [{
        position: "God of Mountian",
        name: 'John Doe',
        description: 'B sl soy'
    }]
}

const datas = ref<any[]>([])

onMounted(async () => {
    datas.value = await getData()
})


import { useMouseInElement } from '@vueuse/core';
const target = ref(null)
const { elementX, elementY, isOutside, elementHeight, elementWidth } = useMouseInElement(target)

const cardTransform = computed(() => {
    const MaxMove = 10

    const rX = (MaxMove / 2 - (elementY.value / elementHeight.value) * MaxMove).toFixed(2)
    const rY = ((elementX.value / elementWidth.value) * MaxMove - MaxMove / 2).toFixed(2)

    return isOutside.value ? `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotateY(${rY}deg)` : ''
})
</script>

<style scoped>
    /* .card {
        transform: rotateX(0deg) rotateY(0deg);
        transition: transform 0.1s ease-in-out;
    } */
</style>