<script lang="ts">
	import Spacer from '$lib/components/base/Spacer.svelte';
	import Section from '$lib/components/base/Section.svelte';
	import { Accordion, AccordionItem } from '$lib/components/base/accordion';
	import type { FaqItem } from './types';
	import Container from '../base/Container.svelte';
	import Heading from '../base/Heading.svelte';

	const faqs: FaqItem[] = [
		{
			title: 'Can I change the content of my website by my own?',
			content:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit minus aperiam, aliquid reprehenderit maxime rerum praesentium temporibus quas laudantium alias in nesciunt veniam ex sint nisi iure, ab corporis debitis!'
		},
		{
			title: 'Do you use Wordpress for the website?',
			content:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit minus aperiam, aliquid reprehenderit maxime rerum praesentium temporibus quas laudantium alias in nesciunt veniam ex sint nisi iure, ab corporis debitis!'
		},
		{
			title: 'How much does the website cost?',
			content:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit minus aperiam, aliquid reprehenderit maxime rerum praesentium temporibus quas laudantium alias in nesciunt veniam ex sint nisi iure, ab corporis debitis!'
		}
	];
</script>

<Section>
	<Spacer />
	<Container>
		<Heading level="h2" variant="lg" classes="mb-10">Good to know</Heading>
		<Accordion>
			{#each faqs as faq}
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
