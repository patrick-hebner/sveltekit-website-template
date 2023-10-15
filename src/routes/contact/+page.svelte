<script lang="ts">
	import HeroClassicSmall from '$lib/components/slices/hero/HeroClassicSmall.svelte';
	import Contact from '$lib/components/slices/forms/Contact.svelte';

	export let data;

	export const components = {
		HeroClassicSmall: HeroClassicSmall,
		Contact: Contact
	};
	function component(comp: string) {
		return components[comp as keyof typeof components];
	}
</script>

{#each data.slices as slice}
	<svelte:component this={component(slice.component)} data={slice.data} />
{/each}
