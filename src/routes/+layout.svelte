<script>
	import '@fontsource/poppins/300.css';
	import '@fontsource/poppins/600.css';
	import '@fontsource/poppins/700.css';
	import '$lib/styles/app.css';
	import SimpleHeader from '$lib/components/headers/SimpleHeader.svelte';
	import SimpleCenteredFooter from '$lib/components/footers/SimpleCenteredFooter.svelte';
</script>

<SimpleHeader />
<main>
	<slot />
</main>
<SimpleCenteredFooter />
