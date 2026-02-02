import { writable } from 'svelte/store';

export const systemTheme = (() => {
	const theme = writable<'light' | 'dark'>('light');

	if (typeof window !== 'undefined') {
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

		const update = (e: MediaQueryListEvent | MediaQueryList) =>
			theme.set(e.matches ? 'dark' : 'light');

		update(mediaQuery);

		mediaQuery.addEventListener('change', update);
	}

	return theme;
})();
