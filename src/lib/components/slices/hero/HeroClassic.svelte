<script lang="ts">
	import Section from '$lib/components/base/Section.svelte';
	import Container from '$lib/components/base/Container.svelte';
	import Heading from '$lib/components/base/Heading.svelte';
	import Text from '$lib/components/base/Text.svelte';
	import LinkButton from '../../base/LinkButton.svelte';
	import Image from '$lib/components/base/Image.svelte';
	import type { HeroClassic } from '../types';

	export let data: HeroClassic;
</script>

<Section classes="relative min-h-screen overflow-hidden">
	<div
		class="absolute bottom-0 left-0 h-full w-full bg-gradient-to-tr from-primary-700/60 to-transparent z-10"
	/>
	<Container classes="relative z-10 min-h-screen flex flex-col py-20">
		<Heading classes="text-inverted mt-auto" level="h1" variant="xl">{data.title}</Heading>
		<Text classes="text-inverted max-w-3xl mt-4" tag="p" variant="large">
			{data.subtitle}
		</Text>
		<LinkButton href={data.cta.link} variant="large" classes="mt-10">{data.cta.title}</LinkButton>
	</Container>
	<div class=" w-[2px] absolute z-10 top-0 right-10 h-full overflow-hidden">
		<div class="scroll-indicator w-[2px] bg-white absolute z-20 left-0 h-full" />
	</div>
	<div class="absolute inset-0 z-0">
		<Image eager cover src={data.image.src} alt={data.image.alt} />
	</div>
</Section>

<style>
	@keyframes grow {
		0% {
			top: 0%;
			height: 0;
		}

		50% {
			top: 0%;
			height: 100%;
		}

		100% {
			top: 100%;
		}
	}

	.scroll-indicator {
		animation-name: grow;
		animation-duration: 3s;
		animation-iteration-count: infinite;
		animation-timing-function: ease-out;
	}
</style>
