<script lang="ts">
	import Container from '$lib/components/base/Container.svelte';
	import Spacer from '$lib/components/base/Spacer.svelte';
	import TextWithImage from '$lib/components/feature/TextWithImage.svelte';
	import type EleventyImage from '@11ty/eleventy-img';

	export let data: {
		features: {
			title: String;
			text: String;
			bullets?: string[];
			image: {
				stats: EleventyImage.Metadata;
				alt: string;
			};
		}[];
	};
</script>

<Spacer size="large" />
<Container classes="flex flex-col gap-10 lg:gap-20">
	{#each data.features as feature, i}
		<TextWithImage data={feature} inverted={i % 2 !== 0} />
	{/each}
</Container>
<Spacer size="large" />
