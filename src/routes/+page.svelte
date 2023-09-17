<script lang="ts">
	import Section from '$lib/components/base/Section.svelte';
	import Spacer from '$lib/components/base/Spacer.svelte';
	import { Accordion } from '$lib/components/base/accordion';
	import AccordionItem from '$lib/components/base/accordion/AccordionItem.svelte';
	import CtaBanner from '$lib/components/callouts/CtaBanner.svelte';
	import SimpleCenteredFooter from '$lib/components/footers/SimpleCenteredFooter.svelte';
	import SimpleHeader from '$lib/components/headers/SimpleHeader.svelte';
	import FeatureGrid from '$lib/components/slices/features/FeatureGrid.svelte';
	import LeftTextWithMultipleImages from '$lib/components/slices/features/LeftTextWithMultipleImages.svelte';
	import RightTextWithImage from '$lib/components/slices/features/RightTextWithImage.svelte';
	import HeroClassic from '$lib/components/slices/hero/HeroClassic.svelte';
	import StaticCompaniesBanner from '$lib/components/slices/social-proof/StaticCompaniesBanner.svelte';
	import TestimonialsTextWithAvatar from '$lib/components/slices/social-proof/TestimonialsTextWithAvatar.svelte';
	const items = [
		{
			title: 'This is the title of accordion itme 1',
			content: 'this is the content of accordion item 1',
			open: true
		},
		{
			title: 'This is the title of accordion itme 2',
			content: 'this is the content of accordion item 2'
		},
		{
			title: 'This is the title of accordion itme 3',
			content: 'this is the content of accordion item 3'
		},
		{
			title: 'This is the title of accordion itme 4',
			content: 'this is the content of accordion item 4'
		}
	];
</script>

<HeroClassic />
<Section>
	<Spacer />
	<Accordion collapse>
		{#each items as item}
			<AccordionItem open={item.open}>
				<svelte:fragment slot="title">{item.title}</svelte:fragment>
				<svelte:fragment slot="content">{item.content}</svelte:fragment>
			</AccordionItem>
		{/each}
	</Accordion>
	<Spacer />
</Section>
<StaticCompaniesBanner />
<LeftTextWithMultipleImages />
<FeatureGrid />
<RightTextWithImage />
<TestimonialsTextWithAvatar />
<CtaBanner />
