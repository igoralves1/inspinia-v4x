<script lang="ts">
	import {
		Dropdown,
		DropdownItem,
		DropdownMenu,
		DropdownToggle,
		Table
	} from '@sveltestrap/sveltestrap';
	import UICard from '$lib/components/UICard.svelte';
	import Rating from '$lib/components/Rating.svelte';
	import Pagination from '$lib/components/Pagination.svelte';
	import Icon from '@iconify/svelte';
	import { toTitleCase } from '$lib/helpers/casing';
	import { derived, writable } from 'svelte/store';
	import { currency } from '$lib/helpers';
	import { products as productsData } from '../data';
	import type { ProductType } from '../types';

	const products = writable<ProductType[]>(productsData);
	const currentPage = writable(1);
	const perPage = writable(5);

	const totalItems = derived(products, ($products) => $products.length);

	const paginatedProducts = derived(
		[products, currentPage, perPage],
		([$products, $currentPage, $perPage]) => {
			const start = ($currentPage - 1) * $perPage;
			return $products.slice(start, start + $perPage);
		}
	);
</script>

<UICard title="Product Inventory" hasCardFooter bodyClass="p-0" footerClass="border-0">
	<svelte:fragment slot="card-header-actions">
		<div class="d-flex gap-2">
			<a href={null} class="btn btn-sm btn-soft-secondary">
				<Icon icon="tabler:plus" class="me-1" />
				Add Product
			</a>
			<a href={null} class="btn btn-sm btn-primary">
				<Icon icon="tabler:file-export" class="me-1" />
				Export CSV
			</a>
		</div>
	</svelte:fragment>

	<Table responsive class="table-centered table-custom table-nowrap mb-0">
		<tbody>
			{#each $paginatedProducts as item (item.id)}
				<tr>
					<td>
						<div class="d-flex align-items-center">
							<img src={item.image} alt="avatar" class="avatar-sm rounded-circle me-2" />
							<div>
								<h5 class="fs-base my-1">
									<a href={item.url} class="text-body">{item.name}</a>
								</h5>
								<span class="text-muted fs-xs">{item.category}</span>
							</div>
						</div>
					</td>
					<td>
						<span class="text-muted fs-xs">Stock</span>
						<h5 class="fs-base mt-1 fw-normal">{item.stock} units</h5>
					</td>
					<td>
						<span class="text-muted fs-xs">Price</span>
						<h5 class="fs-base mt-1 fw-normal">{currency}{item.price}</h5>
					</td>
					<td>
						<span class="text-muted fs-xs">Ratings</span>
						<h5 class="fs-base mt-1 fw-normal d-flex align-items-center">
							<Rating rating={item.ratings} className="d-inline-flex justify-content-start" />
							<span class="ms-1">
								<a href={null} class="link-reset fw-semibold">({item.reviews})</a>
							</span>
						</h5>
					</td>
					<td>
						<span class="text-muted fs-xs">Status</span>
						<h5 class="fs-base mt-1 fw-normal">
							<Icon icon="tabler:circle-filled" class={`fs-xs text-${item.variant}`} />
							{toTitleCase(item.status)}
						</h5>
					</td>
					<td>
						<Dropdown>
							<DropdownToggle color="link" class="p-0 text-muted">
								<Icon icon="tabler:dots-vertical" class="fs-lg" />
							</DropdownToggle>
							<DropdownMenu end>
								<DropdownItem href="#">Edit Product</DropdownItem>
								<DropdownItem href="#">Remove</DropdownItem>
							</DropdownMenu>
						</Dropdown>
					</td>
				</tr>
			{/each}
		</tbody>
	</Table>

	<svelte:fragment slot="card-footer">
		<Pagination {currentPage} {perPage} {totalItems} paginationInfoLabel="products" />
	</svelte:fragment>
</UICard>
