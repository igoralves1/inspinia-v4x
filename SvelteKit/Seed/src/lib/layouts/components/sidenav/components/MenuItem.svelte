<script lang="ts">
	import type { MenuItemType } from '$lib/types/layout';
	import Icon from '@iconify/svelte';
	import { page } from '$app/stores';
	import { hideBackdrop, toggleAttribute } from '$lib/helpers/layout';
	import { layout } from '$lib/stores/layout';

	export let item: MenuItemType;

	$: isActive = !!(item?.url && $page.url.pathname === item.url);

	$: classNames = [item.isDisabled && 'disabled', item.isSpecial && 'special-menu']
		.filter(Boolean)
		.join(' ');

	const closeOffcanvasSidebar = () => {
		if ($layout.sidenav.size === 'offcanvas') {
			toggleAttribute('class', 'sidebar-enable', true);
			hideBackdrop();
		}
	};
</script>

{#if item.url}
	<li class="side-nav-item" class:active={isActive}>
		<a
			href={item.url}
			class="side-nav-link {classNames}"
			class:active={isActive}
			on:click={closeOffcanvasSidebar}
		>
			{#if item.icon}
				<span class="menu-icon"><Icon icon={item.icon} /></span>
			{/if}
			<span class="menu-text">{item.label}</span>
			{#if item.badge}
				<span class="badge text-bg-{item.badge.variant} opacity-50">{item.badge.text}</span>
			{/if}
		</a>
	</li>
{/if}
