<script lang="ts">
	import CtaBanner from '$lib/components/slices/callouts/CtaBanner.svelte';
	import FaqClassic from '$lib/components/slices/faq/FaqClassic.svelte';
	import FeatureGrid from '$lib/components/slices/features/FeatureGrid.svelte';
	import LeftTextWithMultipleImages from '$lib/components/slices/features/LeftTextWithMultipleImages.svelte';
	import RightTextWithImage from '$lib/components/slices/features/RightTextWithImage.svelte';
	import HeroClassic from '$lib/components/slices/hero/HeroClassic.svelte';
	import StaticCompaniesBanner from '$lib/components/slices/social-proof/StaticCompaniesBanner.svelte';
	import TestimonialsTextWithAvatar from '$lib/components/slices/social-proof/TestimonialsTextWithAvatar.svelte';
	export let data;

	const components = {
		CtaBanner: CtaBanner,
		FaqClassic: FaqClassic,
		FeatureGrid: FeatureGrid,
		LeftTextWithMultipleImages: LeftTextWithMultipleImages,
		RightTextWithImage: RightTextWithImage,
		HeroClassic: HeroClassic,
		StaticCompaniesBanner: StaticCompaniesBanner,
		TestimonialsTextWithAvatar: TestimonialsTextWithAvatar
	};
	function component(comp: string) {
		return components[comp as keyof typeof components];
	}
</script>

{#each data.slices as slice}
	<svelte:component this={component(slice.component)} data={slice.data} />
{/each}
