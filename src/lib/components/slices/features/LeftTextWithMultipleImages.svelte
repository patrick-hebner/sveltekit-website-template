<script lang="ts">
	import Heading from '$lib/components/base/Heading.svelte';
	import Image from '$lib/components/base/Image.svelte';
	import Spacer from '$lib/components/base/Spacer.svelte';
	import SplitScreenContainer from '$lib/components/base/SplitScreenContainer.svelte';
	import Text from '$lib/components/base/Text.svelte';
	import TextWithIcon from '$lib/components/feature/TextWithIcon.svelte';
	import type { LeftTextWithMultipleImages } from '../types';

	export let data: LeftTextWithMultipleImages;
</script>

<Spacer />
<SplitScreenContainer>
	<div slot="left" class="w-full min-w-[300px] lg:max-w-[400px]">
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
	<div
		slot="right"
		class="h-full pt-10 md:pt-0 gap-2 flex flex-col items-end justify-center grayscale"
	>
		<div class="flex flex-col lg:flex-row gap-2 items-end justify-end">
			<Image
				stats={data.images.image1.stats}
				alt={data.images.image1.alt}
				pictureClasses="order-2 lg:order-1"
				classes="w-full md:w-[200px] lg:w-[200px] xl:w-[300px] rounded-3xl flex-shrink-0 h-fit"
			/>
			<Image
				stats={data.images.image2.stats}
				alt={data.images.image2.alt}
				classes="hidden md:block w-full md:w-[200px] xl:w-[300px] rounded-3xl flex-shrink-0"
			/>
		</div>
		<Image
			stats={data.images.image3.stats}
			alt={data.images.image3.alt}
			classes="w-full md:w-[200px] lg:w-[300px] xl:w-[400px] rounded-3xl"
		/>
	</div>
</SplitScreenContainer>

<Spacer />
