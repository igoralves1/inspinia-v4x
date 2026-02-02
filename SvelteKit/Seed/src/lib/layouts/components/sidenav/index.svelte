<script lang="ts">
	import 'simplebar';
	import Icon from '@iconify/svelte';
	import UserProfile from '$lib/layouts/components/sidenav/components/UserProfile.svelte';
	import AppMenu from '$lib/layouts/components/sidenav/components/AppMenu.svelte';

	import logo from '$lib/assets/images/logo.png';
	import logoSm from '$lib/assets/images/logo-sm.png';
	import logoDark from '$lib/assets/images/logo-black.png';
	import { layout, setSideNavSize } from '$lib/stores/layout';
	import { hideBackdrop, toggleAttribute } from '$lib/helpers/layout';

	const toggleSidebar = () => {
		setSideNavSize($layout.sidenav.size === 'on-hover-active' ? 'on-hover' : 'on-hover-active');
	};

	const closeOffcanvasSidebar = () => {
		toggleAttribute('class', 'sidebar-enable', true);
		hideBackdrop();
	};
</script>

<div class="sidenav-menu">
	<!-- Brand Logo -->
	<a href="/" class="logo">
		<span class="logo logo-light">
			<span class="logo-lg"><img src={logo} alt="logo" /></span>
			<span class="logo-sm"><img src={logoSm} alt="small logo" /></span>
		</span>

		<span class="logo logo-dark">
			<span class="logo-lg"><img src={logoDark} alt="dark logo" /></span>
			<span class="logo-sm"><img src={logoSm} alt="small logo" /></span>
		</span>
	</a>

	<!-- Sidebar Hover Menu Toggle Button -->
	<button class="button-on-hover" on:click={toggleSidebar}>
		<Icon icon="tabler:menu-4" class="fs-22 align-middle" />
	</button>

	<!-- Full Sidebar Menu Close Button -->
	<button class="button-close-offcanvas" on:click={closeOffcanvasSidebar}>
		<Icon icon="tabler:x" class="align-middle" />
	</button>

	<div id="sidenav" class="scrollbar" data-simplebar>
		<UserProfile />

		<AppMenu />
	</div>
</div>
