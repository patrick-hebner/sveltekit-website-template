<script lang="ts">
	import Container from '$lib/components/base/Container.svelte';
	import Heading from '$lib/components/base/Heading.svelte';
	import Section from '$lib/components/base/Section.svelte';
	import Spacer from '$lib/components/base/Spacer.svelte';

	export let data: {
		title: string;
		logos: string[];
	};
</script>

<Section>
	<Spacer />
	<Container>
		<Heading variant="sm" level="h2" classes="text-primary-500 text-center max-w-md mx-auto"
			>{data.title}</Heading
		>
		<div class="mt-20 grid grid-cols-3 lg:grid-cols-6 place-items-center gap-10">
			{#each data.logos as logoUrl}
				<div class="w-16 h-1w-16">
					<img src={logoUrl} alt="company logo" class="h-full w-full object-contain" />
				</div>
			{/each}
		</div>
	</Container>
	<Spacer />
</Section>
