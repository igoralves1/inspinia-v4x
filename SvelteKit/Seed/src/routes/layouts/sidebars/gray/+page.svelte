<script lang="ts">
	import { Alert, Col, Container, Row } from '@sveltestrap/sveltestrap';
	import PageBreadcrumb from '$lib/components/PageBreadcrumb.svelte';
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';
	import { reset, setSideNavColor } from '$lib/stores/layout';

	onMount(() => {
		setSideNavColor('gray');

		return () => reset();
	});
</script>

<Container fluid>
	<PageBreadcrumb title="Gray Sidebar" />

	<Row>
		<Col sm="12">
			<Alert color="info" class="alert-bordered border-start border-info">
				<div class="d-flex align-items-center gap-2">
					<Icon icon="tabler:info-circle" class="fs-xxl" />
					<div>
						To switch to a gray sidebar, add
						<code>data-menu-color="gray"</code> to the
						<code>&lt;html&gt;</code> tag. To apply this dynamically, use
						<code>setSideNavColor('gray')</code> from the <code>layout</code> store.
					</div>
				</div>
			</Alert>
		</Col>
	</Row>
</Container>
