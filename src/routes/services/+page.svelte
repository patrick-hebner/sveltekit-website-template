<script lang="ts">
	import CtaBanner from '$lib/components/slices/callouts/CtaBanner.svelte';
	import FeatureListImageText from '$lib/components/slices/features/FeatureListImageText.svelte';
	import HeroClassicSmall from '$lib/components/slices/hero/HeroClassicSmall.svelte';
	import SingleTestimonialTextWithAvatar from '$lib/components/slices/social-proof/SingleTestimonialTextWithAvatar.svelte';

	export let data;
</script>

<HeroClassicSmall data={data.heroClassicSmall} />
<FeatureListImageText data={data.featureListImageText} />
<SingleTestimonialTextWithAvatar data={data.singleTestimonialTextWithAvatar} />
<CtaBanner data={data.ctaBanner} />
