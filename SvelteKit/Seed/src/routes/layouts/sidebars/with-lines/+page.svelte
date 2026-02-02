<script lang="ts">
	import { Alert, Col, Container, Row } from '@sveltestrap/sveltestrap';
	import PageBreadcrumb from '$lib/components/PageBreadcrumb.svelte';
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';
	import { toggleAttribute } from '$lib/helpers/layout';

	onMount(() => {
		toggleAttribute('class', 'sidebar-with-line');

		return () => toggleAttribute('class', 'sidebar-with-line', true);
	});
</script>

<Container fluid>
	<PageBreadcrumb title="Sidebar with Lines" />

	<Row>
		<Col sm="12">
			<Alert color="info" class="alert-bordered border-start border-info">
				<div class="d-flex align-items-center gap-2">
					<Icon icon="tabler:info-circle" class="fs-xxl" />
					<div>
						If you want to display a line with each menu item, add the class
						<code>"sidebar-with-line"</code> to the
						<code>&lt;html&gt;</code> tag. To apply this dynamically, use
						<code>toggleAttribute('class', 'sidebar-with-line')</code>.
					</div>
				</div>
			</Alert>
		</Col>
	</Row>
</Container>
