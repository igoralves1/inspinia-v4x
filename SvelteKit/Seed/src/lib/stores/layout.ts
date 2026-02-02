import { persisted } from 'svelte-persisted-store';
import { type Writable } from 'svelte/store';
import { toggleAttribute } from '$lib/helpers/layout';
import type { LayoutType } from '$lib/types/layout';
import { systemTheme } from '$lib/helpers/systemTheme';

// default layout state
const INIT_STATE: LayoutType = {
	skin: 'classic',
	theme: 'light',
	orientation: 'vertical',
	sidenav: {
		size: 'default',
		color: 'dark',
		user: true
	},
	topBar: {
		color: 'light'
	},
	position: 'fixed',
	width: 'fluid',
	isCustomizerOpen: false
};

export const layout: Writable<LayoutType> = persisted('layout', INIT_STATE);

let skin: LayoutType['skin'];
let theme: LayoutType['theme'];
let orientation: LayoutType['orientation'];
let sidenavSize: LayoutType['sidenav']['size'];
let sidenavColor: LayoutType['sidenav']['color'];
let sidenavUser: LayoutType['sidenav']['user'];
let topBarColor: LayoutType['topBar']['color'];
let position: LayoutType['position'];
let width: LayoutType['width'];

layout.subscribe((current) => {
	skin = current.skin;
	theme = current.theme;
	orientation = current.orientation;
	sidenavSize = current.sidenav?.size;
	sidenavColor = current.sidenav?.color;
	sidenavUser = current.sidenav?.user;
	topBarColor = current.topBar?.color;
	position = current.position;
	width = current.width;
});

const updateLayout = (key: keyof LayoutType, value: LayoutType[keyof LayoutType]) => {
	layout.update((current) => ({
		...current,
		[key]: value
	}));
};

export const setSkin = (nSkin: LayoutType['skin'], persist = true) => {
	toggleAttribute('data-skin', nSkin);
	if (persist) {
		updateLayout('skin', nSkin);
	}
};

export const setTheme = (nTheme: LayoutType['theme'], persist = true) => {
	let resolvedTheme: LayoutType['theme'] = nTheme;

	if (nTheme === 'system') {
		systemTheme.subscribe((value) => {
			resolvedTheme = value;
		});
	}

	toggleAttribute('data-bs-theme', resolvedTheme);
	if (persist) {
		updateLayout('theme', nTheme);
	}
};

export const setOrientation = (nOrientation: LayoutType['orientation'], persist = true) => {
	toggleAttribute('data-layout', nOrientation === 'horizontal' ? 'topnav' : '');
	if (persist) {
		updateLayout('orientation', nOrientation);
	}
};

export const setSideNavColor = (nColor: LayoutType['sidenav']['color'], persist = true) => {
	toggleAttribute('data-menu-color', nColor);
	if (persist) {
		updateLayout('sidenav', { color: nColor, size: sidenavSize, user: sidenavUser });
	}
};

export const setSideNavSize = (nSize: LayoutType['sidenav']['size'], persist = true) => {
	toggleAttribute('data-sidenav-size', nSize);
	if (persist) {
		updateLayout('sidenav', { color: sidenavColor, size: nSize, user: sidenavUser });
	}
};

export const setSideNavUser = (nValue: LayoutType['sidenav']['user'], persist = true) => {
	toggleAttribute('data-sidenav-user', String(nValue));
	if (persist) {
		updateLayout('sidenav', { color: sidenavColor, size: sidenavSize, user: nValue });
	}
};

export const setTopBarColor = (nColor: LayoutType['topBar']['color'], persist = true) => {
	toggleAttribute('data-topbar-color', nColor);
	if (persist) {
		updateLayout('topBar', { color: nColor });
	}
};

export const setPosition = (nPosition: LayoutType['position'], persist = true) => {
	toggleAttribute('data-layout-position', nPosition);
	if (persist) {
		updateLayout('position', nPosition);
	}
};

export const setWidth = (nWidth: LayoutType['width'], persist = true) => {
	toggleAttribute('data-layout-width', nWidth);
	if (persist) {
		updateLayout('width', nWidth);
	}
};

export const toggleSideNavUser = () => {
	setSideNavUser(!sidenavUser);
};

export const toggleCustomizer = () => {
	layout.update((current) => ({
		...current,
		isCustomizerOpen: !current.isCustomizerOpen
	}));
};

export const init = () => {
	if (skin) setSkin(skin);
	if (orientation) setOrientation(orientation);
	if (theme) setTheme(theme);
	if (sidenavColor) setSideNavColor(sidenavColor);
	if (sidenavSize) setSideNavSize(sidenavSize);
	if (sidenavUser) setSideNavUser(sidenavUser);
	if (topBarColor) setTopBarColor(topBarColor);
	if (position) setPosition(position);
	if (width) setWidth(width);
};

export const reset = () => {
	setSkin(INIT_STATE.skin);
	setOrientation(INIT_STATE.orientation);
	setTheme(INIT_STATE.theme);
	setSideNavColor(INIT_STATE.sidenav.color);
	setSideNavSize(INIT_STATE.sidenav.size);
	setSideNavUser(INIT_STATE.sidenav.user);
	setTopBarColor(INIT_STATE.topBar.color);
	setPosition(INIT_STATE.position);
	setWidth(INIT_STATE.width);
};
