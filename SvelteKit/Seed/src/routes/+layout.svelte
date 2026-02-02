<script lang="ts">
	import 'jsvectormap/dist/jsvectormap.min.css';
	import 'bootstrap/dist/css/bootstrap.min.css';
	import '$lib/assets/scss/app.scss';

	import { init } from '$lib/stores/layout';
	import { onMount } from 'svelte';
	import Loader from '$lib/components/Loader.svelte';

	onMount(() => {
		init();
	});
</script>

<Loader />
<slot />
