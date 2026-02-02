<script lang="ts">
	import { Alert, Col, Container, Row } from '@sveltestrap/sveltestrap';
	import PageBreadcrumb from '$lib/components/PageBreadcrumb.svelte';
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';
	import { reset, setSideNavSize } from '$lib/stores/layout';

	onMount(() => {
		setSideNavSize('on-hover');

		return () => reset();
	});
</script>

<Container fluid>
	<PageBreadcrumb title="On Hover Sidebar" />

	<Row>
		<Col sm="12">
			<Alert color="info" class="alert-bordered border-start border-info">
				<div class="d-flex align-items-center gap-2">
					<Icon icon="tabler:info-circle" class="fs-xxl" />
					<div>
						To switch to a icon view menu with full menu on hover, add
						<code>data-sidenav-size="on-hover"</code> to the
						<code>&lt;html&gt;</code> tag. To apply this dynamically, use
						<code>setSideNavSize('on-hover')</code> from the <code>layout</code> store.
					</div>
				</div>
			</Alert>
		</Col>
	</Row>
</Container>
