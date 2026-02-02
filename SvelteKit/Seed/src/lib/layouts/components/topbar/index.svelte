<script lang="ts">
	import MegaMenu from '$lib/layouts/components/topbar/components/MegaMenu.svelte';
	import LanguageDropdown from '$lib/layouts/components/topbar/components/LanguageDropdown.svelte';
	import MessageDropdown from '$lib/layouts/components/topbar/components/MessageDropdown.svelte';
	import NotificationDropdown from '$lib/layouts/components/topbar/components/NotificationDropdown.svelte';
	import CustomizerToggler from '$lib/layouts/components/topbar/components/CustomizerToggler.svelte';
	import ThemeToggler from '$lib/layouts/components/topbar/components/ThemeToggler.svelte';
	import UserProfile from '$lib/layouts/components/topbar/components/UserProfile.svelte';

	import Icon from '@iconify/svelte';
	import { layout, setSideNavSize } from '$lib/stores/layout';
	import { Container, Input } from '@sveltestrap/sveltestrap';
	import { showBackdrop, toggleAttribute } from '$lib/helpers/layout';

	import logo from '$lib/assets/images/logo.png';
	import logoSm from '$lib/assets/images/logo-sm.png';
	import logoDark from '$lib/assets/images/logo-black.png';

	const toggleSideNav = () => {
		const html = document.documentElement;
		const currentSize = html.getAttribute('data-sidenav-size');

		if (currentSize === 'offcanvas') {
			toggleAttribute('class', 'sidebar-enable');
			showBackdrop();
		} else if ($layout.sidenav.size === 'compact') {
			setSideNavSize(currentSize === 'compact' ? 'condensed' : 'compact', false);
		} else {
			setSideNavSize(currentSize === 'condensed' ? 'default' : 'condensed');
		}
	};
</script>

<header class="app-topbar">
	<Container fluid class="topbar-menu">
		<div class="d-flex align-items-center gap-2">
			<div class="logo-topbar">
				<a href="/" class="logo-light">
					<span class="logo-lg">
						<img src={logo} alt="logo" />
					</span>
					<span class="logo-sm">
						<img src={logoSm} alt="small logo" />
					</span>
				</a>

				<a href="/" class="logo-dark">
					<span class="logo-lg">
						<img src={logoDark} alt="dark logo" />
					</span>
					<span class="logo-sm">
						<img src={logoSm} alt="small logo" />
					</span>
				</a>
			</div>

			<!-- Sidebar Menu Toggle Button -->
			<button class="sidenav-toggle-button btn btn-primary btn-icon" on:click={toggleSideNav}>
				<Icon icon="tabler:menu-4" class="fs-22" />
			</button>

			<!-- Search -->
			<div class="app-search d-none d-xl-flex">
				<Input
					type="search"
					class="topbar-search"
					name="search"
					placeholder="Search for something..."
				/>
				<Icon icon="lucide:search" height="18" width="18" class="app-search-icon text-muted" />
			</div>

			<MegaMenu />
		</div>

		<div class="d-flex align-items-center gap-2">
			<LanguageDropdown />

			<MessageDropdown />

			<NotificationDropdown />

			<CustomizerToggler />

			<ThemeToggler />

			<UserProfile />
		</div>
	</Container>
</header>
