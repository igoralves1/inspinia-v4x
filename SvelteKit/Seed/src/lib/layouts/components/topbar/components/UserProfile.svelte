<script lang="ts">
	import Icon from '@iconify/svelte';
	import { userDropdownItems } from '$lib/layouts/components/data';
	import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from '@sveltestrap/sveltestrap';

	import user2 from '$lib/assets/images/users/user-2.jpg';
</script>

<div class="topbar-item nav-user">
	<Dropdown>
		<DropdownToggle nav class="topbar-link px-2">
			<img src={user2} width={32} class="rounded-circle me-lg-2 d-flex" alt="User Profile" />
			<div class="d-lg-flex align-items-center gap-1 d-none">
				<h5 class="my-0">Damian D.</h5>
				<Icon icon="tabler:chevron-down" class="align-middle" />
			</div>
		</DropdownToggle>

		<DropdownMenu end>
			{#each userDropdownItems || [] as item, idx (idx)}
				{#if item.isHeader}
					<DropdownItem header class="noti-title">
						<p class="text-overflow m-0">{item.label}</p>
					</DropdownItem>
				{:else if item.isDivider}
					<DropdownItem divider />
				{:else}
					<DropdownItem href={item.url ?? '#'} class="d-flex align-items-center {item.class}">
						{#if item.icon}
							<Icon icon={item.icon} class="me-2 fs-17 align-middle" />
						{/if}
						<span class="align-middle">{item.label}</span>
					</DropdownItem>
				{/if}
			{/each}
		</DropdownMenu>
	</Dropdown>
</div>
