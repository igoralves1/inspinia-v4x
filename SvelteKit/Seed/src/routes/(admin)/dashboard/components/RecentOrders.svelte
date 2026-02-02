<script lang="ts">
	import UICard from '$lib/components/UICard.svelte';
	import Icon from '@iconify/svelte';
	import {
		Dropdown,
		DropdownItem,
		DropdownMenu,
		DropdownToggle,
		Table
	} from '@sveltestrap/sveltestrap';
	import Pagination from '$lib/components/Pagination.svelte';
	import { derived, writable } from 'svelte/store';
	import { orders as ordersData } from '../data';
	import { currency } from '$lib/helpers';
	import { toTitleCase } from '$lib/helpers/casing';
	import type { OrderType } from '../types';

	const orders = writable<OrderType[]>(ordersData);
	const currentPage = writable(1);
	const perPage = writable(5);

	const totalItems = derived(orders, ($orders) => $orders.length);

	const paginatedOrders = derived(
		[orders, currentPage, perPage],
		([$orders, $currentPage, $perPage]) => {
			const start = ($currentPage - 1) * $perPage;
			return $orders.slice(start, start + $perPage);
		}
	);
</script>

<UICard title="Recent Orders" hasCardFooter bodyClass="p-0" footerClass="border-0">
	<svelte:fragment slot="card-header-actions">
		<div class="d-flex gap-2">
			<a href={null} class="btn btn-sm btn-soft-secondary">
				<Icon icon="tabler:plus" class="me-1" />
				Add Order
			</a>
			<a href={null} class="btn btn-sm btn-primary">
				<Icon icon="tabler:file-export" class="me-1" />
				Export CSV
			</a>
		</div>
	</svelte:fragment>

	<Table responsive class="table-centered table-custom table-nowrap mb-0">
		<tbody>
			{#each $paginatedOrders as item (item.id)}
				<tr>
					<td>
						<div class="d-flex align-items-center">
							<img src={item.user.image} alt="avatar" class="avatar-sm rounded-circle me-2" />
							<div>
								<h5 class="fs-base my-1"><a href={item.url} class="text-body">{item.id}</a></h5>
								<span class="text-muted fs-xs">{item.user.name}</span>
							</div>
						</div>
					</td>
					<td>
						<span class="text-muted fs-xs">Product</span>
						<h5 class="fs-base mt-1 fw-normal">{item.product}</h5>
					</td>
					<td>
						<span class="text-muted fs-xs">Date</span>
						<h5 class="fs-base mt-1 fw-normal">{item.date}</h5>
					</td>
					<td>
						<span class="text-muted fs-xs">Amount</span>
						<h5 class="fs-base mt-1 fw-normal">{currency}{item.amount}</h5>
					</td>
					<td>
						<span class="text-muted fs-xs">Status</span>
						<h5 class="fs-base mt-1 fw-normal">
							<Icon icon="tabler:circle-filled" class="fs-xs text-{item.variant}" />
							{toTitleCase(item.status)}
						</h5>
					</td>
					<td style="width: 30px;">
						<Dropdown>
							<DropdownToggle color="link" class="p-0 text-muted">
								<Icon icon="tabler:dots-vertical" class="fs-lg" />
							</DropdownToggle>
							<DropdownMenu end>
								<DropdownItem href="#">View Details</DropdownItem>
								<DropdownItem href="#">Cancel Order</DropdownItem>
							</DropdownMenu>
						</Dropdown>
					</td>
				</tr>
			{/each}
		</tbody>
	</Table>

	<svelte:fragment slot="card-footer">
		<Pagination {currentPage} {perPage} {totalItems} paginationInfoLabel="orders" />
	</svelte:fragment>
</UICard>
