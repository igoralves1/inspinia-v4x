<template>
  <span class="text-warning d-flex justify-content-center align-items-center" v-bind="$attrs">

    <Icon v-for="(_,i) in [...Array(fullStars)]" :key="`full-${i}`" name="tabler:star-filled" :size="size"/>

    <Icon v-if="halfStar" name="tabler:star-half-filled" :size="size"/>

    <Icon v-for="(_,i) in [...Array(emptyStars)]" :key="`empty-${i}`" name="tabler:star" :size="size"/>

    </span>
</template>

<script setup lang="ts">
type PropsType = {
  rating: number
  size?: number | string
}

const props = defineProps<PropsType>()

const fullStars = Math.floor(props.rating)
const halfStar = props.rating % 1 !== 0
const emptyStars = 5 - fullStars - (halfStar ? 1 : 0)
</script>