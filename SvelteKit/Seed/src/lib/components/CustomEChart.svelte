<script lang="ts">
	import { Chart } from 'svelte-echarts';
	import type { EChartsOption } from 'echarts';
	import { getDefaultFontFamily } from '$lib/helpers/chart';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';

	import { init, use } from 'echarts/core';

	import { layout } from '$lib/stores/layout';

	export let getOptions: () => EChartsOption;
	export let extensions: any[] = [];
	export let style: string = 'width: 100%; height: 100%';

	let chartOptions: EChartsOption = {};
	let extensionsRegistered = false;

	let layoutKey = '';

	if (!extensionsRegistered) {
		use(extensions);
		extensionsRegistered = true;
	}

	onMount(() => {
		updateOptions();

		const unsubscribe = layout.subscribe(() => {
			layoutKey = `${get(layout).theme}-${get(layout).skin}`;
			updateOptions();
		});

		return () => unsubscribe();
	});

	function updateOptions() {
		const baseOptions = getOptions();
		chartOptions = {
			...baseOptions,
			textStyle: {
				...(baseOptions.textStyle || {}),
				fontFamily: getDefaultFontFamily()
			}
		};
	}
</script>

<div {style}>
	<Chart options={chartOptions} {init} style="width: 100%; height: 100%;" />
</div>
