<script lang="ts">
	import '@fontsource/poppins/300.css';
	import '@fontsource/poppins/600.css';
	import '@fontsource/poppins/700.css';
	import '$lib/styles/app.css';
	import SimpleHeader from '$lib/components/layout/headers/SimpleHeader.svelte';
	import SimpleCenteredFooter from '$lib/components/layout/footers/SimpleCenteredFooter.svelte';
	import { page } from '$app/stores';

	$: title = $page.data.seo?.title || '';
	$: pageTitle = `${title}${title ? ' - ' : ''}WebsiteName`;
</script>

<svelte:head>
	<title>{pageTitle}</title>
	{#if $page.data.seo?.description}
		<meta name="description" content={$page.data.seo.description} />
	{/if}
</svelte:head>

<div class="flex flex-col h-screen">
	<SimpleHeader />
	<main class="flex-grow">
		<slot />
	</main>
	<SimpleCenteredFooter />
</div>
