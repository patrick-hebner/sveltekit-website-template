<script lang="ts">
	import CtaBanner from '$lib/components/slices/callouts/CtaBanner.svelte';
	import FaqClassic from '$lib/components/faq/FaqClassic.svelte';
	import FeatureGrid from '$lib/components/slices/features/FeatureGrid.svelte';
	import LeftTextWithMultipleImages from '$lib/components/slices/features/LeftTextWithMultipleImages.svelte';
	import RightTextWithImage from '$lib/components/slices/features/RightTextWithImage.svelte';
	import HeroClassic from '$lib/components/slices/hero/HeroClassic.svelte';
	import StaticCompaniesBanner from '$lib/components/slices/social-proof/StaticCompaniesBanner.svelte';
	import TestimonialsTextWithAvatar from '$lib/components/slices/social-proof/TestimonialsTextWithAvatar.svelte';
	import { Slice } from 'lucide-svelte';

	const slices = [
		{
			component: HeroClassic,
			data: {
				title: 'We create the digital products of tomorow',
				subtitle:
					'Etsy roof party hashtag, iceland gochujang sus copper mug palo santo. Mumblecore wayfarers tofu vice pinterest roof party swag cliche 8-bit bodega boys live-edge mukbang freegan.',
				cta: {
					title: "Let's build together",
					link: ''
				},
				image: {
					src: '/images/hero.jpg',
					alt: ''
				}
			}
		},
		{
			component: StaticCompaniesBanner,
			data: {
				title: 'We work with top notch companies around the globe',
				logos: [
					'/images/companies/apple.png',
					'/images/companies/nike.png',
					'/images/companies/airbnb.png',
					'/images/companies/coca-cola.png',
					'/images/companies/netflix.png',
					'/images/companies/mcdonald.png'
				]
			}
		}
	];
</script>

{#each slices as slice}
	<svelte:component this={slice.component} data={slice.data} />
{/each}

<!-- <HeroClassic />
<StaticCompaniesBanner />
<LeftTextWithMultipleImages />
<FeatureGrid />
<RightTextWithImage />
<TestimonialsTextWithAvatar />
<FaqClassic />
<CtaBanner /> -->
