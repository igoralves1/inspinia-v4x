<script lang="ts">
	import {
		Alert,
		Button,
		Collapse,
		Nav,
		Navbar,
		NavbarToggler,
		NavItem,
		NavLink
	} from '@sveltestrap/sveltestrap';
	import Icon from '@iconify/svelte';
	import { layout, setTheme } from '$lib/stores/layout';
	import { onMount } from 'svelte';

	import logo from '$lib/assets/images/logo.png';
	import logoDark from '$lib/assets/images/logo-black.png';

	let isOpen = false;
	let isAlertOpen = true;
	let isSticky = false;

	const navItems = ['Home', 'Services', 'Features', 'Plans', 'Reviews', 'Blog', 'Contact'];

	const scrollTo = (id: string) => {
		document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
	};

	const toggleTheme = () => {
		if ($layout.theme === 'dark') {
			return setTheme('light');
		}
		return setTheme('dark');
	};

	onMount(() => {
		window.addEventListener('scroll', () => {
			isSticky = window.scrollY > 20;
		});
	});

	let scrollDirection: 'up' | 'down' | null = null;
	let lastScrollY = 0;

	onMount(() => {
		const handleScroll = () => {
			if (window.scrollY === 0) {
				scrollDirection = null;
				return;
			}
			const current = window.scrollY;
			scrollDirection = current < lastScrollY ? 'up' : 'down';
			lastScrollY = current;
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	const handleUpdate = (event: CustomEvent<boolean>) => {
		isOpen = event.detail;
	};
</script>

<Alert
	isOpen={isAlertOpen}
	color="primary"
	class="top-alert mb-0 rounded-0 w-100 position-relative"
>
	<div class="d-flex align-items-center justify-content-center w-100">
		<div class="fst-italic fw-medium text-center">
			🚀 INSPINIA 4.x is here! Now with Bootstrap 5, dark mode, and a refreshed UI. Upgrade today
			for the best experience!
			<a
				href="https://wrapbootstrap.com/theme/inspinia-multipurpose-admin-dashboard-template-WB0R5L90S?ref=inspinia"
				target="_blank"
				class="fw-semibold fst-normal text-white text-decoration-underline link-offset-3 ms-2"
			>
				Buy Now!
			</a>
		</div>
		<button
			class="btn-close btn-close-white position-absolute end-0 me-3"
			style="top: 50%; transform: translateY(-50%)"
			on:click={() => (isAlertOpen = false)}
			aria-label="Close"
		></button>
	</div>
</Alert>

<header>
	<Navbar
		id="landing-navbar"
		container="sm"
		expand="lg"
		class="py-3 sticky-top {scrollDirection === 'up'
			? 'top-fixed top-scroll-up'
			: scrollDirection === 'down'
				? 'top-fixed top-hide'
				: ''}"
	>
		<div class="auth-brand d-inline-block mb-0">
			<a href="/" class="logo-dark">
				<img src={logoDark} alt="dark logo" height="32" />
			</a>
			<a href="/" class="logo-light">
				<img src={logo} alt="logo" height="32" />
			</a>
		</div>

		<NavbarToggler on:click={() => (isOpen = !isOpen)} />

		<Collapse {isOpen} navbar expand="lg" on:update={handleUpdate}>
			<Nav navbar class="fw-medium gap-2 fs-sm mx-auto mt-2 mt-lg-0">
				{#each navItems as item, idx (idx)}
					<NavItem>
						<NavLink href={null} on:click={() => scrollTo(item)}>
							{item}
						</NavLink>
					</NavItem>
				{/each}
			</Nav>

			<div class="d-flex align-items-center">
				<Button color="link" class="btn-icon fw-semibold text-body" on:click={toggleTheme}>
					<Icon icon="tabler:contrast" class="fs-22" />
				</Button>
				<a href="/auth-1/sign-in" class="btn btn-link fw-semibold text-body ps-2"> SIGN IN </a>
				<a href="/auth-1/sign-up" class="btn btn-sm btn-primary"> Sign Up</a>
			</div>
		</Collapse>
	</Navbar>
</header>
