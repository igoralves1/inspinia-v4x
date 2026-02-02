<script lang="ts">
	import { Col, Pagination, PaginationItem, PaginationLink, Row } from '@sveltestrap/sveltestrap';
	import Icon from '@iconify/svelte';
	import { derived, type Readable, type Writable } from 'svelte/store';

	export let currentPage: Writable<number>;
	export let perPage: Readable<number>;
	export let totalItems: Readable<number>;
	export let showPaginationInfo: boolean = true;
	export let paginationInfoLabel: string = 'entities';

	const totalPages = derived([perPage, totalItems], ([$perPage, $totalItems]) =>
		Math.ceil($totalItems / $perPage)
	);

	const start = derived(
		[currentPage, perPage, totalItems],
		([$currentPage, $perPage, $totalItems]) =>
			$totalItems === 0 ? 0 : ($currentPage - 1) * $perPage + 1
	);

	const end = derived([currentPage, perPage, totalItems], ([$currentPage, $perPage, $totalItems]) =>
		Math.min($currentPage * $perPage, $totalItems)
	);
</script>

<Row class="align-items-center justify-content-between text-center text-sm-start">
	<Col class="col-sm">
		{#if showPaginationInfo}
			<span class="text-muted">
				Showing <span class="fw-semibold">{$start}</span> to <span class="fw-semibold">{$end}</span>
				of
				<span class="fw-semibold">{$totalItems}</span>
				{paginationInfoLabel}
			</span>
		{/if}
	</Col>
	<Col class="col-sm-auto mt-3 mt-sm-0">
		{#if $totalPages >= 1}
			<Pagination class="mb-0" listClassName="mb-0 justify-content-end">
				<PaginationItem disabled={$currentPage === 1}>
					<PaginationLink
						href={null}
						previous
						on:click={() => $currentPage > 1 && currentPage.update((n) => n - 1)}
					>
						<Icon icon="tabler:chevron-left" />
					</PaginationLink>
				</PaginationItem>

				{#each Array($totalPages) as _, i (i)}
					<PaginationItem active={i + 1 === $currentPage}>
						<PaginationLink href={null} on:click={() => currentPage.set(i + 1)}
							>{i + 1}</PaginationLink
						>
					</PaginationItem>
				{/each}

				<PaginationItem disabled={$currentPage === $totalPages}>
					<PaginationLink
						href={null}
						next
						on:click={() => $currentPage < $totalPages && currentPage.update((n) => n + 1)}
					>
						<Icon icon="tabler:chevron-right" />
					</PaginationLink>
				</PaginationItem>
			</Pagination>
		{/if}
	</Col>
</Row>
