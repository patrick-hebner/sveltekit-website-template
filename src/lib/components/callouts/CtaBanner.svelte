<script>
	import Container from '../base/Container.svelte';
	import Heading from '../base/Heading.svelte';
	import LinkButton from '../base/LinkButton.svelte';
	import Section from '../base/Section.svelte';
	import Spacer from '../base/Spacer.svelte';
</script>

<Spacer />
<Section classes="bg-primary-400 overflow-hidden">
	<div
		class="background absolute -right-[800px] -bottom-[800px] bg-primary-500 w-[1600px] h-[1600px] rounded-full z-0"
	/>
	<Spacer size="large" />
	<Container classes="relative z-10">
		<Heading classes="text-inverted">Convinced? Let's start a project!</Heading>
		<LinkButton inverted variant="large" classes="mt-10">Contact Us!</LinkButton>
	</Container>
	<Spacer size="large" />
</Section>
