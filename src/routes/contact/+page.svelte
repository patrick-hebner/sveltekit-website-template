<script lang="ts">
	import HeroClassicSmall from '$lib/components/slices/hero/HeroClassicSmall.svelte';
	import Contact from '$lib/components/slices/forms/Contact.svelte';

	export let data;
</script>

<HeroClassicSmall data={data.heroClassicSmall} />
<Contact data={data.contact} />
