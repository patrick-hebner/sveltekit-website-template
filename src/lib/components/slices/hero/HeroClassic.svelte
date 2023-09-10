<script>
	import Section from '$lib/components/base/Section.svelte';
	import Container from '$lib/components/base/Container.svelte';
	import Heading from '$lib/components/base/Heading.svelte';
	import Text from '$lib/components/base/Text.svelte';
	import LinkButton from '../../base/LinkButton.svelte';
	import Spacer from '$lib/components/base/Spacer.svelte';
</script>

<Section classes="relative min-h-screen">
	<Container classes="relative z-10 min-h-screen flex flex-col py-20">
		<Heading classes="text-inverted mt-auto" level="h1" variant="xl"
			>We create the digital products of tomorow</Heading
		>
		<Text classes="text-inverted max-w-3xl mt-4" tag="p" variant="large">
			Etsy roof party hashtag, iceland gochujang sus copper mug palo santo. Mumblecore wayfarers
			tofu vice pinterest roof party swag cliche 8-bit bodega boys live-edge mukbang freegan.
		</Text>
		<LinkButton variant="large" classes="mt-10">Let's build together</LinkButton>
	</Container>
	<div class=" w-[2px] absolute z-10 top-0 right-10 h-full overflow-hidden">
		<div class="scroll-indicator w-[2px] bg-white absolute z-10 left-0 h-full" />
	</div>
	<div class="absolute inset-0 z-0">
		<img class="h-full w-full object-cover" src="/images/hero.jpg" alt="hero" />
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
