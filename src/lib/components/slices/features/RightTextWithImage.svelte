<script>
	import Container from '$lib/components/base/Container.svelte';
	import Heading from '$lib/components/base/Heading.svelte';
	import Section from '$lib/components/base/Section.svelte';
	import Spacer from '$lib/components/base/Spacer.svelte';
	import SplitScreenContainer from '$lib/components/base/SplitScreenContainer.svelte';
	import Text from '$lib/components/base/Text.svelte';
	import TextWithIcon from '$lib/components/feature/TextWithIcon.svelte';
</script>

<Spacer />
<SplitScreenContainer>
	<div slot="left" class="h-80 md:h-auto md:max-w-[28rem]">
		<img
			src="/images/featureImage1.jpg"
			alt="Two colleges sitting on table"
			class="w-full h-full object-cover object-bottom md:object-center rounded-3xl"
		/>
	</div>
	<div slot="right" class="pt-10 md:pt-0 md:pl-10 flex flex-col justify-center h-full">
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
</SplitScreenContainer>

<Spacer />
