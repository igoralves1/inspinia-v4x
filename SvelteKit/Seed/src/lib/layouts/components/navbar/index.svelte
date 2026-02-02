<script lang="ts">
	import { Container } from '@sveltestrap/sveltestrap';
	import AppMenu from '$lib/layouts/components/navbar/components/AppMenu.svelte';
</script>

<header class="topnav">
	<nav class="navbar navbar-expand-lg">
		<Container fluid>
			<div class="navbar-collapse">
				<AppMenu />
			</div>
		</Container>
	</nav>
</header>
