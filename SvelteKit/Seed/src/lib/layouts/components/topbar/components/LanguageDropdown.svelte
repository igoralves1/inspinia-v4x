<script lang="ts">
	import usFlag from '$lib/assets/images/flags/us.svg';
	import deFlag from '$lib/assets/images/flags/de.svg';
	import itFlag from '$lib/assets/images/flags/it.svg';
	import esFlag from '$lib/assets/images/flags/es.svg';
	import ruFlag from '$lib/assets/images/flags/ru.svg';
	import inFlag from '$lib/assets/images/flags/in.svg';
	import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from '@sveltestrap/sveltestrap';
	import { writable } from 'svelte/store';

	type LanguageOptionType = {
		code: string;
		name: string;
		nativeName: string;
		flag: string;
	};

	const languages: LanguageOptionType[] = [
		{ code: 'en', name: 'English', nativeName: 'English', flag: usFlag },
		{ code: 'de', name: 'German', nativeName: 'Deutsch', flag: deFlag },
		{ code: 'it', name: 'Italian', nativeName: 'Italiano', flag: itFlag },
		{ code: 'es', name: 'Spanish', nativeName: 'Español', flag: esFlag },
		{ code: 'ru', name: 'Russian', nativeName: 'Русский', flag: ruFlag },
		{ code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: inFlag }
	];

	const currentLanguage = writable<LanguageOptionType>(languages[0]);

	const setCurrentLanguage = (language: LanguageOptionType) => {
		currentLanguage.set(language);
	};
</script>

<div class="topbar-item">
	<Dropdown>
		<DropdownToggle nav class="topbar-link fw-bold py-0 px-1">
			<img src={$currentLanguage.flag} alt="flag" class="w-100 rounded me-2" height="18" />
			<span> {$currentLanguage.code.toUpperCase()} </span>
		</DropdownToggle>
		<DropdownMenu end>
			{#each languages as language (language.code)}
				<DropdownItem on:click={() => setCurrentLanguage(language)}>
					<img src={language.flag} alt={language.name} class="me-1 rounded" height="18" />
					<span class="align-middle">{language.nativeName}</span>
				</DropdownItem>
			{/each}
		</DropdownMenu>
	</Dropdown>
</div>
