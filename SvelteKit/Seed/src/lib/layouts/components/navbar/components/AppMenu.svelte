<script lang="ts">
	import MenuItemWithChildren from '$lib/layouts/components/navbar/components/MenuItemWithChildren.svelte';
	import MenuItem from '$lib/layouts/components/navbar/components/MenuItem.svelte';
	import { horizontalMenuItems } from '$lib/layouts/components/data';
</script>

<ul class="navbar-nav">
	{#each horizontalMenuItems || [] as item, idx (idx)}
		{#if item.children}
			<MenuItemWithChildren {item} wrapperClass="nav-item" togglerClass="nav-link" />
		{:else}
			<MenuItem {item} linkClass="nav-link" wrapperClass="nav-item" />
		{/if}
	{/each}
</ul>
