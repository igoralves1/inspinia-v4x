<script lang="ts">
	import { Spinner } from '@sveltestrap/sveltestrap';
	import { onMount } from 'svelte';

	let isLoading = true;

	onMount(() => {
		isLoading = false;
	});
</script>

{#if isLoading}
	<div
		class="position-fixed top-0 start-0 d-flex justify-content-center align-items-center bg-white"
		style="height: 100%; width: 100vw; z-index: 9999"
	>
		<Spinner color="primary" />
	</div>
{/if}
