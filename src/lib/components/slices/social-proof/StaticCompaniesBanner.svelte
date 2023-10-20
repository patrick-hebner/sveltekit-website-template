<script lang="ts">
	import Container from '$lib/components/base/Container.svelte';
	import Heading from '$lib/components/base/Heading.svelte';
	import Image from '$lib/components/base/Image.svelte';
	import Section from '$lib/components/base/Section.svelte';
	import Spacer from '$lib/components/base/Spacer.svelte';
	import type { StaticCompaniesBanner } from '../types';

	export let data: StaticCompaniesBanner;
</script>

<Section>
	<Spacer />
	<Container>
		<Heading variant="sm" level="h2" classes="text-primary-600 text-center max-w-md mx-auto"
			>{data.title}</Heading
		>
		<div class="mt-20 grid grid-cols-3 lg:grid-cols-6 place-items-center gap-10">
			{#each data.logos as logo}
				<div class="w-16 h-1w-16">
					<Image width="200" height="75" src={logo.src} alt={logo.alt} />
				</div>
			{/each}
		</div>
	</Container>
	<Spacer />
</Section>
