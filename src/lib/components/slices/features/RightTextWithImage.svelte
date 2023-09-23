<script lang="ts">
	import Heading from '$lib/components/base/Heading.svelte';
	import Image from '$lib/components/base/Image.svelte';
	import Spacer from '$lib/components/base/Spacer.svelte';
	import SplitScreenContainer from '$lib/components/base/SplitScreenContainer.svelte';
	import Text from '$lib/components/base/Text.svelte';
	import TextWithIcon from '$lib/components/feature/TextWithIcon.svelte';
	import type EleventyImage from '@11ty/eleventy-img';

	export let data: {
		title: String;
		text: String;
		bullets: string[];
		image: {
			stats: EleventyImage.Metadata;
			alt: string;
		};
	};
</script>

<Spacer />
<SplitScreenContainer>
	<div slot="left" class="h-80 md:h-auto md:max-w-[28rem]">
		<Image
			stats={data.image.stats}
			alt={data.image.alt}
			sizes="(min-width: 768px) 50vw, 100vw"
			cover
			classes="object-bottom rounded-3xl grayscale"
		/>
	</div>
	<div slot="right" class="pt-10 md:pt-0 md:pl-10 flex flex-col justify-center h-full">
		<Heading level="h2" variant="lg">{data.title}</Heading>
		<Text classes="mt-4" tag="p">
			{data.text}
		</Text>
		<div class="mt-10 flex flex-col gap-4">
			{#each data.bullets as bullet}
				<TextWithIcon>{bullet}</TextWithIcon>
			{/each}
		</div>
	</div>
</SplitScreenContainer>

<Spacer />
