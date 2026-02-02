<script lang="ts">
	import { appDescription, appFavicon, appTitle, author as appAuthor } from '$lib/helpers';

	export let title: string;
	export let description: string = appDescription;
	export let author: string = appAuthor;
	export let favicon: string = appFavicon;
</script>

<svelte:head>
	<title>{title + ' | ' + appTitle}</title>
	<meta name="description" content={description} />
	<meta name="author" content={author} />
	<link rel="icon" href={favicon} />
</svelte:head>
