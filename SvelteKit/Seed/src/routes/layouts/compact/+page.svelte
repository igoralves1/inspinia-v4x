<script lang="ts">
	import { Alert, Col, Container, Row } from '@sveltestrap/sveltestrap';
	import PageBreadcrumb from '$lib/components/PageBreadcrumb.svelte';
	import VerticalLayout from '$lib/layouts/VerticalLayout.svelte';
	import Icon from '@iconify/svelte';
</script>

<VerticalLayout>
	<Container fluid>
		<PageBreadcrumb title="Compact" />
	</Container>

	<Container xl>
		<Row>
			<Col sm="12">
				<Alert color="info" class="alert-bordered border-start border-info">
					<div class="d-flex align-items-center gap-2">
						<Icon icon="tabler:info-circle" class="fs-xxl" />
						<div>
							To use the compact layout, follow this structure: wrap your page title in
							<code>&lt;Container fluid&gt;</code> and place your main content inside
							<code>&lt;Container xl&gt;</code>. This ensures proper spacing and alignment.
						</div>
					</div>
				</Alert>
			</Col>
		</Row>
	</Container>
</VerticalLayout>
