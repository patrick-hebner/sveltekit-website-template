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
</script>

<HeroClassic data={data.heroClassic} />
<StaticCompaniesBanner data={data.staticCompaniesBanner} />
<LeftTextWithMultipleImages data={data.leftTextWithMultipleImages} />
<FeatureGrid data={data.featureGrid} />
<RightTextWithImage data={data.rightTextWithImage} />
<TestimonialsTextWithAvatar data={data.testimonialsTextWithAvatar} />
<FaqClassic data={data.faqClassic} />
<CtaBanner data={data.ctaBanner} />
