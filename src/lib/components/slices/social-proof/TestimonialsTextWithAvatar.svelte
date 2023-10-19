<script lang="ts">
	import Container from '$lib/components/base/Container.svelte';
	import Heading from '$lib/components/base/Heading.svelte';
	import Section from '$lib/components/base/Section.svelte';
	import Spacer from '$lib/components/base/Spacer.svelte';
	import TestimonialWithAvatar from '$lib/components/social-proof/TestimonialWithAvatar.svelte';
	import type { TestimonialsTextWithAvatar } from '../types';

	export let data: TestimonialsTextWithAvatar;
</script>

<Section>
	<Spacer />
	<Container>
		<Heading variant="sm" level="h2" classes="text-primary-600 text-center mx-auto"
			>{data.title}</Heading
		>
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 mt-20">
			{#each data.testimonials as testimonial}
				<TestimonialWithAvatar
					name={testimonial.name}
					position={testimonial.position}
					image={testimonial.image}>{testimonial.content}</TestimonialWithAvatar
				>
			{/each}
		</div>
	</Container>
	<Spacer />
</Section>
