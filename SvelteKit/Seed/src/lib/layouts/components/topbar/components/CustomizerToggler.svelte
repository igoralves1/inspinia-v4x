<script lang="ts">
	import Icon from '@iconify/svelte';
	import { toggleCustomizer } from '$lib/stores/layout';
</script>

<div class="topbar-item d-none d-sm-flex">
	<button on:click={toggleCustomizer} class="topbar-link" type="button">
		<Icon icon="lucide:settings" class="fs-xxl" />
	</button>
</div>
