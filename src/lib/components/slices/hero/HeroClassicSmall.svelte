<script lang="ts">
	import Section from '$lib/components/base/Section.svelte';
	import Container from '$lib/components/base/Container.svelte';
	import Heading from '$lib/components/base/Heading.svelte';
	import Text from '$lib/components/base/Text.svelte';
	import Spacer from '$lib/components/base/Spacer.svelte';
	import Image from '$lib/components/base/Image.svelte';
	import type EleventyImage from '@11ty/eleventy-img';

	export let data: {
		title: string;
		subtitle: string;
		cta: {
			title: string;
			link: string;
		};
		image: {
			stats: EleventyImage.Metadata;
			alt: string;
		};
	};
</script>

<Section classes="relative">
	<Spacer />
	<div
		class="absolute bottom-0 left-0 h-full w-full bg-gradient-to-tr from-primary-500/30 to-transparent z-10"
	/>
	<Container classes="relative z-10 flex flex-col pb-10 pt-[20vw]">
		<Heading classes="text-inverted mt-auto" level="h1" variant="lg">{data.title}</Heading>
		<Text classes="text-inverted max-w-3xl mt-4" tag="p" variant="large">
			{data.subtitle}
		</Text>
	</Container>
	<div class="absolute inset-0 z-0">
		<Image classes="grayscale" cover stats={data.image.stats} alt={data.image.alt} />
	</div>
</Section>
