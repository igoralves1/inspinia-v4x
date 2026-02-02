<script lang="ts">
	import VerticalLayout from '$lib/layouts/VerticalLayout.svelte';
	import HorizontalLayout from '$lib/layouts/HorizontalLayout.svelte';
	import { layout } from '$lib/stores/layout';
</script>

{#key $layout.orientation}
	{#if $layout.orientation === 'vertical'}
		<VerticalLayout><slot /></VerticalLayout>
	{:else if $layout.orientation === 'horizontal'}
		<HorizontalLayout><slot /></HorizontalLayout>
	{/if}
{/key}
