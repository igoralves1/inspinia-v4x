<script lang="ts">
	import { onMount } from 'svelte';
	import { reset, setSideNavSize, setWidth } from '$lib/stores/layout';
	import { Alert, Col, Container, Row } from '@sveltestrap/sveltestrap';
	import Icon from '@iconify/svelte';
	import VerticalLayout from '$lib/layouts/VerticalLayout.svelte';
	import PageBreadcrumb from '$lib/components/PageBreadcrumb.svelte';

	onMount(() => {
		setWidth('boxed');
		setSideNavSize('on-hover');

		return () => reset();
	});
</script>

<VerticalLayout>
	<Container fluid>
		<PageBreadcrumb title="Boxed" />

		<Row>
			<Col sm="12">
				<Alert color="info" class="alert-bordered border-start border-info">
					<div class="d-flex align-items-center gap-2">
						<Icon icon="tabler:info-circle" class="fs-xxl" />
						<div>
							To enable the boxed layout, add
							<code>data-layout-width="boxed"</code> to the
							<code>&lt;html&gt;</code> tag. For optimal spacing and usability, we also recommend
							adding
							<code>data-sidenav-size="on-hover"</code> to make the sidebar compact while keeping
							more room for content. To apply this dynamically, use <code>setWidth('boxed')</code>
							and <code>setSideNavSize('on-hover')</code> from the
							<code>layout</code> store.
						</div>
					</div>
				</Alert>
			</Col>
		</Row>
	</Container>
</VerticalLayout>
