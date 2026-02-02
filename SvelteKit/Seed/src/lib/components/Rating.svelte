<script lang="ts">
	import Icon from '@iconify/svelte';

	export let rating: number;
	export let height: number | string = 16;
	export let width: number | string = 16;
	export let className: string = '';
	export let style: string = '';

	const fullStars = Math.floor(rating);
	const halfStar = rating % 1 !== 0;
	const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
</script>

<span class="text-warning d-flex justify-content-center align-items-center {className}" {style}>
	{#each [...Array(fullStars)] as _, i ('filled' + i)}
		<Icon icon="tabler:star-filled" {height} {width} />
	{/each}

	{#if halfStar}
		<Icon icon="tabler:star-half-filled" {height} {width} />
	{/if}

	{#each [...Array(emptyStars)] as _, i ('empty' + i)}
		<Icon icon="tabler:star" {height} {width} />
	{/each}
</span>
