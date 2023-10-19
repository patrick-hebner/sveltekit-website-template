<script lang="ts">
	import TextWithIcon from '$lib/components/feature/TextWithIcon.svelte';
	import Image from '$lib/components/base/Image.svelte';
	import Heading from '$lib/components/base/Heading.svelte';
	import Text from '$lib/components/base/Text.svelte';
	import { cn } from '$lib/utils/cn';

	export let inverted = false;
	export let data: {
		title: String;
		text: String;
		bullets?: string[];
		image: {
			src: string;
			alt: string;
		};
	};
</script>

<div class="flex flex-col md:flex-row flex-1 gap-6 md:gap-10 items-center">
	<div class="md:w-1/2 max-h-full w-full">
		<Image
			src={data.image.src}
			alt={data.image.alt}
			cover
			classes="rounded-3xl grayscale w-full max-h-[240px] md:max-h-full"
		/>
	</div>
	<div class={cn('md:w-1/2', { 'md:-order-2': inverted })}>
		<Heading level="h2" variant="md">{data.title}</Heading>
		<Text classes="mt-4" tag="p">
			{data.text}
		</Text>
		{#if data.bullets}
			<div class="mt-10 flex flex-col gap-4">
				{#each data.bullets as bullet}
					<TextWithIcon>{bullet}</TextWithIcon>
				{/each}
			</div>
		{/if}
	</div>
</div>
