<script lang="ts">
	import { Container } from '@sveltestrap/sveltestrap';
	import HorizontalLayout from '$lib/layouts/HorizontalLayout.svelte';
	import PageBreadcrumb from '$lib/components/PageBreadcrumb.svelte';
</script>

<HorizontalLayout>
	<Container fluid>
		<PageBreadcrumb title="Horizontal" />
	</Container>
</HorizontalLayout>
