<script lang="ts">
	import type { MenuItemType } from '$lib/types/layout';
	import Icon from '@iconify/svelte';
	import { page } from '$app/stores';

	export let item: MenuItemType;
	export let linkClass: string = '';
	export let wrapperClass: string = '';
	export let level: number = 0;

	const menuLevel = level ?? 1;

	const isActive = item?.url && $page.url.pathname.endsWith(item.url);
</script>

{#if menuLevel > 1}
	<a href={item.url ?? null} class="{linkClass} {item.isDisabled ? 'disabled' : ''}">
		{#if item.icon}
			<span class="menu-icon"><Icon icon={item.icon} /></span>
		{/if}
		<span class="menu-text">{item.label}</span>
		{#if item.badge}
			<span class="badge text-bg-{item.badge.variant} opacity-50">
				{item.badge.text}
			</span>
		{/if}
	</a>
{:else}
	<li class="{wrapperClass} {isActive ? 'active' : ''}">
		<a href={item.url ?? null} class="{linkClass} {item.isDisabled ? 'disabled' : ''}">
			{#if item.icon}
				<span class="menu-icon"><Icon icon={item.icon} /></span>
			{/if}
			<span class="menu-text">{item.label}</span>
			{#if item.badge}
				<span class="badge text-bg-{item.badge.variant} opacity-50">
					{item.badge.text}
				</span>
			{/if}
		</a>
	</li>
{/if}
