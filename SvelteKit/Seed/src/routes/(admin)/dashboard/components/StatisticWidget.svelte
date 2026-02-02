<script lang="ts">
	import type { StatisticsWidgetType } from '../types';
	import CustomEChart from '$lib/components/CustomEChart.svelte';
	import { Card, CardBody, CardHeader } from '@sveltestrap/sveltestrap';
	import { LegendComponent, TitleComponent, TooltipComponent } from 'echarts/components';
	import { PieChart } from 'echarts/charts';
	import { CanvasRenderer } from 'echarts/renderers';
	import CustomCounter from '$lib/components/CustomCounter.svelte';

	export let item: StatisticsWidgetType;
</script>

<Card>
	<CardHeader class="d-flex border-dashed justify-content-between align-items-center">
		<h5 class="card-title">{item.title}</h5>
		{#if item.badge}
			<span class="badge badge-soft-{item.badge.variant}">
				{item.badge.text}
			</span>
		{/if}
	</CardHeader>

	<CardBody>
		<div class="d-flex justify-content-between align-items-center">
			{#if item.chartOptions}
				<CustomEChart
					getOptions={item.chartOptions}
					extensions={[CanvasRenderer, PieChart, TitleComponent, TooltipComponent, LegendComponent]}
					style="height: 60px;width: 60px;"
				/>
			{/if}

			<div class="text-end">
				<h3 class="mb-2 fw-normal">
					<CustomCounter
						end={item.value}
						duration={2000}
						prefix={item.prefix}
						suffix={item.suffix}
						enableScrollSpy={true}
					/>
				</h3>
				<p class="mb-0 text-muted">
					<span>{item.description}</span>
				</p>
			</div>
		</div>
	</CardBody>
</Card>
