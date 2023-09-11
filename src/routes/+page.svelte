<script>
	import Section from '$lib/components/base/Section.svelte';
	import SplitScreenContainer from '$lib/components/base/SplitScreenContainer.svelte';
	import FeatureGrid from '$lib/components/slices/features/FeatureGrid.svelte';
	import LeftTextWithMultipleImages from '$lib/components/slices/features/LeftTextWithMultipleImages.svelte';
	import RightTextWithImage from '$lib/components/slices/features/RightTextWithImage.svelte';
	import HeroClassic from '$lib/components/slices/hero/HeroClassic.svelte';
	import StaticCompaniesBanner from '$lib/components/slices/social-proof/StaticCompaniesBanner.svelte';
</script>

<HeroClassic />

<StaticCompaniesBanner />
<LeftTextWithMultipleImages />
<FeatureGrid />
<RightTextWithImage />
