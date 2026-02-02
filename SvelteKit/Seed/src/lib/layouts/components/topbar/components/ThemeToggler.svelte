<script lang="ts">
	import Icon from '@iconify/svelte';
	import { layout, setTheme } from '$lib/stores/layout';

	const toggleTheme = () => {
		if ($layout.theme === 'dark') {
			return setTheme('light');
		}
		return setTheme('dark');
	};
</script>

<div class="topbar-item d-none d-sm-flex">
	<button class="topbar-link" type="button" on:click={toggleTheme}>
		{#if $layout.theme === 'light'}
			<Icon icon="lucide:moon" class="fs-xxl mode-light-moon" />
		{:else}
			<Icon icon="lucide:sun" class="fs-xxl mode-light-sun" />
		{/if}
	</button>
</div>
