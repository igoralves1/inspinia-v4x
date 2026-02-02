<script lang="ts">
	import { onMount } from 'svelte';

	export let is: string = 'div';
	export let id: string;
	export let options: object;
	export let className: string = '';
	export let style: string = '';

	onMount(async () => {
		await import('jsvectormap');
		await import('jsvectormap/dist/maps/world');
		await import('jsvectormap/dist/maps/world-merc');

		new (window as any)['jsVectorMap']({
			selector: `#${id}`,
			...options
		});
	});
</script>

<svelte:element this={is} {id} {style} class={className}></svelte:element>
