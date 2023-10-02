<script lang="ts">
	import Spacer from '$lib/components/base/Spacer.svelte';
	import Section from '$lib/components/base/Section.svelte';
	import { Accordion, AccordionItem } from '$lib/components/base/accordion';
	import Container from '../../base/Container.svelte';
	import Heading from '../../base/Heading.svelte';
	import type { FaqClassic } from '../types';

	export let data: FaqClassic;
</script>

<Section>
	<Spacer />
	<Container>
		<Heading level="h2" variant="lg" classes="mb-10">{data.title}</Heading>
		<Accordion>
			{#each data.faqs as faq}
				<AccordionItem>
					<svelte:fragment slot="title">
						{faq.title}
					</svelte:fragment>
					<svelte:fragment slot="content">{faq.content}</svelte:fragment>
				</AccordionItem>
			{/each}
		</Accordion>
	</Container>
	<Spacer />
</Section>
