<script lang="ts">
	import Topbar from '$lib/layouts/components/topbar/index.svelte';
	import Sidenav from '$lib/layouts/components/sidenav/index.svelte';
	import Footer from '$lib/layouts/components/footer/index.svelte';
	import Customizer from '$lib/layouts/components/customizer/index.svelte';
	import { layout, setSideNavSize } from '$lib/stores/layout';
	import { onMount } from 'svelte';

	onMount(() => {
		const resize = () => {
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

		return () => {
			window.removeEventListener('resize', resize);
		};
	});
</script>

<div class="wrapper">
	<Topbar />

	<Sidenav />

	<div class="content-page">
		<slot />
		<Footer />
	</div>

	<Customizer />
</div>
