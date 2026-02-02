<script lang="ts">
	import Icon from '@iconify/svelte';
	import user2 from '$lib/assets/images/users/user-2.jpg';
	import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from '@sveltestrap/sveltestrap';
	import { userDropdownItems } from '$lib/layouts/components/data';
</script>

<div class="sidenav-user">
	<div class="d-flex justify-content-between align-items-center">
		<div>
			<a href={null} class="link-reset">
				<img src={user2} alt="User Profile" class="rounded-circle mb-2 avatar-md" />
				<span class="sidenav-user-name fw-bold">Damian D.</span>
				<span class="fs-12 fw-semibold" data-lang="user-role">Art Director</span>
			</a>
		</div>

		<Dropdown>
			<DropdownToggle nav class="link-reset sidenav-user-set-icon border-0 p-0">
				<Icon icon="tabler:settings" class="fs-24 align-middle ms-1" />
			</DropdownToggle>

			<DropdownMenu>
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
</div>
