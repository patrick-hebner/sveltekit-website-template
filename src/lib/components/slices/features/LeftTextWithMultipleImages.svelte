<script>
	import Container from '$lib/components/base/Container.svelte';
	import Heading from '$lib/components/base/Heading.svelte';
	import Section from '$lib/components/base/Section.svelte';
	import Spacer from '$lib/components/base/Spacer.svelte';
	import SplitScreenContainer from '$lib/components/base/SplitScreenContainer.svelte';
	import Text from '$lib/components/base/Text.svelte';
	import TextWithIcon from '$lib/components/feature/TextWithIcon.svelte';
	import { BadgeCheck } from 'lucide-svelte';
</script>

<Spacer />
<SplitScreenContainer>
	<div slot="left" class="w-full md:w-1/3 min-w-[300px] md:my-40">
		<Heading level="h2" variant="lg">We have the best experts in the industry</Heading>
		<Text classes="mt-4" tag="p">
			Etsy roof party hashtag, iceland gochujang sus copper mug palo santo. Mumblecore wayfarers
			tofu vice pinterest roof party swag cliche 8-bit bodega boys live-edge mukbang freegan.
		</Text>
		<div class="mt-10 flex flex-col gap-4">
			<TextWithIcon>This is some text describing a cool service of the company</TextWithIcon>
			<TextWithIcon>This is some text describing a cool service of the company</TextWithIcon>
			<TextWithIcon>This is some text describing a cool service of the company</TextWithIcon>
		</div>
	</div>
	<div
		slot="right"
		class="h-full pt-10 md:pt-0 gap-2 flex flex-col items-end justify-center grayscale"
	>
		<div class="flex flex-col lg:flex-row gap-2 items-end justify-end">
			<img
				src="/images/featureImage2.jpg"
				alt="Two colleges sitting on table"
				class="w-full order-2 lg:-order-1 md:w-[300px] lg:w-[200px] xl:w-[360px] rounded-3xl flex-shrink-0 h-fit"
			/>
			<img
				src="/images/featureImage1.jpg"
				alt="Two colleges sitting on table"
				class="hidden md:block w-full md:w-[200px] xl:w-[300px] rounded-3xl flex-shrink-0"
			/>
		</div>
		<img
			src="/images/featureImage3.jpg"
			alt="Two colleges sitting on table"
			class="w-full md:w-[200px] lg:w-[300px] xl:w-[400px] rounded-3xl"
		/>
	</div>
</SplitScreenContainer>

<Spacer />
