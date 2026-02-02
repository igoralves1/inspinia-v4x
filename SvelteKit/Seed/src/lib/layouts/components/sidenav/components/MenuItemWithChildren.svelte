<script lang="ts">
	import Icon from '@iconify/svelte';
	import { Collapse } from '@sveltestrap/sveltestrap';
	import type { MenuItemType } from '$lib/types/layout';
	import MenuItemWithChildren from '$lib/layouts/components/sidenav/components/MenuItemWithChildren.svelte';
	import MenuItem from '$lib/layouts/components/sidenav/components/MenuItem.svelte';
	import { writable } from 'svelte/store';
	import { page } from '$app/stores';
	import { layout } from '$lib/stores/layout';

	export let item: MenuItemType;
	export let openMenuKey: string | null = null;
	export let setOpenMenuKey: (key: string | null) => void = () => {};
	export let level: number = 0;

	const isTopLevel = level === 0;
	const localOpen = writable(false);
	const didAutoOpen = writable(false);

	let isOpen = false;
	let active = false;

	$: active = isChildActive(item.children ?? [], $page.url.pathname);

	$: {
		if (active && !$didAutoOpen) {
			if (isTopLevel) {
				setOpenMenuKey(item.key);
			} else {
				localOpen.set(true);
			}
			didAutoOpen.set(true);
		}
	}

	$: if (!isTopLevel) {
		isOpen = $localOpen;
	}

	$: if (isTopLevel) {
		isOpen = openMenuKey === item.key;
	}

	const toggleOpen = () => {
		if (isTopLevel) {
			setOpenMenuKey(isOpen ? null : item.key);
		} else {
			localOpen.update((v) => !v);
		}
	};

	const isChildActive = (children: MenuItemType[], currentPath: string): boolean => {
		return children.some(
			(child) =>
				(child.url && (currentPath === child.url || currentPath.startsWith(child.url + '/'))) ||
				(child.children && isChildActive(child.children, currentPath))
		);
	};
</script>

<li class="side-nav-item" class:active={isOpen}>
	<button class="side-nav-link" aria-expanded={isOpen} on:click={toggleOpen}>
		{#if item.icon}
			<span class="menu-icon"><Icon icon={item.icon} /></span>
		{/if}
		<span class="menu-text" data-lang="dashboards">{item.label}</span>
		{#if item.badge}
			<span class="badge bg-{item.badge.variant}">{item.badge.text}</span>
		{:else}
			<span class="menu-arrow"><Icon icon="tabler:chevron-down" /></span>
		{/if}
	</button>
	<Collapse {isOpen} class="{$layout.sidenav.size === 'condensed' ? 'collapse' : ''}}">
		<ul class="sub-menu">
			{#each item.children || [] as child (child.key)}
				{#if child.children}
					<MenuItemWithChildren item={child} level={(level ?? 0) + 1} />
				{:else}
					<MenuItem item={child} />
				{/if}
			{/each}
		</ul>
	</Collapse>
</li>
