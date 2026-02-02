<script lang="ts">
	import { Alert, Card, Col, Container, Row } from '@sveltestrap/sveltestrap';
	import VerticalLayout from '$lib/layouts/VerticalLayout.svelte';
	import PageBreadcrumb from '$lib/components/PageBreadcrumb.svelte';
	import { onMount } from 'svelte';
	import { reset, setPosition } from '$lib/stores/layout';
	import Icon from '@iconify/svelte';

	onMount(() => {
		setPosition('scrollable');

		return () => reset();
	});
</script>

<VerticalLayout>
	<Container fluid>
		<PageBreadcrumb title="Scrollable" />

		<Row>
			<Col sm="12">
				<Alert color="info" class="alert-bordered border-start border-info">
					<div class="d-flex align-items-center gap-2">
						<Icon icon="tabler:info-circle" class="fs-xxl" />
						<div>
							To enable full scrolling and view all content, please add
							<code>data-layout-position="scrollable"</code> to the
							<code>&lt;html&gt;</code> tag. To apply this dynamically, use
							<code>setPosition('scrollable')</code>
							from the <code>layout</code> store.
						</div>
					</div>
				</Alert>
			</Col>
		</Row>

		<Row>
			<Col sm="12">
				<Card style="height: 1000px" />
			</Col>
		</Row>
	</Container>
</VerticalLayout>
