<script lang="ts">
	import Topbar from '$lib/layouts/components/topbar/index.svelte';
	import Navbar from '$lib/layouts/components/navbar/index.svelte';
	import Sidenav from '$lib/layouts/components/sidenav/index.svelte';
	import Footer from '$lib/layouts/components/footer/index.svelte';
	import Customizer from '$lib/layouts/components/customizer/index.svelte';
	import { layout, setSideNavSize } from '$lib/stores/layout';
	import { onDestroy, onMount, tick } from 'svelte';
	import { writable } from 'svelte/store';

	const windowWidth = writable(0);

	onMount(async () => {
		if (typeof document !== 'undefined') {
			await tick();
			document.documentElement.setAttribute('data-layout', 'topnav');
		}

		const resize = () => {
			windowWidth.set(window.innerWidth);

			if (window.innerWidth <= 991) {
				setSideNavSize('offcanvas');
			} else if (window.innerWidth <= 1140 && $layout.sidenav.size !== 'offcanvas') {
				setSideNavSize($layout.sidenav.size === 'on-hover' ? 'condensed' : 'condensed');
			} else {
				setSideNavSize('default');
			}
		};

		resize();
		window.addEventListener('resize', resize);
	});

	onDestroy(() => {
		document.documentElement.removeAttribute('data-layout');
	});
</script>

<div class="wrapper">
	<Topbar />

	{#if $windowWidth <= 991}
		<Sidenav />
	{:else}
		<Navbar />
	{/if}

	<div class="content-page">
		<slot />
		<Footer />
	</div>

	<Customizer />
</div>
