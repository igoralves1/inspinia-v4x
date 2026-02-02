<script lang="ts">
	import 'simplebar';
	import Icon from '@iconify/svelte';
	import type { LayoutType } from '$lib/types/layout';

	import bgPattern from '$lib/assets/images/user-bg-pattern.png';

	import classicImg from '$lib/assets/images/layouts/themes/theme-classic.png';
	import materialImg from '$lib/assets/images/layouts/themes/theme-material.png';
	import modernImg from '$lib/assets/images/layouts/themes/theme-modern.png';
	import saasImg from '$lib/assets/images/layouts/themes/theme-saas.png';
	import flatImg from '$lib/assets/images/layouts/themes/theme-flat.png';
	import minimalImg from '$lib/assets/images/layouts/themes/theme-minimal.png';
	import galaxyImg from '$lib/assets/images/layouts/themes/theme-galaxy.png';

	import light from '$lib/assets/images/layouts/light.svg';
	import lightSideNavImg from '$lib/assets/images/layouts/light.svg';
	import dark from '$lib/assets/images/layouts/dark.svg';
	import system from '$lib/assets/images/layouts/system.svg';

	import lightTopBarImg from '$lib/assets/images/layouts/topbar-light.svg';
	import darkTopBarImg from '$lib/assets/images/layouts/topbar-dark.svg';
	import grayTopBarImg from '$lib/assets/images/layouts/topbar-gray.svg';
	import gradientTopBarImg from '$lib/assets/images/layouts/topbar-gradient.svg';
	import darkSideNavImg from '$lib/assets/images/layouts/side-dark.svg';
	import graySideNavImg from '$lib/assets/images/layouts/side-gray.svg';
	import gradientSideNavImg from '$lib/assets/images/layouts/side-gradient.svg';
	import imageSideNavImg from '$lib/assets/images/layouts/side-image.svg';

	import compactSideNavImg from '$lib/assets/images/layouts/sidebar-compact.svg';
	import smallSideNavImg from '$lib/assets/images/layouts/sidebar-sm.svg';
	import fullSideNavImg from '$lib/assets/images/layouts/sidebar-full.svg';

	import { Button, Col, Offcanvas, Row } from '@sveltestrap/sveltestrap';
	import {
		layout,
		reset,
		setOrientation,
		setPosition,
		setSideNavColor,
		setSideNavSize,
		setSkin,
		setTheme,
		setTopBarColor,
		toggleCustomizer,
		toggleSideNavUser
	} from '$lib/stores/layout';
	import { toPascalCase } from '$lib/helpers/casing';

	type SkinOptionType = {
		skin: LayoutType['skin'];
		image: string;
		disabled?: boolean;
	};

	type ThemeOptionType = {
		theme: LayoutType['theme'];
		image: string;
	};

	type OrientationOptionType = {
		orientation: LayoutType['orientation'];
		image: string;
	};

	type TopBarColorOptionType = {
		color: LayoutType['topBar']['color'];
		image: string;
	};

	type SideNavColorOptionType = {
		color: LayoutType['sidenav']['color'];
		image: string;
	};

	type SideNavSizeOptionType = {
		label: string;
		size: LayoutType['sidenav']['size'];
		image: string;
	};

	const skinOptions: SkinOptionType[] = [
		{ skin: 'classic', image: classicImg },
		{ skin: 'material', image: materialImg },
		{ skin: 'modern', image: modernImg },
		{ skin: 'saas', image: saasImg },
		{ skin: 'flat', image: flatImg },
		{ skin: 'minimal', image: minimalImg },
		{ skin: 'galaxy', image: galaxyImg, disabled: true }
	];

	const themeOptions: ThemeOptionType[] = [
		{ theme: 'light', image: light },
		{ theme: 'dark', image: dark },
		{ theme: 'system', image: system }
	];

	const orientationOptions: OrientationOptionType[] = [
		{ orientation: 'vertical', image: darkSideNavImg },
		{ orientation: 'horizontal', image: fullSideNavImg }
	];

	const topBarColorOptions: TopBarColorOptionType[] = [
		{ color: 'light', image: lightTopBarImg },
		{ color: 'dark', image: darkTopBarImg },
		{ color: 'gray', image: grayTopBarImg },
		{ color: 'gradient', image: gradientTopBarImg }
	];

	const sidenavColorOptions: SideNavColorOptionType[] = [
		{ color: 'light', image: lightSideNavImg },
		{ color: 'dark', image: darkSideNavImg },
		{ color: 'gray', image: graySideNavImg },
		{ color: 'gradient', image: gradientSideNavImg },
		{ color: 'image', image: imageSideNavImg }
	];

	const sidenavSizeOptions: SideNavSizeOptionType[] = [
		{ size: 'default', image: lightSideNavImg, label: 'Default' },
		{ size: 'compact', image: compactSideNavImg, label: 'Compact' },
		{ size: 'condensed', image: smallSideNavImg, label: 'Condensed' },
		{ size: 'on-hover', image: smallSideNavImg, label: 'On Hover' },
		{ size: 'on-hover-active', image: lightSideNavImg, label: 'On Hover - Show' },
		{ size: 'offcanvas', image: fullSideNavImg, label: 'Offcanvas' }
	];

	const layoutPositionOptions: { position: LayoutType['position'] }[] = [
		{ position: 'fixed' },
		{ position: 'scrollable' }
	];
</script>

<Offcanvas
	isOpen={$layout.isCustomizerOpen}
	toggle={toggleCustomizer}
	placement="end"
	class="overflow-hidden customizer-offcanvas"
>
	<div
		slot="header"
		class="d-flex justify-content-between text-bg-primary gap-2 p-3"
		style="background-image: url({bgPattern});"
	>
		<div>
			<p class="h5 mb-1 fw-bold text-white text-uppercase">Admin Customizer</p>
			<p class="text-white text-opacity-75 fst-italic fw-medium mb-0">
				Easily configure layout, styles, and preferences for your admin interface.
			</p>
		</div>

		<div class="flex-grow-0">
			<button
				on:click={toggleCustomizer}
				type="button"
				class="d-block btn btn-sm bg-white bg-opacity-25 text-white rounded-circle btn-icon"
			>
				<Icon icon="tabler:x" class="fs-lg" />
			</button>
		</div>
	</div>

	<div class="p-0 h-100" data-simplebar>
		<div class="p-3 border-bottom border-dashed">
			<h5 class="mb-3 fw-bold">Select Theme</h5>
			<Row class="g-3">
				{#each skinOptions || [] as item (item.skin)}
					<Col sm={6}>
						<div class="form-check card-radio">
							<input
								id="skin-{item.skin}"
								class="form-check-input"
								type="radio"
								name="data-skin"
								disabled={item.disabled || false}
								value={item.skin}
								checked={item.skin === $layout.skin}
								on:change={() => setSkin(item.skin)}
							/>
							<label class="form-check-label p-0 w-100" for="skin-{item.skin}">
								<img src={item.image} alt="layout-img" class="img-fluid w-100" />
							</label>
						</div>
						<h5 class="text-center text-muted mt-2 mb-0">{toPascalCase(item.skin)}</h5>
					</Col>
				{/each}
			</Row>
		</div>

		<div class="p-3 border-bottom border-dashed">
			<h5 class="mb-3 fw-bold">Color Scheme</h5>
			<Row>
				{#each themeOptions || [] as item (item.theme)}
					<Col sm={4}>
						<div class="form-check card-radio">
							<input
								id="theme-{item.theme}"
								class="form-check-input"
								type="radio"
								name="data-bs-theme"
								value={item.theme}
								checked={item.theme === $layout.theme}
								on:change={() => setTheme(item.theme)}
							/>
							<label class="form-check-label p-0 w-100" for="theme-{item.theme}">
								<img src={item.image} alt="layout-img" class="img-fluid" />
							</label>
						</div>
						<h5 class="text-center text-muted mt-2 mb-0">{toPascalCase(item.theme)}</h5>
					</Col>
				{/each}
			</Row>
		</div>

		<div class="p-3 border-bottom border-dashed">
			<h5 class="mb-3 fw-bold">Orientation</h5>
			<Row>
				{#each orientationOptions || [] as item (item.orientation)}
					<Col sm={4}>
						<div class="form-check card-radio">
							<input
								id="orientation-{item.orientation}"
								class="form-check-input"
								type="radio"
								name="data-layout"
								value={item.orientation}
								checked={item.orientation === $layout.orientation}
								on:change={() => setOrientation(item.orientation)}
							/>
							<label class="form-check-label p-0 w-100" for="orientation-{item.orientation}">
								<img src={item.image} alt="layout-img" class="img-fluid" />
							</label>
						</div>
						<h5 class="text-center text-muted mt-2 mb-0">{toPascalCase(item.orientation)}</h5>
					</Col>
				{/each}
			</Row>
		</div>

		<div class="p-3 border-bottom border-dashed">
			<h5 class="mb-3 fw-bold">Topbar Color</h5>
			<Row class="g-3">
				{#each topBarColorOptions || [] as item (item.color)}
					<Col sm={4}>
						<div class="form-check card-radio">
							<input
								id="topbar-color-{item.color}"
								class="form-check-input"
								type="radio"
								name="data-topbar-color"
								value={item.color}
								checked={item.color === $layout.topBar.color}
								on:change={() => setTopBarColor(item.color)}
							/>
							<label class="form-check-label p-0 w-100" for="topbar-color-{item.color}">
								<img src={item.image} alt="layout-img" class="img-fluid" />
							</label>
						</div>
						<h5 class="text-center text-muted mt-2 mb-0">{toPascalCase(item.color)}</h5>
					</Col>
				{/each}
			</Row>
		</div>

		<div class="p-3 border-bottom border-dashed">
			<h5 class="mb-3 fw-bold">Sidenav Color</h5>
			<Row class="g-3">
				{#each sidenavColorOptions || [] as item (item.color)}
					<Col sm={4}>
						<div class="form-check card-radio">
							<input
								id="sidenav-color-{item.color}"
								class="form-check-input"
								type="radio"
								name="data-menu-color"
								value={item.color}
								checked={item.color === $layout.sidenav.color}
								on:change={() => setSideNavColor(item.color)}
							/>
							<label class="form-check-label p-0 w-100" for="sidenav-color-{item.color}">
								<img src={item.image} alt="layout-img" class="img-fluid" />
							</label>
						</div>
						<h5 class="text-center text-muted mt-2 mb-0">{toPascalCase(item.color)}</h5>
					</Col>
				{/each}
			</Row>
		</div>

		{#if $layout.orientation === 'vertical'}
			<div class="p-3 border-bottom border-dashed">
				<h5 class="mb-3 fw-bold">Sidebar Size</h5>

				<Row class="g-3">
					{#each sidenavSizeOptions || [] as item (item.size)}
						<Col sm={4}>
							<div class="form-check card-radio">
								<input
									id="sidenav-size-{item.size}"
									class="form-check-input"
									type="radio"
									name="data-sidenav-size"
									value={item.size}
									checked={item.size === $layout.sidenav.size}
									on:change={() => setSideNavSize(item.size)}
								/>
								<label class="form-check-label p-0 w-100" for="sidenav-size-{item.size}">
									<img src={item.image} alt="layout-img" class="img-fluid" />
								</label>
							</div>
							<h5 class="text-center text-muted mt-2 mb-0">{toPascalCase(item.label)}</h5>
						</Col>
					{/each}
				</Row>
			</div>

			<div class="p-3 border-bottom border-dashed">
				<div class="d-flex justify-content-between align-items-center">
					<h5 class="fw-bold mb-0">Layout Position</h5>
					<div class="btn-group radio" role="group">
						{#each layoutPositionOptions || [] as item (item.position)}
							<input
								id="layout-position-{item.position}"
								type="radio"
								class="btn-check"
								name="data-layout-position"
								value={item.position}
								checked={item.position === $layout.position}
								on:change={() => setPosition(item.position)}
							/>
							<label class="btn btn-sm btn-soft-warning w-sm" for="layout-position-{item.position}"
								>{toPascalCase(item.position)}</label
							>
						{/each}
					</div>
				</div>
			</div>

			<div class="p-3">
				<div class="d-flex justify-content-between align-items-center">
					<h5 class="mb-0">
						<label class="fw-bold m-0" for="sidenav-user">Sidebar User Info</label>
					</h5>

					<div class="form-check form-switch fs-lg">
						<input
							id="sidenav-user"
							checked={$layout.sidenav.user}
							type="checkbox"
							class="form-check-input"
							name="data-sidenav-user"
							on:change={() => toggleSideNavUser()}
						/>
					</div>
				</div>
			</div>
		{/if}

		<div
			class="offcanvas-footer border-top p-3 text-center position-sticky card mb-0 border-0 rounded-0 bottom-0 start-0 end-0"
		>
			<Row>
				<Col sm={6}>
					<Button color="light" class="fw-semibold py-2 w-100" on:click={reset}>Reset</Button>
				</Col>
				<Col sm={6}>
					<a
						href="https://wrapbootstrap.com/theme/inspinia-multipurpose-admin-dashboard-template-WB0R5L90S?ref=inspinia"
						target="_blank"
						class="btn btn-danger bg-gradient py-2 fw-semibold w-100">Buy Now</a
					>
				</Col>
			</Row>
		</div>
	</div>
</Offcanvas>
