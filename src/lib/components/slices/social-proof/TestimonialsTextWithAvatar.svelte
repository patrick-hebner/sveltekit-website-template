<script lang="ts">
	import Container from '$lib/components/base/Container.svelte';
	import Heading from '$lib/components/base/Heading.svelte';
	import Section from '$lib/components/base/Section.svelte';
	import Spacer from '$lib/components/base/Spacer.svelte';
	import TestimonialWithAvatar from '$lib/components/social-proof/TestimonialWithAvatar.svelte';

	let personImages: string[] = [
		'/images/people/joel.jpg',
		'/images/people/ransford.jpg',
		'/images/people/toa.jpg'
	];
</script>

<Section>
	<Spacer />
	<Container>
		<Heading variant="sm" level="h2" classes="text-primary-500 text-center mx-auto"
			>What our clients say</Heading
		>
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 mt-20">
			<TestimonialWithAvatar
				name="Mary Jason"
				position="CEO of Mary Creatives"
				imageUrl={personImages[0]}
				>I'm baby hexagon tote bag marfa 8-bit. Put a bird on it mustache craft beer meditation.
				Shoreditch before they sold out jawn succulents keytar, freegan wolf irony. Bicycle rights
				portland tbh cupping shabby chic.</TestimonialWithAvatar
			>
			<TestimonialWithAvatar
				name="Joel Hanson"
				position="CEO of Joel Creatives"
				imageUrl={personImages[1]}
				>I'm baby hexagon tote bag marfa 8-bit. Put a bird on it mustache craft beer meditation.
				Shoreditch before they sold out jawn succulents keytar, freegan wolf irony. Bicycle rights
				portland tbh cupping shabby chic.</TestimonialWithAvatar
			>
			<TestimonialWithAvatar
				name="July Harrison"
				position="CEO of July Creatives"
				imageUrl={personImages[2]}
				>I'm baby hexagon tote bag marfa 8-bit. Put a bird on it mustache craft beer meditation.
				Shoreditch before they sold out jawn succulents keytar, freegan wolf irony. Bicycle rights
				portland tbh cupping shabby chic.</TestimonialWithAvatar
			>
		</div>
	</Container>
	<Spacer />
</Section>
