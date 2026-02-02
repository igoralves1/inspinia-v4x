<script lang="ts">
	import { derived, writable } from 'svelte/store';
	import { Col, Row } from '@sveltestrap/sveltestrap';
	import CustomJsVectorMap from '$lib/components/CustomJsVectorMap.svelte';
	import UICard from '$lib/components/UICard.svelte';
	import Icon from '@iconify/svelte';
	import { currency } from '$lib/helpers';
	import { toTitleCase } from '$lib/helpers/casing';
	import type { TransactionsType } from '../types';
	import { transactions as transactionsData, worldTransactionMapOptions } from '../data';

	const transactions = writable<TransactionsType[]>(transactionsData);
	const currentPage = writable(1);
	const perPage = writable(5);

	const paginatedTransactions = derived(
		[transactions, currentPage, perPage],
		([$transactions, $currentPage, $perPage]) => {
			const start = ($currentPage - 1) * $perPage;
			return $transactions.slice(start, start + $perPage);
		}
	);
</script>

<UICard title="Transactions Worldwide" bodyClass="pt-2" isCollapsable isReloadable isCloseable>
	<Row class="align-items-center">
		<Col xl="6">
			<table class="table table-custom table-nowrap table-hover table-centered mb-0">
				<thead class="bg-light align-middle bg-opacity-25 thead-sm">
					<tr class="text-uppercase fs-xxs">
						<th class="text-muted">Tran. No.</th>
						<th class="text-muted">Order</th>
						<th class="text-muted">Date</th>
						<th class="text-muted">Amount</th>
						<th class="text-muted">Status</th>
						<th class="text-muted">Payment Method</th>
					</tr>
				</thead>
				<tbody>
					{#each $paginatedTransactions as item (item.id)}
						<tr>
							<td><a href={null} class="link-reset fw-semibold">{item.id}</a></td>
							<td>{item.order}</td>
							<td>{item.date} <small class="text-muted">{item.time}</small></td>
							<td class="fw-semibold">{currency}{item.amount}</td>
							<td>
								<span class="badge badge-soft-{item.variant} fs-xxs">
									<Icon icon="tabler:circle-filled" />
									{toTitleCase(item.status)}
								</span>
							</td>
							<td>
								<img src={item.cardImage} alt="card" class="me-2" height="28" /> xxxx {item.lastFour}
							</td>
						</tr>
					{/each}
				</tbody>
			</table>

			<div class="text-center mt-3">
				<a href={null} class="link-reset text-decoration-underline fw-semibold link-offset-3">
					View All Transactions
					<Icon icon="tabler:send-2" />
				</a>
			</div>
		</Col>
		<Col xl="6">
			<CustomJsVectorMap
				id="world-map"
				options={worldTransactionMapOptions}
				className="w-100 mt-4 mt-xl-0"
				style="height: 297px"
			/>
		</Col>
	</Row>
</UICard>
