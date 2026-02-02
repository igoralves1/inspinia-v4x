<script lang="ts">
	import Icon from '@iconify/svelte';

	import type { MenuItemType } from '$lib/types/layout';
	import MenuItemWithChildren from '$lib/layouts/components/navbar/components/MenuItemWithChildren.svelte';
	import MenuItem from '$lib/layouts/components/navbar/components/MenuItem.svelte';
	import { page } from '$app/stores';

	export let item: MenuItemType;
	export let wrapperClass: string = '';
	export let togglerClass: string = '';
	export let level: number = 0;

	const menuLevel = level ?? 1;

	const isChildActive = (children: MenuItemType[], currentPath: string): boolean => {
		return children.some(
			(child) =>
				(child.url && (currentPath === child.url || currentPath.startsWith(child.url + '/'))) ||
				(child.children && isChildActive(child.children, currentPath))
		);
	};

	$: isActive = isChildActive(item.children ?? [], $page.url.pathname);
</script>

<svelte:element
	this={menuLevel > 1 ? 'div' : 'li'}
	class="dropdown {menuLevel > 1 ? 'dropend' : 'dropdown'} {wrapperClass} {isActive
		? 'active'
		: ''}"
>
	<a
		class="dropdown-toggle drop-arrow-none {togglerClass} {isActive ? 'active' : ''}"
		href={null}
		role="button"
		data-bs-toggle="dropdown"
		aria-haspopup="true"
		aria-expanded="false"
	>
		{#if item.icon}
			<span class="menu-icon"><Icon icon={item.icon} /></span>
		{/if}
		<span class="menu-text">{item.label}</span>
		{#if item.badge}
			<span class="badge bg-{item.badge.variant}">{item.badge.text}</span>
		{:else}
			<span class="menu-arrow"><Icon icon="tabler:chevron-down" /></span>
		{/if}
	</a>

	<div class="dropdown-menu">
		{#each item.children || [] as child (child.key)}
			{#if child.children}
				<MenuItemWithChildren item={child} togglerClass="dropdown-item" level={menuLevel + 1} />
			{:else}
				<MenuItem item={child} linkClass="dropdown-item" level={menuLevel + 1} />
			{/if}
		{/each}
	</div>
</svelte:element>
