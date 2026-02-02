<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	export let is: string = 'div';
	export let start = 0;
	export let end = 100;
	export let duration = 1500;
	export let prefix: string = '';
	export let suffix: string = '';
	export let decimalPlaces: number = 2;
	export let enableScrollSpy: boolean = false;
	export let className: string = '';

	const count = writable(start);
	let counterEl: HTMLElement;

	const animate = (from: number, to: number, duration: number) => {
		const startTime = performance.now();

		const tick = (now: number) => {
			const elapsed = now - startTime;
			const progress = Math.min(elapsed / duration, 1);
			const eased = easeOutCubic(progress);
			const raw = from + (to - from) * eased;
			const value =
				Number.isInteger(start) && Number.isInteger(end)
					? Math.round(raw)
					: Number(raw.toFixed(decimalPlaces));

			count.set(value);

			if (progress < 1) {
				requestAnimationFrame(tick);
			}
		};

		requestAnimationFrame(tick);
	};

	const easeOutCubic = (t: number) => {
		return 1 - Math.pow(1 - t, 3);
	};

	const startCounting = () => {
		animate(start, end, duration);
	};

	const formatNumber = (val: number): string => {
		const rounded = Number(val.toFixed(decimalPlaces));
		const isInteger = Number.isInteger(rounded);
		return rounded.toLocaleString(undefined, {
			minimumFractionDigits: isInteger ? 0 : decimalPlaces,
			maximumFractionDigits: decimalPlaces
		});
	};

	onMount(() => {
		if (!enableScrollSpy) {
			startCounting();
			return;
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					startCounting();
					observer.disconnect();
				}
			},
			{ threshold: 1 }
		);

		if (counterEl) observer.observe(counterEl);
		return () => observer.disconnect();
	});
</script>

<svelte:element this={is} bind:this={counterEl} class={className}>
	{prefix}{formatNumber($count)}{suffix}
</svelte:element>
