<script lang="ts">
	import { Container } from '@sveltestrap/sveltestrap';
	import Icon from '@iconify/svelte';
	import PageMeta from '$lib/components/PageMeta.svelte';
</script>

<PageMeta title="Topbar with Sub Item" />

<Container fluid>
	<div class="page-title-head py-2 d-flex align-items-sm-center flex-sm-row flex-column">
		<div class="flex-grow-1">
			<h4 class="fs-sm text-uppercase fw-bold mb-1">Hey Damian,</h4>
			<ol class="breadcrumb mb-0 p-0 fs-xxs">
				<li class="breadcrumb-item">
					<a href={null}>Home</a>
					<Icon icon="tabler:chevron-right" class="breadcrumb-arrow" />
				</li>
				<li class="breadcrumb-item">
					<a href={null}>Topbar</a>
					<Icon icon="tabler:chevron-right" class="breadcrumb-arrow" />
				</li>
				<li class="breadcrumb-item active" aria-current="page">Sub Items</li>
			</ol>
		</div>
		<div class="d-flex">
			<a href={null} class="btn btn-primary flex-shrink-0 ms-2">
				<Icon icon="tabler:circle-dashed-plus" class="fs-lg me-1" />
				Add New
			</a>
			<a href={null} class="btn btn-icon btn-secondary flex-shrink-0 ms-1">
				<Icon icon="tabler:activity-heartbeat" class="fs-lg" />
			</a>
		</div>
	</div>
</Container>
