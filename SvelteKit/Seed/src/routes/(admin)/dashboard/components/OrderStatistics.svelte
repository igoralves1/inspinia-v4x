<script lang="ts">
	import {
		Card,
		CardBody,
		CardHeader,
		Col,
		Progress,
		Row,
		Tooltip
	} from '@sveltestrap/sveltestrap';
	import { CanvasRenderer } from 'echarts/renderers';
	import { BarChart, LineChart } from 'echarts/charts';
	import { GridComponent, TooltipComponent } from 'echarts/components';

	import Icon from '@iconify/svelte';
	import { orderStatistics, orderStatisticsChartOptions } from '../data';
	import CustomEChart from '$lib/components/CustomEChart.svelte';
</script>

<Card>
	<CardHeader class="border-dashed card-tabs d-flex align-items-center">
		<div class="flex-grow-1">
			<h4 class="card-title">Orders Statics</h4>
		</div>
		<ul class="nav nav-tabs nav-justified card-header-tabs nav-bordered">
			<li class="nav-item">
				<a href={null} data-bs-toggle="tab" aria-expanded="false" class="nav-link">
					<Icon icon="tabler:home" class="d-md-none d-block" />
					<span class="d-none d-md-block">Today</span>
				</a>
			</li>
			<li class="nav-item">
				<a href={null} data-bs-toggle="tab" aria-expanded="true" class="nav-link active">
					<Icon icon="tabler:user-circle" class="d-md-none d-block" />
					<span class="d-none d-md-block">Monthly</span>
				</a>
			</li>
			<li class="nav-item">
				<a href={null} data-bs-toggle="tab" aria-expanded="false" class="nav-link">
					<Icon icon="tabler:settings" class="d-md-none d-block" />
					<span class="d-none d-md-block">Annual</span>
				</a>
			</li>
		</ul>
	</CardHeader>
	<CardBody class="p-0">
		<Row class="g-0">
			<Col xxl="8" class="border-end border-dashed">
				<CustomEChart
					getOptions={orderStatisticsChartOptions}
					extensions={[LineChart, BarChart, TooltipComponent, GridComponent, CanvasRenderer]}
					style="height: 405px"
				/>
			</Col>

			<Col xxl="4">
				<div class="p-3 bg-light-subtle border-bottom border-dashed">
					<Row>
						<Col>
							<h4 class="fs-sm mb-1">Would you like the full report?</h4>
							<small class="text-muted fs-xs mb-0">
								All 120 orders have been successfully delivered
							</small>
						</Col>
						<Col class="col-auto align-self-center">
							<Tooltip target="download">Download</Tooltip>
							<button id="download" class="btn btn-sm btn-default rounded-circle btn-icon">
								<Icon icon="tabler:download" class="fs-xl" />
							</button>
						</Col>
					</Row>
				</div>

				<Row class="row-cols-xxl-2 row-cols-md-2 row-cols-1 g-1 p-1">
					{#each orderStatistics as item, idx (idx)}
						<Col>
							<Card class="rounded-0 border shadow-none border-dashed mb-0">
								<CardBody>
									<div class="mb-3 d-flex justify-content-between align-items-center">
										<h5 class="fs-xl mb-0">{item.prefix}{item.value}{item.suffix}</h5>
										<span
											>{item.growth}%
											{#if item.growth >= 20}
												<Icon icon="tabler:bolt" class="text-success" />
											{:else if item.growth >= 0 && item.growth < 20}
												<Icon icon="tabler:arrow-up" class="text-success" />
											{:else}
												<Icon icon="tabler:arrow-down" class="text-danger" />
											{/if}
										</span>
									</div>
									<p class="text-muted mb-2"><span>{item.title}</span></p>
									<Progress
										value={Math.abs(item.growth)}
										color={item.growth > 0 ? 'secondary' : 'danger'}
										class="mb-0"
										style="height: 5px"
									/>
								</CardBody>
							</Card>
						</Col>
					{/each}
				</Row>

				<div class="text-center my-3">
					<a href={null} class="link-reset text-decoration-underline fw-semibold link-offset-3">
						View all Reports
						<Icon icon="tabler:send-2" />
					</a>
				</div>
			</Col>
		</Row>
	</CardBody>
</Card>
