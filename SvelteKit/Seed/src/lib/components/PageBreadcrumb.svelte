<script lang="ts">
	import Icon from '@iconify/svelte';
	import PageMeta from '$lib/components/PageMeta.svelte';

	export let title: string;
	export let subtitle: string | undefined = undefined;
	export let subtitleUrl: string | null = null;
</script>

<PageMeta {title} />

<div class="page-title-head d-flex align-items-center">
	<div class="flex-grow-1">
		<h4 class="fs-sm text-uppercase fw-bold m-0">{title}</h4>
	</div>

	<div class="text-end">
		<ol class="breadcrumb m-0 py-0">
			<li class="breadcrumb-item">
				<a href="/">Inspinia</a>
				<Icon icon="tabler:chevron-right" class="breadcrumb-arrow" />
			</li>
			{#if subtitle}
				<li class="breadcrumb-item">
					<a href={subtitleUrl}>{subtitle}</a>
					<Icon icon="tabler:chevron-right" class="breadcrumb-arrow" />
				</li>
			{/if}
			<li class="breadcrumb-item active">{title}</li>
		</ol>
	</div>
</div>
