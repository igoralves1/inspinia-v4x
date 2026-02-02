<script lang="ts">
	import MenuItemWithChildren from '$lib/layouts/components/sidenav/components/MenuItemWithChildren.svelte';
	import MenuItem from '$lib/layouts/components/sidenav/components/MenuItem.svelte';
	import { scrollToElement } from '$lib/helpers/layout';
	import { onMount } from 'svelte';
	import { menuItems } from '$lib/layouts/components/data';
	import { writable } from 'svelte/store';

	const openMenuKey = writable<string | null>(null);

	const setOpenMenuKey = (key: string | null) => {
		openMenuKey.set(key);
	};

	const scrollToActiveLink = () => {
		const activeItem: HTMLAnchorElement | null = document.querySelector('.side-nav-link.active');
		if (activeItem) {
			const simpleBarContent = document.querySelector('#sidenav .simplebar-content-wrapper');
			if (simpleBarContent) {
				const containerRect = simpleBarContent.getBoundingClientRect();
				const itemRect = activeItem.getBoundingClientRect();

				const offset = itemRect.top - containerRect.top - window.innerHeight * 0.4;

				scrollToElement(simpleBarContent, simpleBarContent.scrollTop + offset, 500);
			}
		}
	};

	onMount(() => {
		setTimeout(() => scrollToActiveLink(), 100);
	});
</script>

<ul class="side-nav">
	{#each menuItems || [] as item, idx (idx)}
		{#if item.isTitle}
			<li class="side-nav-title">{item.label}</li>
		{:else if item.children}
			<MenuItemWithChildren {item} openMenuKey={$openMenuKey} {setOpenMenuKey} />
		{:else}
			<MenuItem {item} />
		{/if}
	{/each}
</ul>
