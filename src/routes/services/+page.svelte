<script lang="ts">
	import CtaBanner from '$lib/components/slices/callouts/CtaBanner.svelte';
	import FeatureListImageText from '$lib/components/slices/features/FeatureListImageText.svelte';
	import HeroClassicSmall from '$lib/components/slices/hero/HeroClassicSmall.svelte';
	import SingleTestimonialTextWithAvatar from '$lib/components/slices/social-proof/SingleTestimonialTextWithAvatar.svelte';

	export let data;

	export const components = {
		CtaBanner: CtaBanner,
		FeatureListImageText: FeatureListImageText,
		HeroClassicSmall: HeroClassicSmall,
		SingleTestimonialTextWithAvatar: SingleTestimonialTextWithAvatar
	};
	function component(comp: string) {
		return components[comp as keyof typeof components];
	}
</script>

{#each data.slices as slice}
	<svelte:component this={component(slice.component)} data={slice.data} />
{/each}
