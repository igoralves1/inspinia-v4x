<script lang="ts">
	import { Col, Container, Row } from '@sveltestrap/sveltestrap';
	import PageBreadcrumb from '$lib/components/PageBreadcrumb.svelte';
	import StatisticWidget from './components/StatisticWidget.svelte';
	import OrderStatistics from './components/OrderStatistics.svelte';
	import ProductInventory from './components/ProductInventory.svelte';
	import RecentOrders from './components/RecentOrders.svelte';
	import Transactions from './components/Transactions.svelte';
	import { statistics } from './data';
</script>

<Container fluid>
	<PageBreadcrumb title="Dashboard" />

	<Row class="row-cols-xxl-4 row-cols-md-2 row-cols-1">
		{#each statistics as item, idx (idx)}
			<Col>
				<StatisticWidget {item} />
			</Col>
		{/each}
	</Row>

	<Row>
		<Col sm="12">
			<OrderStatistics />
		</Col>
	</Row>

	<Row>
		<Col xxl="6">
			<ProductInventory />
		</Col>
		<Col xxl="6">
			<RecentOrders />
		</Col>
	</Row>

	<Row>
		<Col sm="12">
			<Transactions />
		</Col>
	</Row>
</Container>
