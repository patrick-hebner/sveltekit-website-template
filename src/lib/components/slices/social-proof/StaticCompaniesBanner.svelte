<script lang="ts">
	import Container from '$lib/components/base/Container.svelte';
	import Heading from '$lib/components/base/Heading.svelte';
	import Section from '$lib/components/base/Section.svelte';
	import Spacer from '$lib/components/base/Spacer.svelte';

	let companyLogoUrls: string[] = [
		'/images/companies/apple.png',
		'/images/companies/nike.png',
		'/images/companies/airbnb.png',
		'/images/companies/coca-cola.png',
		'/images/companies/netflix.png',
		'/images/companies/mcdonald.png'
	];
</script>

<Section>
	<Spacer />
	<Container>
		<Heading variant="md" level="h2" classes="text-primary-500 text-center"
			>We work with top notch companies around the globe</Heading
		>
		<div class="mt-10 grid grid-cols-3 lg:grid-cols-6 place-items-center gap-10">
			{#each companyLogoUrls as logoUrl}
				<div class="w-16 h-1w-16">
					<img src={logoUrl} alt="company logo" class="h-full w-full object-contain" />
				</div>
			{/each}
		</div>
	</Container>
	<Spacer />
</Section>
