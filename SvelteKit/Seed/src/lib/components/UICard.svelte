<script lang="ts">
	import Icon from '@iconify/svelte';
	import { Card, CardBody, CardFooter, CardHeader, Collapse } from '@sveltestrap/sveltestrap';

	export let title: string;
	export let titleClass: string = '';
	export let headerClass: string = '';
	export let bodyClass: string = '';
	export let footerClass: string = '';
	export let isCollapsable: boolean = false;
	export let isReloadable: boolean = false;
	export let isCloseable: boolean = false;
	export let hasCardFooter = false;

	let isCollapsed = false;
	let isReloading = false;
	let isVisible = true;

	const collapse = () => {
		isCollapsed = !isCollapsed;
	};

	const reload = () => {
		isReloading = true;
		setTimeout(() => {
			isReloading = false;
		}, 1500);
	};

	const close = () => {
		isVisible = false;
	};
</script>

{#if isVisible}
	<Card>
		<CardHeader
			class="justify-content-between align-items-center {headerClass} {isCollapsed
				? 'border-0'
				: ''}"
		>
			<h5 class="card-title mb-0 {titleClass}">{title}</h5>

			{#if isCollapsable || isReloadable || isCloseable}
				<div class="card-action">
					{#if isCollapsable}
						<button class="card-action-item border-0" on:click={collapse}>
							<Icon
								icon={isCollapsed ? 'tabler:chevron-down' : 'tabler:chevron-up'}
								height="16"
								width="16"
							/>
						</button>
					{/if}
					{#if isReloadable}
						<button class="card-action-item border-0" on:click={reload}>
							<Icon icon="tabler:refresh" height="16" width="16" />
						</button>
					{/if}
					{#if isCloseable}
						<button class="card-action-item border-0" on:click={close}>
							<Icon icon="tabler:x" height="16" width="16" />
						</button>
					{/if}
				</div>
			{:else}
				<slot name="card-header-actions" />
			{/if}
		</CardHeader>

		<Collapse isOpen={!isCollapsed}>
			<CardBody class={bodyClass}>
				<slot />
			</CardBody>

			{#if hasCardFooter}
				<CardFooter class={footerClass}>
					<slot name="card-footer" />
				</CardFooter>
			{/if}
		</Collapse>

		{#if isReloading}
			<div class="card-overlay d-flex">
				<div class="spinner-border text-primary"></div>
			</div>
		{/if}
	</Card>
{/if}
